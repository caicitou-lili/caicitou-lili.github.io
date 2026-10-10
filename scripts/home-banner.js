/**
 * 首页顶部横幅（新内容入口）
 * ------------------------------------------------------------
 * 在站点首页（index.html）的 <section id="main"> 之后注入一张入口卡片，
 * 其余页面不受影响。这样 `hexo generate` 可完整复现线上首页效果，
 * 不会因为重新生成而丢失入口。
 *
 * 如需下线该横幅，直接删除本文件（或改成 return str 提前返回）即可。
 */
const CARD = [
  '',
  '<div class="article article-type-post" style="padding:18px 20px;background:#fff8e1;border-left:4px solid #ff9800;margin:0 0 18px">',
  '  <div style="font-weight:700;font-size:16px;margin-bottom:6px">\uD83C\uDFB5 新发布：滚石杂志《史上最伟大的 500 张专辑》完整榜单</div>',
  '  <div style="color:#555;font-size:14px;line-height:1.7;margin-bottom:8px">收录 500 张专辑，含封面、滚石乐评中英文对照，6828 首曲目列表与歌名中文译名，支持关键词搜索与排序。</div>',
  '  <a href="/rollingstone-500/" style="color:#e65100;font-weight:600">\u2192 查看完整榜单</a>',
  '</div>',
  ''
].join('\n');

hexo.extend.filter.register('after_render:html', function (str, data) {
  if (!data || data.path !== 'index.html') return str;
  if (str.indexOf('rollingstone-500') !== -1) return str; // 已注入，避免重复
  if (str.indexOf('<section id="main">') === -1) return str;
  return str.replace('<section id="main">', '<section id="main">' + CARD);
});
