(() => {
  const data = window.WORKSHOP;
  const deck = document.getElementById('deck');
  const guide = index => `<div class="guide g${index % 4 + 1} small-guide ${index % 3 === 1 ? 'left' : ''}" aria-hidden="true"></div>`;
  const esc = value => String(value ?? '').replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
  const action = item => {
    if (!item) return '';
    if (item.dialog) return `<div class="buttons"><button class="btn" data-open="${esc(item.dialog)}">${esc(item.label)}</button></div>`;
    return `<div class="buttons"><a class="btn" href="${esc(item.href)}" ${/^https?:/.test(item.href) ? 'target="_blank" rel="noopener"' : ''}>${esc(item.label)}</a></div>`;
  };
  const cardGrid = items => {
    const count = items.length;
    const cols = count === 2 ? 2 : count === 4 ? 4 : 3;
    return `<div class="cards cols-${cols}">${items.map(item => `<article class="card"><div class="icon">${esc(item.icon)}</div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div>`;
  };
  const flow = items => `<div class="flow">${items.map((item, index) => `${index ? '<i class="arrow">›</i>' : ''}<div class="flow-step"><b>${index + 1}</b><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div>`).join('')}</div>`;
  const header = slide => `${slide.mode ? `<div class="mode">${esc(slide.mode)}</div>` : ''}<p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule"></div>`;
  const brandInfo = {
    chatgpt: {label: 'ChatGPT'},
    gemini: {label: 'Gemini'},
    notebook: {label: 'Gemini Notebook'}
  };
  const brandMark = key => `<i class="brand-mark brand-${esc(key)}" aria-hidden="true"></i>`;
  let activeBrand = null;
  data.slides.forEach(slide => {
    if (slide.type === 'chapter') {
      if (slide.title.includes('Notebook')) activeBrand = 'notebook';
      else if (slide.title.includes('Gemini')) activeBrand = 'gemini';
      else if (slide.title.includes('ChatGPT')) activeBrand = 'chatgpt';
      else activeBrand = null;
    }
    slide._brands = slide.brands || (activeBrand ? [activeBrand] : []);
  });
  const brandBadge = slide => slide._brands.length
    ? `<div class="brand-badges" aria-label="本頁工具">${slide._brands.map(key => `<span>${brandMark(key)}<b>${esc(brandInfo[key].label)}</b></span>`).join('')}</div>`
    : '';

  function renderSlide(slide, index) {
    const active = index === 0 ? ' active' : '';
    if (slide.type === 'cover') {
      return `<section class="slide cover${active}" data-title="${esc(slide.title)}"><div class="inner cover-grid"><div><p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><p class="cover-sub">${esc(slide.subtitle)}</p><div class="meta">${slide.meta.map(item => `<span>${esc(item)}</span>`).join('')}</div><div class="cover-footer"><p class="lead">${esc(data.meta.presenter)}</p><figure class="cover-qr"><img src="assets/cover-qrcode.png" alt="研習資源 QR Code"></figure></div></div><div class="guide g1 large-guide cover-guide" aria-hidden="true"></div></div></section>`;
    }
    if (slide.type === 'profile') {
      return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner profile-grid"><div style="text-align:center"><img class="portrait" src="teacher.png" alt="許凱琳老師"></div><div>${header(slide)}${slide.lead ? `<p class="lead">${esc(slide.lead)}</p>` : ''}${cardGrid(slide.cards)}${action(slide.action)}</div></div><div class="guide g2 small-guide" aria-hidden="true"></div></section>`;
    }
    if (slide.type === 'chapter') {
      const chapterImage = slide.image ? `<figure class="chapter-image"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure>` : '';
      const chapterGuide = slide.image ? '' : `<div class="guide g${index % 4 + 1} large-guide" aria-hidden="true"></div>`;
      return `<section class="slide chapter${active}${slide.image ? ' has-image' : ''}" data-title="${esc(slide.title)}"><div class="inner${slide.image ? ' chapter-grid' : ''}"><div><p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule"></div><p class="lead">${esc(slide.subtitle)}</p></div>${chapterImage}</div>${chapterGuide}</section>`;
    }
    if (slide.type === 'partners') {
      return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner wide">${header(slide)}<div class="partner-grid">${slide.partners.map(item => `<article class="partner-card"><div class="partner-logo" aria-label="${esc(brandInfo[item.brand].label)}">${brandMark(item.brand)}</div><h3>${esc(item.title)}</h3>${item.lines.map(line => `<p>${esc(line)}</p>`).join('')}</article>`).join('')}</div></div></section>`;
    }
    if (slide.type === 'closing') {
      return `<section class="slide closing${active}" data-title="${esc(slide.title)}"><div class="inner"><p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule" style="margin:22px auto"></div><p class="lead">${esc(slide.subtitle)}</p><div class="buttons">${slide.actions.map((item, i) => `<a class="btn ${i ? 'secondary' : ''}" href="${esc(item.href)}" ${/^https?:/.test(item.href) ? 'target="_blank" rel="noopener"' : ''}>${esc(item.label)}</a>`).join('')}</div><p style="margin-top:28px;color:#bfe5e6">${esc(data.meta.presenter)}</p></div><div class="guide g4 large-guide" aria-hidden="true"></div></section>`;
    }
    if (slide.type === 'split') {
      const splitVisual = slide.image
        ? `<figure class="side-image-frame"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure>`
        : `<article class="visual-card"><div class="visual-icon">${esc(slide.visual.icon)}</div><h3>${esc(slide.visual.title)}</h3><p>${esc(slide.visual.text)}</p></article>`;
      return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner split${slide.image ? ' has-image' : ''}"><div>${header(slide)}<ul class="points">${slide.bullets.map(item => `<li>${esc(item)}</li>`).join('')}</ul>${action(slide.action)}</div>${splitVisual}</div>${slide.image ? '' : guide(index)}</section>`;
    }
    if (slide.type === 'image') {
      return `<section class="slide image-slide${active}" data-title="${esc(slide.title)}"><div class="inner wide image-page${slide.displayTitle ? ' with-title' : ''}">${slide.displayTitle ? header(slide) : ''}<figure class="full-image-frame"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure></div></section>`;
    }
    if (slide.type === 'screenshot') {
      return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner wide media-layout"><figure class="media-frame"><img src="${esc(slide.image)}" alt="${esc(slide.caption)}"><figcaption>${esc(slide.caption)}</figcaption></figure><div class="media-side">${header(slide)}${flow(slide.steps)}${slide.note ? `<div class="note">${esc(slide.note)}</div>` : ''}${action(slide.action)}</div></div>${guide(index)}</section>`;
    }
    if (slide.type === 'flow') {
      if (slide.image) {
        return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner wide media-layout"><figure class="media-frame"><img src="${esc(slide.image)}" alt="${esc(slide.imageAlt || slide.title)}"></figure><div class="media-side">${header(slide)}${flow(slide.steps)}${slide.note ? `<div class="note">${esc(slide.note)}</div>` : ''}${action(slide.action)}</div></div></section>`;
      }
      return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner wide">${header(slide)}${flow(slide.steps)}${slide.note ? `<div class="note">${esc(slide.note)}</div>` : ''}${action(slide.action)}</div>${guide(index)}</section>`;
    }
    if (slide.type === 'quote') {
      return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner"><p class="eyebrow">${esc(slide.label)}</p><h2>${esc(slide.title)}</h2><div class="rule"></div><p class="quote">${esc(slide.quote)}</p></div>${guide(index)}</section>`;
    }
    return `<section class="slide${active}" data-title="${esc(slide.title)}"><div class="inner wide">${header(slide)}${cardGrid(slide.cards)}${slide.note ? `<div class="note">${esc(slide.note)}</div>` : ''}${action(slide.action)}</div>${guide(index)}</section>`;
  }

  deck.innerHTML = data.slides.map(renderSlide).join('');
  const slides = [...document.querySelectorAll('.slide')];
  data.slides.forEach((slide, index) => {
    const badge = brandBadge(slide);
    if (badge) slides[index].insertAdjacentHTML('beforeend', badge);
  });
  const toc = document.getElementById('toc');
  const notesPanel = document.getElementById('speakerNotes');
  const notesText = document.getElementById('notesText');
  let current = 0;

  data.slides.forEach((slide, index) => {
    const button = document.createElement('button');
    button.textContent = `${String(index + 1).padStart(2, '0')}　${slide.title}`;
    button.dataset.go = index;
    toc.appendChild(button);
  });

  function update() {
    document.getElementById('counter').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    document.getElementById('progressBar').style.width = `${(current + 1) / slides.length * 100}%`;
    notesText.textContent = data.slides[current].notes || '本頁沒有額外備註。';
  }
  function go(next) {
    next = Math.max(0, Math.min(next, slides.length - 1));
    if (next === current) return;
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev');
      if (index < next) slide.classList.add('prev');
    });
    current = next;
    slides[current].classList.add('active');
    update();
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
  document.getElementById('fullscreen').onclick = async () => { try { document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); } catch { flash('請使用 F11 進入全螢幕'); } };
  function toggleNotes(force) {
    const show = typeof force === 'boolean' ? force : notesPanel.hidden;
    notesPanel.hidden = !show;
    document.getElementById('notesToggle').setAttribute('aria-pressed', String(show));
  }
  document.getElementById('notesToggle').onclick = () => toggleNotes();
  document.getElementById('notesClose').onclick = () => toggleNotes(false);
  function flash(text) { const status = document.getElementById('status'); status.textContent = text; status.classList.add('show'); setTimeout(() => status.classList.remove('show'), 1800); }
  let startX = 0;
  deck.addEventListener('touchstart', event => startX = event.changedTouches[0].clientX, {passive:true});
  deck.addEventListener('touchend', event => { if (interactive(event.target)) return; const delta = event.changedTouches[0].clientX - startX; if (Math.abs(delta) > 80) go(current + (delta < 0 ? 1 : -1)); }, {passive:true});
  update();
})();
