---
title: 中华古诗词
date: 2026-06-08 05:00:00
layout: false
---

<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>中华古诗词 · 最全中文诗歌数据库</title>
<style>
  :root {
    --bg: #fdf6ec;
    --card-bg: #fffef9;
    --text: #3a2f28;
    --text-light: #8b7355;
    --accent: #8b4513;
    --accent-light: #d4a76a;
    --border: #e8d5c4;
    --shadow: 0 2px 16px rgba(0,0,0,0.06);
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: "Noto Serif SC", "SimSun", "STSong", serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
  }

  /* Header */
  .header {
    background: linear-gradient(135deg, #2c1810 0%, #4a2c17 50%, #3d2415 100%);
    color: #f0d9b5;
    padding: 40px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .header::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='10' y='30' fill='rgba(255,255,255,0.03)' font-size='20'%3E诗%3C/text%3E%3Ctext x='60' y='70' fill='rgba(255,255,255,0.03)' font-size='24'%3E词%3C/text%3E%3Ctext x='30' y='90' fill='rgba(255,255,255,0.02)' font-size='16'%3E赋%3C/text%3E%3C/svg%3E") repeat;
  }
  .header h1 { font-size: 2.4em; font-weight: 900; position: relative; z-index: 1; letter-spacing: 0.1em; }
  .header p { font-size: 1em; opacity: 0.7; margin-top: 8px; position: relative; z-index: 1; }

  /* Search */
  .search-bar {
    max-width: 600px; margin: -24px auto 0;
    position: relative; z-index: 10; padding: 0 20px;
  }
  .search-bar input {
    width: 100%; padding: 16px 24px; font-size: 1.1em;
    border: 2px solid var(--border); border-radius: 50px;
    background: var(--card-bg); color: var(--text);
    font-family: inherit; outline: none;
    box-shadow: var(--shadow);
    transition: all 0.3s;
  }
  .search-bar input:focus {
    border-color: var(--accent-light);
    box-shadow: 0 4px 24px rgba(139,69,19,0.15);
  }
  .search-hint { text-align: center; margin-top: 8px; font-size: 0.85em; color: var(--text-light); }

  /* Stats */
  .stats {
    display: flex; gap: 24px; justify-content: center;
    flex-wrap: wrap; padding: 32px 20px;
    max-width: 600px; margin: 0 auto;
  }
  .stat {
    background: var(--card-bg); border: 1px solid var(--border);
    border-radius: 12px; padding: 16px 24px; text-align: center;
    min-width: 100px; box-shadow: var(--shadow);
  }
  .stat .num { font-size: 1.8em; font-weight: 900; color: var(--accent); }
  .stat .label { font-size: 0.85em; color: var(--text-light); margin-top: 4px; }

  /* Tabs */
  .tabs {
    display: flex; justify-content: center; gap: 8px;
    padding: 0 20px 24px; flex-wrap: wrap;
  }
  .tab {
    padding: 8px 20px; border-radius: 20px; border: 1px solid var(--border);
    background: var(--card-bg); cursor: pointer; font-family: inherit;
    font-size: 0.95em; color: var(--text); transition: all 0.2s;
  }
  .tab:hover, .tab.active { background: var(--accent); color: #fff; border-color: var(--accent); }

  /* Poem cards */
  .container { max-width: 800px; margin: 0 auto; padding: 0 20px 40px; }
  .results-info { text-align: center; color: var(--text-light); margin: 16px 0; font-size: 0.9em; }

  .poem-card {
    background: var(--card-bg); border: 1px solid var(--border);
    border-radius: 12px; padding: 28px 32px; margin-bottom: 16px;
    box-shadow: var(--shadow); transition: all 0.2s;
    position: relative; overflow: hidden;
  }
  .poem-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.1); transform: translateY(-1px); }
  .poem-card .poem-title { font-size: 1.3em; font-weight: 700; color: var(--accent); margin-bottom: 4px; }
  .poem-card .poem-author { font-size: 0.95em; color: var(--text-light); margin-bottom: 16px; }
  .poem-card .poem-author a { color: var(--accent); text-decoration: none; cursor: pointer; }
  .poem-card .poem-author a:hover { text-decoration: underline; }
  .poem-card .poem-lines { line-height: 2.2; font-size: 1.1em; }
  .poem-card .poem-lines p { text-indent: 0; }
  .poem-card .poem-tags { margin-top: 12px; display: flex; gap: 6px; flex-wrap: wrap; }
  .poem-card .tag {
    font-size: 0.78em; padding: 2px 10px; border-radius: 10px;
    background: #f5efe0; color: var(--text-light); border: 1px solid var(--border);
  }

  .empty-state {
    text-align: center; padding: 60px 20px; color: var(--text-light);
  }
  .empty-state .icon { font-size: 3em; margin-bottom: 16px; }

  .load-more {
    display: block; margin: 24px auto; padding: 12px 36px;
    border: 2px solid var(--accent); border-radius: 30px;
    background: transparent; color: var(--accent); font-size: 1em;
    font-family: inherit; cursor: pointer; transition: all 0.2s;
  }
  .load-more:hover { background: var(--accent); color: #fff; }

  footer {
    text-align: center; padding: 32px; color: var(--text-light);
    font-size: 0.85em; border-top: 1px solid var(--border);
  }
  footer a { color: var(--accent); }

  @media (max-width: 600px) {
    .header h1 { font-size: 1.6em; }
    .poem-card { padding: 20px; }
    .poem-card .poem-lines { font-size: 1em; line-height: 2; }
  }
</style>
</head>
<body>

<div class="header">
  <h1>📜 中华古诗词</h1>
  <p>最全中文诗歌古典文集数据库 · 数据源自 chinese-poetry</p>
</div>

<div class="search-bar">
  <input type="text" id="searchInput" placeholder="搜索诗词、作者、内容...">
  <div class="search-hint">支持作者名、诗题、诗句内容搜索 · 共 <span id="totalCount">-</span> 首</div>
</div>

<div class="tabs" id="tabs">
  <button class="tab active" data-filter="all">全部</button>
  <button class="tab" data-filter="李白">李白</button>
  <button class="tab" data-filter="杜甫">杜甫</button>
  <button class="tab" data-filter="苏轼">苏轼</button>
  <button class="tab" data-filter="白居易">白居易</button>
  <button class="tab" data-filter="李清照">李清照</button>
  <button class="tab" data-filter="辛弃疾">辛弃疾</button>
  <button class="tab" data-filter="陶渊明">陶渊明</button>
  <button class="tab" data-filter="王维">王维</button>
</div>

<div class="container" id="poemContainer"></div>

<footer>
  诗词数据源自 <a href="https://github.com/chinese-poetry/chinese-poetry" target="_blank">chinese-poetry/chinese-poetry</a>
  · 49,909 ⭐ · MIT 开源协议
</footer>

<script>
// Load poetry data
let poems = [];
let currentFilter = 'all';
let displayCount = 30;

const container = document.getElementById('poemContainer');
const searchInput = document.getElementById('searchInput');
const totalSpan = document.getElementById('totalCount');

async function loadData() {
  try {
    const resp = await fetch('poems.json');
    poems = await resp.json();
    totalSpan.textContent = poems.length.toLocaleString();
    render();
  } catch(e) {
    container.innerHTML = '<div class="empty-state"><div class="icon">📖</div><p>诗词数据加载中...</p></div>';
  }
}

function filterPoems() {
  let filtered = poems;

  // Tab filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.a === currentFilter);
  }

  // Search filter
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(p =>
      p.a.toLowerCase().includes(query) ||
      p.t.toLowerCase().includes(query) ||
      p.p.some(line => line.toLowerCase().includes(query)) ||
      (p.g && p.g.some(tag => tag.toLowerCase().includes(query)))
    );
  }

  return filtered;
}

