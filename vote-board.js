// 簡報內的投票看板：老師可直接在這頁點選答案（ChatGPT／Gemini／Gemini Notebook／其他），也可用手機掃 QR Code 作答
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
  let lastHtml = '';
  let timer = null;
  let failed = false;
  let busy = false;

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

  const icon = key => key === 'other'
    ? '<i class="vc-icon vc-other" aria-hidden="true">…</i>'
    : `<i class="brand-mark tiny brand-${esc(key)}" aria-hidden="true"></i>`;

  function rowHtml(s, mine) {
    const t = latest.result?.[s.id] || { total: 0 };
    const open = revealed.has(s.id);
    const choices = toolKeys.map(k => {
      const n = t[k] || 0;
      const pct = t.total ? Math.round(n / t.total * 100) : 0;
      const tool = V.tools[k];
      const cls = ['vc', mine === k ? 'mine' : '', open && s.pick === k ? 'is-pick' : ''].filter(Boolean).join(' ');
      return `<button class="${cls}" style="--c:${tool.color};--p:${pct}%" data-vote-scn="${esc(s.id)}" data-vote-tool="${k}" ${mine ? 'disabled' : ''} aria-pressed="${mine === k}" title="${esc(tool.label)}：${n} 票">
        ${icon(k)}<span class="vc-label">${esc(tool.short)}</span><b class="vc-pct">${t.total ? `${pct}%` : ''}</b>${mine === k ? '<span class="vc-mine" aria-label="我的選擇">✓</span>' : ''}
      </button>`;
    }).join('');
    const pickTool = V.tools[s.pick];
    return `<div class="vote-row${open ? ' open' : ''}${mine ? ' voted' : ''}">
      <span class="vr-name"><span aria-hidden="true">${esc(s.icon)}</span>${esc(s.name)}</span>
      <span class="vr-choices">${choices}</span>
      <button class="vr-pick" style="--pick:${pickTool.color}" data-vote-id="${esc(s.id)}" aria-expanded="${open}">${open ? `★ ${esc(s.pickShort || pickTool.short)}` : '點我揭曉'}</button>
    </div>`;
  }

  function render(force = false) {
    const mine = V.local.choices();
    const html = V.scenarios.map(s => rowHtml(s, mine[s.id])).join('');
    if (force || html !== lastHtml) {
      boards.forEach(board => { board.innerHTML = html; });
      lastHtml = html;
    }
    document.querySelectorAll('[data-vote-voters]').forEach(el => { el.textContent = latest.voters; });
  }

  function showReason(id) {
    const s = V.scenarios.find(x => x.id === id);
    document.querySelectorAll('[data-vote-reason]').forEach(el => {
      if (!s || !revealed.has(id)) { el.hidden = true; return; }
      const also = s.also.map(k => V.tools[k].label).join('、');
      el.hidden = false;
      const pickName = s.pick === 'other' ? `其他｜${s.pickLabel || ''}` : (s.pickLabel || V.tools[s.pick].label);
      el.innerHTML = `<b style="color:${s.pick === 'other' ? '#5c7180' : V.tools[s.pick].color}">${esc(s.icon)} ${esc(s.name)} → 凱琳老師的答案：${esc(pickName)}</b><span>${esc(s.reason)}${also ? `（也很適合：${esc(also)}）` : ''}</span>`;
      // 放在該列下方；若是下半部的列，改放在該列上方
      const main = el.closest('.vote-main');
      const row = main?.querySelector(`[data-vote-id="${id}"]`)?.closest('.vote-row');
      if (main && row) {
        const m = main.getBoundingClientRect(), r = row.getBoundingClientRect();
        const below = r.bottom - m.top + 6;
        const above = r.top - m.top - el.offsetHeight - 6;
        el.style.top = `${(r.top + r.height / 2) < (m.top + m.height / 2) ? below : Math.max(0, above)}px`;
      }
    });
  }

  function status(message) {
    const el = document.getElementById('status');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(status.t);
    status.t = setTimeout(() => el.classList.remove('show'), 1800);
  }

  async function vote(scenario, tool) {
    if (busy || V.local.choices()[scenario]) return;
    busy = true;
    try {
      const result = await V.api.addVote(scenario, tool, V.local.voter());
      V.local.saveChoice(scenario, tool);
      if (result === 'duplicate') status('這一題你已經投過了');
      render(true);
      refresh();
    } catch {
      status('送出失敗，請確認網路後再點一次');
    }
    busy = false;
  }

  document.addEventListener('click', event => {
    const choice = event.target.closest('[data-vote-tool]');
    if (choice) { vote(choice.dataset.voteScn, choice.dataset.voteTool); return; }
    const pick = event.target.closest('[data-vote-id]');
    if (pick) {
      const id = pick.dataset.voteId;
      if (revealed.has(id) && focused === id) { revealed.delete(id); focused = null; }
      else { revealed.add(id); focused = id; }
      render(true); showReason(focused);
      return;
    }
    if (event.target.closest('[data-vote-reveal-all]')) { V.scenarios.forEach(s => revealed.add(s.id)); focused = null; render(true); showReason(null); }
    if (event.target.closest('[data-vote-hide-all]')) { revealed.clear(); focused = null; render(true); showReason(null); }
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
    if (active) { render(true); refresh(); timer = setInterval(refresh, 3000); }
  }
  document.addEventListener('slidechange', onSlide);
  render(true);
  onSlide();
})();
