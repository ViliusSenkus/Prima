(function () {
  const D = window.MTV_DATA, SONGS = D.songs, ENT = D.entries;
  const $ = id => document.getElementById(id);
  const MONTHS = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- nuorodos (data.js + links.js) ---------- */
  // U.added[songIdx]=[url...] – vartotojo pridėtos; U.removed[songIdx]=[url...] – paslėptos pradinės (data.js) nuorodos.
  // Išsaugomos tik į links.js failą (mygtukas „Išsaugoti nuorodas“), naršyklės saugykla nenaudojama.
  const U = { added: {}, removed: {} };
  const KEY = new Map(SONGS.map((s, i) => [s[0] + '\u0000' + s[1], i]));
  let dirty = false;
  ((window.MTV_LINKS || {}).links || []).forEach(o => {
    const i = KEY.get(o.artist + '\u0000' + o.title);
    if (i === undefined) return;
    if ((o.added || []).length) U.added[i] = o.added.slice();
    if ((o.removed || []).length) U.removed[i] = o.removed.slice();
  });
  function markDirty() {
    dirty = true; $('saveLinks').classList.add('dirty'); $('saveLinks').textContent = 'Išsaugoti nuorodas •';
  }
  function saveLinks() {
    const idx = new Set([...Object.keys(U.added), ...Object.keys(U.removed)]);
    const links = [];
    idx.forEach(i => {
      const added = U.added[i] || [], removed = U.removed[i] || [];
      if (added.length || removed.length) links.push({ artist: SONGS[i][0], title: SONGS[i][1], added, removed });
    });
    const text = 'window.MTV_LINKS=' + JSON.stringify({ links }, null, 1) + ';\n';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/javascript' }));
    a.download = 'links.js'; a.click();
    dirty = false; $('saveLinks').classList.remove('dirty'); $('saveLinks').textContent = 'Išsaugoti nuorodas';
  }
  window.addEventListener('beforeunload', e => { if (dirty) { e.preventDefault(); e.returnValue = ''; } });
  function ytId(u) { const m = String(u).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : null; }
  function linksOf(i) {
    const out = []; const rem = U.removed[i] || [];
    const b = SONGS[i][2];
    if (b && !rem.includes(b)) out.push({ url: b, base: true });
    (U.added[i] || []).forEach(u => out.push({ url: u, base: false }));
    return out;
  }
  function hasLink(i) { return linksOf(i).length > 0; }
  function addLink(i, url) {
    url = url.trim(); if (!url) return;
    if (!/^https?:\/\//i.test(url)) { if (ytId(url) && url.length === 11) url = 'https://www.youtube.com/watch?v=' + url; else url = 'https://' + url; }
    if (!ytId(url)) { if (!confirm('Nuoroda neatrodo kaip YouTube video – vis tiek pridėti?')) return; }
    if (linksOf(i).some(l => l.url === url)) return;
    const rem = U.removed[i]; if (rem && rem.includes(url)) { U.removed[i] = rem.filter(x => x !== url); }
    else { (U.added[i] = U.added[i] || []).push(url); }
    markDirty();
  }
  function removeLink(i, url) {
    if (!confirm('Ištrinti šią nuorodą?')) return;
    if (U.added[i] && U.added[i].includes(url)) { U.added[i] = U.added[i].filter(x => x !== url); if (!U.added[i].length) delete U.added[i]; }
    else { (U.removed[i] = U.removed[i] || []).push(url); }
    markDirty();
  }

  /* ---------- stiliai pagal laikotarpį ---------- */
  const LOGOS = { all: 'img/logo-all.png', classic: 'img/logo-classic.png', grunge: 'img/logo-grunge.png', y2k: 'img/logo-y2k.png', pop: 'img/logo-pop.png' };
  function setTheme(t) {
    if (t && LOGOS[t]) { document.body.dataset.theme = t; $('logoImg').src = LOGOS[t]; }
    else { delete document.body.dataset.theme; $('logoImg').src = LOGOS.all; }
  }

  /* ---------- pagalbiniai duomenys ---------- */
  const years = [...new Set(ENT.map(e => e[0].slice(0, 4)))].sort();
  const decades = [...new Set(years.map(y => y.slice(0, 3) + '0'))];
  const weekDates = [...new Set(ENT.map(e => e[0]))].sort().reverse();
  const SA = SONGS.map(s => s[0].toLowerCase()), ST = SONGS.map(s => s[1].toLowerCase());
  const minDate = ENT.reduce((a, e) => e[0] < a ? e[0] : a, '9'), maxDate = ENT.reduce((a, e) => e[0] > a ? e[0] : a, '0');
  years.forEach(y => $('year').add(new Option(y, y)));
  decades.forEach(d => $('decade').add(new Option(d + '-ieji', d)));
  MONTHS.forEach((m, i) => $('month').add(new Option(m, String(i + 1).padStart(2, '0'))));
  $('dMin').min = $('dMax').min = minDate; $('dMin').max = $('dMax').max = maxDate;

  /* ---------- lentelės filtrų laukeliai (po stulpelių pavadinimais) ---------- */
  const qArtist = document.createElement('input'); qArtist.type = 'text'; qArtist.placeholder = 'Ieškoti atlikėjo…';
  const qTitle = document.createElement('input'); qTitle.type = 'text'; qTitle.placeholder = 'Ieškoti dainos…';
  const wkSel = document.createElement('select');
  wkSel.add(new Option('Visos savaitės', ''));
  weekDates.forEach(d => wkSel.add(new Option(d, d)));

  /* ---------- būsena ---------- */
  let view = 'weeks', page = 0, sortBy = 'date', sortDir = 'desc';
  const COLS = {
    songs: [['rankBest', 'Geriausia vieta', 'asc'], ['artist', 'Atlikėjas', 'asc'], ['title', 'Daina', 'asc'], ['weeks', 'Savaičių', 'desc'], ['avg', 'Vid. vieta', 'asc'], ['wk1', 'Savaičių #1', 'desc'], ['first', 'Pirmą kartą', 'asc'], ['last', 'Paskutinį kartą', 'asc'], ['peakDate', 'Geriausios vietos data', 'asc'], ['links', 'Video', 'desc']],
    weeks: [['date', 'Data', 'desc'], ['rank', 'Vieta', 'asc'], ['artist', 'Atlikėjas', 'asc'], ['title', 'Daina', 'asc'], ['links', 'Video', 'desc']]
  };
  function fillSort() {
    const s = $('sortBy'); s.innerHTML = ''; COLS[view].forEach(c => s.add(new Option(c[1], c[0])));
    if (!COLS[view].some(c => c[0] === sortBy)) { sortBy = view === 'songs' ? 'weeks' : 'date'; sortDir = 'desc'; }
    s.value = sortBy; $('sortDir').value = sortDir;
  }
  // filtrų eilutė perkuriama tik keičiant rodinį – laukeliai išlieka tie patys elementai, todėl rašant neprarandamas fokusas
  function buildFilterRow() {
    const f = $('frow'); f.innerHTML = '';
    COLS[view].forEach(c => {
      const td = document.createElement('td'); td.className = 'f';
      if (c[0] === 'date') td.appendChild(wkSel);
      else if (c[0] === 'artist') td.appendChild(qArtist);
      else if (c[0] === 'title') td.appendChild(qTitle);
      f.appendChild(td);
    });
  }
  function drawHead() {
    $('hrow').innerHTML = COLS[view].map(c => `<th data-k="${c[0]}" class="${c[0] === sortBy ? 'on' : ''}">${c[1]}${c[0] === sortBy ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ''}</th>`).join('');
  }

  /* ---------- filtravimas ---------- */
  function terms(v) { v = v.trim().toLowerCase(); return v ? v.split(/\s+/) : []; }
  function filtered() {
    const rMin = +$('rMin').value || 1, rMax = +$('rMax').value || 20;
    const dMin = $('dMin').value, dMax = $('dMax').value, y = $('year').value, dec = $('decade').value, mo = $('month').value, wk = wkSel.value;
    const ta = terms(qArtist.value), tt = terms(qTitle.value);
    return ENT.filter(e => {
      if (e[1] < rMin || e[1] > rMax) return false;
      const d = e[0];
      if (wk && d !== wk) return false;
      if (dMin && d < dMin) return false; if (dMax && d > dMax) return false;
      if (y && d.slice(0, 4) !== y) return false;
      if (dec && d.slice(0, 3) + '0' !== dec) return false;
      if (mo && d.slice(5, 7) !== mo) return false;
      for (const t of ta) if (!SA[e[2]].includes(t)) return false;
      for (const t of tt) if (!ST[e[2]].includes(t)) return false;
      return true;
    });
  }
  function cmp(a, b) { return typeof a === 'string' ? a.localeCompare(b, 'en', { sensitivity: 'base' }) : a - b; }
  // puslapiavimas: rūšiuojant pagal datą puslapis visada baigiasi pilna savaite (savaičių grupė), kitaip – fiksuotas eilučių skaičius
  function paginate(data, ps) {
    if (!data.length) return [[0, 0]];
    const pg = [];
    if (!(view === 'weeks' && sortBy === 'date')) {
      for (let s = 0; s < data.length; s += ps) pg.push([s, Math.min(s + ps, data.length)]);
      return pg;
    }
    let s = 0, i = 0;
    while (i < data.length) {
      let j = i; const d = data[i].date; while (j < data.length && data[j].date === d) j++;
      if (i > s && j - s > ps) { pg.push([s, i]); s = i; }
      i = j;
    }
    pg.push([s, data.length]);
    return pg;
  }
  function render() {
    const rows = filtered();
    const linkF = $('linkF').value;
    let data;
    if (view === 'weeks') {
      data = rows.filter(e => linkF === '' || (linkF === 'has') === hasLink(e[2])).map(e => ({ date: e[0], rank: e[1], idx: e[2], title: SONGS[e[2]][1], artist: SONGS[e[2]][0], links: linksOf(e[2]).length }));
    } else {
      const m = new Map();
      for (const e of rows) {
        let o = m.get(e[2]);
        if (!o) { o = { idx: e[2], title: SONGS[e[2]][1], artist: SONGS[e[2]][0], weeks: 0, sum: 0, rankBest: 99, wk1: 0, first: e[0], last: e[0], peakDate: e[0] }; m.set(e[2], o); }
        o.weeks++; o.sum += e[1]; if (e[1] === 1) o.wk1++;
        if (e[0] < o.first) o.first = e[0]; if (e[0] > o.last) o.last = e[0];
        if (e[1] < o.rankBest || (e[1] === o.rankBest && e[0] < o.peakDate)) { o.rankBest = e[1]; o.peakDate = e[0]; }
      }
      data = [...m.values()];
      const wMin = +$('wMin').value || 0, wMax = +$('wMax').value || 1e9;
      data = data.filter(o => o.weeks >= wMin && o.weeks <= wMax && (linkF === '' || (linkF === 'has') === hasLink(o.idx)));
      data.forEach(o => { o.avg = o.sum / o.weeks; o.links = linksOf(o.idx).length; });
    }
    const dir = sortDir === 'asc' ? 1 : -1;
    data.sort((a, b) => {
      let c = cmp(a[sortBy], b[sortBy]); if (c !== 0) return c * dir;
      if (view === 'weeks') return (sortBy === 'date' ? (a.rank - b.rank) * -dir : cmp(b.date, a.date) || a.rank - b.rank) || cmp(a.artist, b.artist);
      return cmp(a.artist, b.artist) || cmp(a.title, b.title);
    });
    const pg = paginate(data, +$('pageSize').value), pages = pg.length;
    if (page >= pages) page = pages - 1;
    const slice = data.slice(pg[page][0], pg[page][1]);
    const byWeek = view === 'weeks' && sortBy === 'date' && data.length > 0;
    const rng = i => { const a = data[pg[i][0]].date, b = data[pg[i][1] - 1].date; return a === b ? a : (a < b ? a + ' – ' + b : b + ' – ' + a); };
    $('prev').textContent = byWeek && page > 0 ? '‹ ' + rng(page - 1) : '‹';
    $('next').textContent = byWeek && page < pages - 1 ? rng(page + 1) + ' ›' : '›';
    $('pinfo').textContent = byWeek ? `${rng(page)} (${page + 1} / ${pages})` : `${page + 1} / ${pages}`;
    $('prev').disabled = page === 0; $('next').disabled = page >= pages - 1;
    $('rankHint').textContent = `Vietos ${$('rMin').value || 1}–${$('rMax').value || 20}`;
    drawHead();
    draw(slice);
  }
  function thumbsHtml(i) {
    const L = linksOf(i);
    let h = '<div class="thumbs">';
    L.forEach(l => {
      const id = ytId(l.url);
      const inner = id ? `<img loading="lazy" src="https://img.youtube.com/vi/${id}/mqdefault.jpg" alt=""><span class="play">▶</span>` : `<span class="lnk">▶ nuoroda</span>`;
      h += `<div class="th${l.base ? ' base' : ''}"><a href="${esc(l.url)}" target="_blank" rel="noopener" title="${esc(l.url)}">${inner}</a><button class="x" data-del="${i}" data-url="${esc(l.url)}" title="Ištrinti nuorodą">×</button></div>`;
    });
    if (!L.length) h += '<span class="none">nėra</span>';
    h += `</div><div class="add"><input type="text" placeholder="+ YouTube nuoroda" data-add="${i}"><button class="btn sm" data-addbtn="${i}">+</button><a class="btn sm" target="_blank" rel="noopener" title="Ieškoti YouTube" href="https://www.youtube.com/results?search_query=${encodeURIComponent(SONGS[i][0] + ' ' + SONGS[i][1])}">🔍</a></div>`;
    return h;
  }
  function dfmt(d) { const p = d.split('-'); return `<span class="dt">${p[0]}<i>·</i>${p[1]}<i>·</i>${p[2]}</span>`; }
  function draw(rows) {
    $('empty').classList.toggle('hide', rows.length > 0);
    const cols = COLS[view];
    let h = '';
    let lastD = null;
    for (const o of rows) {
      if (view === 'weeks' && sortBy === 'date' && o.date !== lastD) { lastD = o.date; h += `<tr class="dh"><td colspan="${cols.length}">★ ${o.date}<small>MTV TOP 20 SAVAITĖ</small></td></tr>`; }
      h += '<tr>';
      if (view === 'songs') {
        h += `<td class="rank ${o.rankBest === 1 ? 'r1' : o.rankBest <= 3 ? 'r3' : ''}">${o.rankBest}</td><td class="artist">${esc(o.artist)}</td><td class="title">${esc(o.title)}</td><td class="num">${o.weeks}</td><td class="num">${o.avg.toFixed(1)}</td><td class="num">${o.wk1 || '–'}</td><td>${dfmt(o.first)}</td><td>${dfmt(o.last)}</td><td>${dfmt(o.peakDate)}</td><td>${thumbsHtml(o.idx)}</td>`;
      } else {
        h += `<td>${dfmt(o.date)}</td><td class="rank ${o.rank === 1 ? 'r1' : o.rank <= 3 ? 'r3' : ''}">${o.rank}</td><td class="artist">${esc(o.artist)}</td><td class="title">${esc(o.title)}</td><td>${thumbsHtml(o.idx)}</td>`;
      }
      h += '</tr>';
    }
    $('tbody').innerHTML = h;
  }

  /* ---------- įvykiai ---------- */
  function go() { page = 0; render(); }
  ['rMin', 'rMax', 'dMin', 'dMax', 'year', 'decade', 'month', 'wMin', 'wMax', 'linkF'].forEach(id => {
    $(id).addEventListener(id.endsWith('Min') || id.endsWith('Max') ? 'input' : 'change', go);
  });
  qArtist.addEventListener('input', go); qTitle.addEventListener('input', go); wkSel.addEventListener('change', go);
  $('theme').addEventListener('change', e => setTheme(e.target.value));
  // metai/dešimtmetis/mėnuo ir tikslus datų intervalas nesikerta – kai pasirenkami metai, išvalom datų lauką
  ['year', 'decade'].forEach(id => $(id).addEventListener('change', () => { $('dMin').value = ''; $('dMax').value = ''; }));
  ['dMin', 'dMax'].forEach(id => $(id).addEventListener('input', () => { $('year').value = ''; $('decade').value = ''; }));
  document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    const [a, b] = c.dataset.r.split(','); $('rMin').value = a; $('rMax').value = b; go();
  }));
  $('sortBy').addEventListener('change', e => { sortBy = e.target.value; sortDir = (COLS[view].find(c => c[0] === sortBy) || [])[2] || 'asc'; $('sortDir').value = sortDir; go(); });
  $('sortDir').addEventListener('change', e => { sortDir = e.target.value; go(); });
  $('pageSize').addEventListener('change', go);
  $('prev').onclick = () => { page--; render(); window.scrollTo(0, 0); };
  $('next').onclick = () => { page++; render(); window.scrollTo(0, 0); };
  function setView(v) {
    view = v; $('tabSongs').classList.toggle('on', v === 'songs'); $('tabWeeks').classList.toggle('on', v === 'weeks');
    if (v === 'songs') wkSel.value = ''; // savaitės pasirinkimas rodomas tik „Topai“ rodinyje
    sortBy = v === 'songs' ? 'weeks' : 'date'; sortDir = 'desc'; fillSort(); buildFilterRow(); page = 0; render();
  }
  $('tabSongs').onclick = () => setView('songs'); $('tabWeeks').onclick = () => setView('weeks');
  $('reset').onclick = () => {
    ['dMin', 'dMax', 'year', 'decade', 'month', 'wMin', 'wMax', 'linkF'].forEach(id => $(id).value = '');
    qArtist.value = ''; qTitle.value = ''; wkSel.value = '';
    $('rMin').value = 1; $('rMax').value = 20; go();
  };
  $('out').addEventListener('click', e => {
    const t = e.target.closest('th');
    if (t) {
      const k = t.dataset.k; if (sortBy === k) sortDir = sortDir === 'asc' ? 'desc' : 'asc'; else { sortBy = k; sortDir = COLS[view].find(c => c[0] === k)[2]; }
      $('sortBy').value = sortBy; $('sortDir').value = sortDir; page = 0; render(); return;
    }
    const d = e.target.closest('[data-del]');
    if (d) { removeLink(+d.dataset.del, d.dataset.url); render(); return; }
    const a = e.target.closest('[data-addbtn]');
    if (a) { const i = +a.dataset.addbtn; const inp = document.querySelector(`input[data-add="${i}"]`); addLink(i, inp.value); render(); }
  });
  /* ---------- TV grotuvas: video atsidaro tame pačiame lange, išauga iš miniatiūros ---------- */
  let tv = null;
  const TV_PX = 24, TV_PY = 52; // rėmo storis: šonai / viršus+apačia (su valdymo juosta)
  function setRect(el, r) { el.style.left = r.left + 'px'; el.style.top = r.top + 'px'; el.style.width = r.width + 'px'; el.style.height = r.height + 'px'; }
  function tvTarget() {
    const w = Math.min(innerWidth * .94, (innerHeight * .92 - TV_PY) * 16 / 9 + TV_PX);
    const h = (w - TV_PX) * 9 / 16 + TV_PY;
    return { left: (innerWidth - w) / 2, top: (innerHeight - h) / 2, width: w, height: h };
  }
  function thumbRect(el) {
    if (el && document.body.contains(el)) { const r = el.getBoundingClientRect(); return { left: r.left, top: r.top, width: r.width, height: r.height }; }
    return { left: innerWidth / 2 - 60, top: innerHeight / 2 - 34, width: 120, height: 68 };
  }
  function openTv(id, url, thumb) {
    if (tv) closeTv(true);
    const back = document.createElement('div'); back.className = 'tv-back';
    const box = document.createElement('div'); box.className = 'tv';
    box.innerHTML = `<div class="tv-screen"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>` +
      `<div class="tv-bar"><span class="tv-led"></span><a href="${esc(url)}" target="_blank" rel="noopener">Atidaryti YouTube ↗</a><button class="tv-x" title="Uždaryti (Esc)">✕</button></div>`;
    document.body.append(back, box);
    setRect(box, thumbRect(thumb));
    box.getBoundingClientRect(); // priverčia pritaikyti pradinę padėtį prieš animaciją
    back.classList.add('open'); box.classList.add('open'); setRect(box, tvTarget());
    const t = setTimeout(() => box.classList.add('ready'), 480);
    back.onclick = box.querySelector('.tv-x').onclick = () => closeTv();
    tv = { back, box, thumb, t };
  }
  function closeTv(now) {
    if (!tv) return;
    const { back, box, thumb, t } = tv; tv = null; clearTimeout(t);
    box.querySelector('iframe').remove(); // sustabdo grojimą
    box.classList.remove('ready', 'open'); back.classList.remove('open');
    if (now) { box.remove(); back.remove(); return; }
    setRect(box, thumbRect(thumb));
    setTimeout(() => { box.remove(); back.remove(); }, 480);
  }
  $('out').addEventListener('click', e => {
    const a = e.target.closest('.th a');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey || e.button) return;
    const id = ytId(a.href); if (!id) return; // ne YouTube nuorodos atsidaro naujame skirtuke
    e.preventDefault(); openTv(id, a.href, a.parentElement);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTv(); });
  addEventListener('resize', () => { if (tv) { tv.box.style.transition = 'none'; setRect(tv.box, tvTarget()); tv.box.getBoundingClientRect(); tv.box.style.transition = ''; } });

  $('out').addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.dataset.add !== undefined) { addLink(+e.target.dataset.add, e.target.value); render(); }
  });
  $('saveLinks').onclick = saveLinks;

  (function () {
    const t = ['Visos laikų 90-ųjų hitai', 'Top 20 savaitė po savaitės', 'Spausk ant antraštės – rūšiuok', 'Pridėk savo YouTube klipą', 'Naujausia #1 viršuje'];
    const s = t.map(x => '<span>' + x + '</span><b>★</b>').join(''); $('tick').innerHTML = s + s + s + s;
  })();
  fillSort(); buildFilterRow(); render();
})();
