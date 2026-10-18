/* 站内本地搜索（配合 scripts/local-search.js 使用） */
(function () {
  'use strict';

  var panel, input, resultsEl, hintEl, posts = null, loading = false, timer = null;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function loadIndex(cb) {
    if (posts) return cb();
    if (loading) return;
    loading = true;
    fetch('/search.json', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        posts = (data && data.posts) || [];
        loading = false;
        cb();
      })
      .catch(function () {
        posts = [];
        loading = false;
        cb();
      });
  }

  function snippet(text, kw) {
    var i = text.toLowerCase().indexOf(kw.toLowerCase());
    if (i < 0) return text.slice(0, 90) + (text.length > 90 ? '…' : '');
    var start = Math.max(0, i - 40);
    var s = text.slice(start, start + 140);
    return (start > 0 ? '…' : '') + s + (start + 140 < text.length ? '…' : '');
  }

  function search(q) {
    var kws = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!kws.length) return [];
    var out = [];
    for (var i = 0; i < posts.length; i++) {
      var p = posts[i];
      var hay = (p.title + ' ' + (p.tags || []).join(' ') + ' ' + (p.cats || []).join(' ') + ' ' + p.text).toLowerCase();
      var score = 0, all = true;
      for (var k = 0; k < kws.length; k++) {
        var kw = kws[k];
        if (hay.indexOf(kw) === -1) { all = false; break; }
        score += (p.title.toLowerCase().indexOf(kw) !== -1 ? 10 : 0);
        score += 1;
      }
      if (!all) continue;
      out.push({ post: p, score: score });
    }
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 20).map(function (x) { return x.post; });
  }

  function render(q) {
    var list = search(q);
    if (!q.trim()) {
      hintEl.textContent = '输入关键词开始搜索';
      resultsEl.innerHTML = '';
      return;
    }
    if (!list.length) {
      hintEl.textContent = '没有找到与「' + q + '」相关的文章';
      resultsEl.innerHTML = '';
      return;
    }
    hintEl.textContent = '找到 ' + list.length + ' 篇相关文章';
    resultsEl.innerHTML = list.map(function (p) {
      return '<a class="ls-item" href="' + esc(p.url) + '">' +
        '<div class="ls-item-title">' + esc(p.title) + '</div>' +
        '<div class="ls-item-meta">' + esc(p.date) +
        (p.tags && p.tags.length ? ' · ' + esc(p.tags.slice(0, 3).join(' / ')) : '') + '</div>' +
        '<div class="ls-item-snippet">' + esc(snippet(p.text, q.trim())) + '</div>' +
        '</a>';
    }).join('');
  }

  function open() {
    if (!panel) return;
    panel.hidden = false;
    document.body.classList.add('ls-open');
  }

  function close() {
    if (!panel) return;
    panel.hidden = true;
    document.body.classList.remove('ls-open');
  }

  ready(function () {
    panel = document.getElementById('local-search-panel');
    input = document.getElementById('local-search-input');
    if (!panel || !input) return;
    resultsEl = panel.querySelector('.ls-results');
    hintEl = panel.querySelector('.ls-hint');

    // 主题自带的 blur 逻辑会收起搜索框（移除 .on）。
    // 不跟它抢事件，改由 body.ls-open 的 CSS 强制保位（见 local-search.css）。

    input.addEventListener('focus', function () {
      open();
      loadIndex(function () { render(input.value); });
    });

    input.addEventListener('input', function () {
      clearTimeout(timer);
      var v = input.value;
      timer = setTimeout(function () {
        loadIndex(function () { render(v); });
      }, 120);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); input.blur(); }
      if (e.key === 'Enter') {
        var first = resultsEl.querySelector('.ls-item');
        if (first) { e.preventDefault(); window.location.href = first.getAttribute('href'); }
      }
    });

    // 表单提交拦截：有结果就跳第一篇，否则不跳走
    var form = document.getElementById('local-search-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var first = resultsEl.querySelector('.ls-item');
        if (first) window.location.href = first.getAttribute('href');
      });
    }

    // 点击面板外部关闭
    document.addEventListener('click', function (e) {
      if (!panel.hidden && !panel.contains(e.target) && e.target !== input && !input.contains(e.target)) {
        close();
      }
    });

    // 支持 /?q=xxx 直接带关键词打开
    var q = new URLSearchParams(location.search).get('q');
    if (q && location.pathname === '/') {
      input.value = q;
      input.focus();
      open();
      loadIndex(function () { render(q); });
    }
  });
})();
