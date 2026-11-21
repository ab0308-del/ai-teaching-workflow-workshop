// 簡報內的即時投票結果看板（投影用）
(() => {
  const V = window.AI_VOTE;
  if (!V) return;
  const boards = [...document.querySelectorAll('[data-vote-board]')];
  if (!boards.length) return;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const toolKeys = Object.keys(V.tools);
  const revealed = new Set();
  let focused = null;
  let latest = { result: null, voters: 0 };
  let timer = null;
  let failed = false;

  // 投票網址與 QR Code
  const voteUrl = new URL('vote.html', location.href);
  voteUrl.hash = '';
  voteUrl.search = V.round === V.defaultRound ? '' : `?r=${V.round}`;
  const isLocal = location.protocol === 'file:';
  document.querySelectorAll('[data-vote-url]').forEach(el => {
    el.textContent = isLocal ? '（上線後這裡會顯示投票網址）' : voteUrl.href.replace(/^https?:\/\//, '');
  });
  document.querySelectorAll('[data-vote-qr]').forEach(el => {
    if (typeof qrcode !== 'function') { el.innerHTML = '<span class="qr-fallback">QR Code 載入失敗<br>請改用下方網址</span>'; return; }
    const qr = qrcode(0, 'M');
    qr.addData(voteUrl.href);
    qr.make();
    el.innerHTML = qr.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
  });

  function rowHtml(s) {
    const t = latest.result?.[s.id] || { chatgpt: 0, gemini: 0, notebook: 0, total: 0 };
    const open = revealed.has(s.id);
    const segs = toolKeys.map(k => {
      const pct = t.total ? Math.round(t[k] / t.total * 100) : 0;
      return `<span class="seg${s.pick === k && open ? ' is-pick' : ''}" style="width:${t.total ? t[k] / t.total * 100 : 0}%;background:${V.tools[k].color}" title="${esc(V.tools[k].label)} ${t[k]} 票">${pct >= 14 ? `${pct}%` : ''}</span>`;
    }).join('');
    const pickTool = V.tools[s.pick];
    return `<button class="vote-row${open ? ' open' : ''}" data-vote-id="${esc(s.id)}" aria-expanded="${open}">
      <span class="vr-name"><span aria-hidden="true">${esc(s.icon)}</span>${esc(s.name)}</span>
      <span class="vr-bar${t.total ? '' : ' empty'}">${t.total ? segs : '<em>等待作答⋯</em>'}</span>
      <span class="vr-pick" style="--pick:${pickTool.color}">${open ? `★ ${esc(pickTool.short)}` : '點我揭曉'}</span>
    </button>`;
  }

  function render() {
    boards.forEach(board => { board.innerHTML = V.scenarios.map(rowHtml).join(''); });
    document.querySelectorAll('[data-vote-voters]').forEach(el => { el.textContent = latest.voters; });
  }

  function showReason(id) {
    const s = V.scenarios.find(x => x.id === id);
    document.querySelectorAll('[data-vote-reason]').forEach(el => {
      if (!s || !revealed.has(id)) { el.hidden = true; return; }
      const also = s.also.map(k => V.tools[k].label).join('、');
      el.hidden = false;
      el.innerHTML = `<b style="color:${V.tools[s.pick].color}">${esc(s.icon)} ${esc(s.name)} → 凱琳老師首選：${esc(V.tools[s.pick].label)}</b><span>${esc(s.reason)}${also ? `（也很適合：${esc(also)}）` : ''}</span>`;
    });
  }

  document.addEventListener('click', event => {
    const row = event.target.closest('[data-vote-id]');
    if (row) {
      const id = row.dataset.voteId;
      if (revealed.has(id) && focused === id) { revealed.delete(id); focused = null; }
      else { revealed.add(id); focused = id; }
      render(); showReason(focused);
      return;
    }
    if (event.target.closest('[data-vote-reveal-all]')) { V.scenarios.forEach(s => revealed.add(s.id)); focused = null; render(); showReason(null); }
    if (event.target.closest('[data-vote-hide-all]')) { revealed.clear(); focused = null; render(); showReason(null); }
  });

  async function refresh() {
    try {
      const rows = await V.api.fetchVotes();
      latest = V.api.tally(rows);
      failed = false;
      render();
    } catch (err) {
      if (!failed) console.warn(err);
      failed = true;
      document.querySelectorAll('[data-vote-voters]').forEach(el => { el.textContent = '—'; });
    }
  }

  function onSlide() {
    const active = document.querySelector('.slide.active [data-vote-board]');
    clearInterval(timer); timer = null;
    if (active) { refresh(); timer = setInterval(refresh, 3000); }
  }
  document.addEventListener('slidechange', onSlide);
  render();
  onSlide();
})();