function render(append = false) {
  const filtered = filterPoems();
  const toShow = append ? filtered.slice(0, displayCount) : filtered.slice(0, displayCount);

  if (!append) {
    container.innerHTML = '';
    displayCount = 30;
  }

  if (toShow.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><p>未找到匹配的诗词，试试其他关键词</p></div>';
    return;
  }

  const startIdx = append ? displayCount - 30 : 0;
  const html = toShow.slice(startIdx).map(poem => `
    <div class="poem-card">
      <div class="poem-title">${escHtml(poem.t)}</div>
      <div class="poem-author"><a onclick="filterByAuthor('${escAttr(poem.a)}')">${escHtml(poem.a)}</a></div>
      <div class="poem-lines">${poem.p.map(line => `<p>${escHtml(line)}</p>`).join('')}</div>
      ${poem.g && poem.g.length > 0 ? `<div class="poem-tags">${poem.g.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>` : ''}
    </div>
  `).join('');

  if (append) {
    container.insertAdjacentHTML('beforeend', html);
  } else {
    container.innerHTML = html;
  }

  // Show load more button
  if (filtered.length > displayCount) {
    const btn = document.createElement('button');
    btn.className = 'load-more';
    btn.textContent = `加载更多 (${filtered.length - displayCount} 首剩余)`;
    btn.onclick = () => {
      displayCount += 30;
      render(true);
    };
    container.appendChild(btn);
  }
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function escAttr(s) {
  return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;');
}

function filterByAuthor(author) {
  currentFilter = author;
  searchInput.value = '';
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const matchTab = document.querySelector(`.tab[data-filter="${author}"]`);
  if (matchTab) matchTab.classList.add('active');
  displayCount = 30;
  render();
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

// Tab clicks
document.getElementById('tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    searchInput.value = '';
    displayCount = 30;
    render();
  }
});

// Search
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    if (searchInput.value.trim()) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      currentFilter = 'all';
    }
    displayCount = 30;
    render();
  }, 300);
});

loadData();
</script>
</body>
</html>
