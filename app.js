(() => {
  const data = window.WORKSHOP;
  const deck = document.getElementById('deck');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const pad = value => String(value).padStart(2, '0');
  const external = href => /^https?:/i.test(href) ? 'target="_blank" rel="noopener"' : '';
  const resourceHref = key => data.meta.resources[key] || '#';
  const brandInfo = {
    chatgpt: {label:'ChatGPT'},
    gemini: {label:'Gemini'},
    notebook: {label:'Gemini Notebook'}
  };

  const brandMark = key => `<i class="brand-mark brand-${esc(key)}" aria-hidden="true"></i>`;
  const header = slide => `${slide.mode ? `<div class="mode">${esc(slide.mode)}</div>` : ''}<p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule"></div>`;
  const note = slide => slide.note ? `<div class="note">${esc(slide.note)}</div>` : '';
  const promptButton = slide => slide.prompt ? `<button class="btn prompt-trigger" data-prompt="${esc(slide.promptTitle || slide.title)}" data-context="${esc(slide.promptContext || '')}" data-text="${esc(slide.prompt)}"><span aria-hidden="true">✦</span> 展開完整提示詞</button>` : '';
  const actions = items => !items?.length ? '' : `<div class="buttons">${items.map(item => {
    const href = item.resource ? resourceHref(item.resource) : item.href;
    return `<a class="btn${item.secondary ? ' secondary' : ''}" href="${esc(href)}" ${external(href)}>${esc(item.label)}</a>`;
  }).join('')}</div>`;
  const cards = items => {
    const count = items.length;
    const cols = count === 2 ? 2 : count === 3 ? 3 : count === 6 ? 3 : 4;
    return `<div class="cards cols-${cols}">${items.map(item => `<article class="card"><div class="icon">${esc(item.icon)}</div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div>`;
  };
  const flow = items => `<div class="flow">${items.map((item, index) => `<article class="flow-step"><b>${index + 1}</b><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div>`;
  const character = (index, large = false) => `<div class="guide g${index % 4 + 1} ${large ? 'large-guide' : 'small-guide'} ${index % 3 === 1 ? 'left' : ''}" aria-hidden="true"></div>`;
  const slideShell = (slide, index, body, extra = '') => `<section class="slide${index === 0 ? ' active' : ''}" data-title="${esc(slide.title)}" data-tone="${esc(slide.tone || 'paper')}"><div class="inner ${extra}">${body}</div>${character(index)}</section>`;

  function renderSlide(slide, index) {
    if (slide.type === 'cover') {
      return `<section class="slide cover active" data-title="${esc(slide.title)}" data-tone="hero"><div class="inner cover-grid"><div class="cover-copy"><p class="eyebrow">${esc(slide.label)}</p><h1>${esc(slide.title)}</h1><p class="cover-sub">${esc(slide.subtitle)}</p><div class="meta">${slide.meta.map(item => `<span>${esc(item)}</span>`).join('')}</div>${actions(slide.actions)}<p class="presenter">${esc(data.meta.presenter)}</p></div><div class="cover-visual"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><img src="teacher.png" alt="許凱琳老師"><span class="spark s1">✦</span><span class="spark s2">✦</span></div></div></section>`;
    }
    if (slide.type === 'profile') {
      return slideShell(slide, index, `<div class="profile-grid"><figure class="portrait-wrap"><img class="portrait" src="teacher.png" alt="許凱琳老師"><figcaption>教學現場 × AI 協作</figcaption></figure><div>${header(slide)}<p class="lead">${esc(slide.lead)}</p>${cards(slide.cards)}</div></div>`);
    }
    if (slide.type === 'chapter') {
      return `<section class="slide chapter" data-title="${esc(slide.title)}" data-tone="${esc(slide.tone)}"><div class="inner chapter-grid"><div><p class="chapter-number">${pad(index + 1)}</p><p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule"></div><p class="lead">${esc(slide.subtitle)}</p></div><figure class="chapter-image"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure></div>${character(index, true)}</section>`;
    }
    if (slide.type === 'prompt') {
      return slideShell(slide, index, `${header(slide)}<div class="prompt-stage"><div class="prompt-lines">${slide.display.map((line, i) => `<div><span>${pad(i + 1)}</span><strong>${esc(line)}</strong></div>`).join('')}</div><aside class="prompt-preview"><span>關鍵做法</span><p>${esc(slide.promptContext)}</p>${promptButton(slide)}</aside></div>`, 'wide');
    }
    if (slide.type === 'formula') {
      return slideShell(slide, index, `${header(slide)}<div class="formula">${slide.parts.map(part => `<article><b>${esc(part.key)}</b><div><h3>${esc(part.title)}</h3><p>${esc(part.text)}</p></div></article>`).join('')}</div>${note(slide)}`, 'wide');
    }
    if (slide.type === 'split') {
      const right = slide.image
        ? `<figure class="side-image-frame"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure>`
        : `<article class="visual-card"><div class="visual-icon">${esc(slide.visual.icon)}</div><h3>${esc(slide.visual.title)}</h3><p>${esc(slide.visual.text)}</p></article>`;
      return slideShell(slide, index, `<div class="split"><div>${header(slide)}<ul class="points">${slide.bullets.map(item => `<li>${esc(item)}</li>`).join('')}</ul>${promptButton(slide)}</div>${right}</div>`, 'wide');
    }
    if (slide.type === 'screenshot') {
      return slideShell(slide, index, `<div class="media-layout"><figure class="media-frame"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure><div>${header(slide)}${flow(slide.steps)}${promptButton(slide)}</div></div>`, 'wide');
    }
    if (slide.type === 'imageFeature') {
      return slideShell(slide, index, `${header(slide)}<div class="feature-grid"><figure class="feature-image"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure><aside class="feature-caption"><span>現場重點</span><p>${esc(slide.caption)}</p>${promptButton(slide)}</aside></div>`, 'wide');
    }
    if (slide.type === 'flow' || slide.type === 'task') {
      return slideShell(slide, index, `${header(slide)}${flow(slide.steps)}${note(slide)}<div class="action-row">${promptButton(slide)}${actions(slide.actions)}</div>`, 'wide');
    }
    if (slide.type === 'dualPrompt') {
      return slideShell(slide, index, `${header(slide)}<div class="dual-prompts">${slide.prompts.map(item => `<article><div class="icon">${esc(item.icon)}</div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><button class="btn prompt-trigger" data-prompt="${esc(item.title)}" data-context="根據指定來源操作" data-text="${esc(item.prompt)}">展開並複製</button></article>`).join('')}</div>${note(slide)}`, 'wide');
    }
    if (slide.type === 'partners') {
      return slideShell(slide, index, `${header(slide)}<div class="partner-grid">${slide.partners.map(item => `<article class="partner-card"><div class="partner-logo">${brandMark(item.brand)}<span>${esc(brandInfo[item.brand].label)}</span></div><h3>${esc(item.title)}</h3>${item.lines.map(line => `<p>${esc(line)}</p>`).join('')}</article>`).join('')}</div>${note(slide)}`, 'wide');
    }
    if (slide.type === 'closing') {
      return `<section class="slide closing" data-title="${esc(slide.title)}" data-tone="hero"><div class="inner closing-grid"><div><p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule"></div><p class="lead">${esc(slide.subtitle)}</p>${actions(slide.actions)}<p class="presenter">${esc(data.meta.presenter)}</p></div><div class="closing-check">${slide.checklist.map(item => `<div><span>✓</span>${esc(item)}</div>`).join('')}</div></div>${character(index, true)}</section>`;
    }
    return slideShell(slide, index, `${header(slide)}${cards(slide.cards)}${note(slide)}<div class="action-row">${promptButton(slide)}${actions(slide.actions)}</div>`, 'wide');
  }

  deck.innerHTML = data.slides.map(renderSlide).join('');
  const slides = [...document.querySelectorAll('.slide')];
  const toc = document.getElementById('toc');
  const notesPanel = document.getElementById('speakerNotes');
  const notesText = document.getElementById('notesText');
  const promptDialog = document.getElementById('promptDialog');
  const promptText = document.getElementById('promptText');
  let current = 0;

  data.slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.innerHTML = `<span>${pad(index + 1)}</span><b>${esc(slide.title)}</b>`;
    button.dataset.go = index;
    toc.appendChild(button);
  });

  function update() {
    document.getElementById('counter').textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
    document.getElementById('progressBar').style.width = `${(current + 1) / slides.length * 100}%`;
    notesText.textContent = data.slides[current].notes || '本頁沒有額外備註。';
    const hash = `#slide-${pad(current + 1)}`;
    if (location.hash !== hash) history.replaceState(null, '', hash);
    slides[current].scrollTop = 0;
  }

  function go(next) {
    const target = Math.max(0, Math.min(next, slides.length - 1));
    if (target === current) return;
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === target);
      slide.classList.toggle('prev', index < target);
    });
    current = target;
    update();
  }

  function flash(message) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.classList.add('show');
    window.clearTimeout(flash.timer);
    flash.timer = window.setTimeout(() => status.classList.remove('show'), 1800);
  }

  function openPrompt(button) {
    document.getElementById('promptTitle').textContent = button.dataset.prompt;
    document.getElementById('promptContext').textContent = button.dataset.context;
    promptText.textContent = button.dataset.text;
    promptDialog.showModal();
  }

  async function copyPrompt() {
    const value = promptText.textContent;
    try {
      await navigator.clipboard.writeText(value);
      flash('提示詞已複製');
    } catch {
      const helper = document.createElement('textarea');
      helper.value = value;
      helper.setAttribute('readonly', '');
      helper.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(helper);
      helper.select();
      const copied = document.execCommand('copy');
      helper.remove();
      if (copied) flash('提示詞已複製');
      else {
        const selection = getSelection();
        const range = document.createRange();
        range.selectNodeContents(promptText);
        selection.removeAllRanges();
        selection.addRange(range);
        flash('已選取提示詞，請按 Ctrl+C');
      }
    }
  }

  const interactive = target => target.closest('a,button,input,textarea,select,dialog,.speaker-notes');
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || interactive(event.target)) return;
    if (['ArrowRight','ArrowDown','PageDown',' '].includes(event.key)) { event.preventDefault(); go(current + 1); }
    if (['ArrowLeft','ArrowUp','PageUp'].includes(event.key)) { event.preventDefault(); go(current - 1); }
    if (event.key === 'Home') go(0);
    if (event.key === 'End') go(slides.length - 1);
    if (event.key.toLowerCase() === 'n') toggleNotes();
  });
  deck.addEventListener('click', event => { if (!interactive(event.target)) go(current + 1); });
  document.getElementById('prevBtn').onclick = () => go(current - 1);
  document.getElementById('nextBtn').onclick = () => go(current + 1);
  document.querySelectorAll('[data-open]').forEach(button => button.onclick = () => document.getElementById(button.dataset.open).showModal());
  document.querySelectorAll('[data-close]').forEach(button => button.onclick = () => button.closest('dialog').close());
  document.querySelectorAll('[data-go]').forEach(button => button.onclick = () => { document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close()); go(Number(button.dataset.go)); });
  document.querySelectorAll('.prompt-trigger').forEach(button => button.onclick = () => openPrompt(button));
  document.querySelectorAll('[data-resource]').forEach(button => button.onclick = () => window.open(resourceHref(button.dataset.resource), '_blank', 'noopener'));
  document.getElementById('copyPrompt').onclick = copyPrompt;
  document.getElementById('fullscreen').onclick = async () => { try { document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); } catch { flash('請使用 F11 進入全螢幕'); } };
  function toggleNotes(force) {
    const show = typeof force === 'boolean' ? force : notesPanel.hidden;
    notesPanel.hidden = !show;
    document.getElementById('notesToggle').setAttribute('aria-pressed', String(show));
  }
  document.getElementById('notesToggle').onclick = () => toggleNotes();
  document.getElementById('notesClose').onclick = () => toggleNotes(false);

  let startX = 0;
  deck.addEventListener('touchstart', event => { startX = event.changedTouches[0].clientX; }, {passive:true});
  deck.addEventListener('touchend', event => {
    if (interactive(event.target)) return;
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 80) go(current + (delta < 0 ? 1 : -1));
  }, {passive:true});

  const requested = Number((location.hash.match(/slide-(\d+)/) || [])[1]);
  if (Number.isFinite(requested) && requested > 0 && requested <= slides.length) {
    slides[0].classList.remove('active');
    current = requested - 1;
    slides[current].classList.add('active');
  }
  update();
})();
