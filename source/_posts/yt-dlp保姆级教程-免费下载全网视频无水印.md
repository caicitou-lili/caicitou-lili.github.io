---
title: yt-dlp 保姆级教程——免费下载全网视频无水印
date: 2026-06-19 02:30:00
tags: [yt-dlp, 视频下载, 免费工具, 开源, 教程]
categories: 教程
---

想存一个抖音视频当素材，结果下载器全是坑：要么充会员，要么有水印，要么画质压成 360p，要么下两个就让你付费。

这么简单的需求，凭什么还要花钱？

**yt-dlp** —— 免费、开源、0 成本，支持 **1800+ 网站**，抖音、YouTube、B站、推特、小红书全都能下，自动抓最高画质，抖音/TikTok 直接无水印。

<!-- more -->

---

## 最省事版：用 AI 帮你装（推荐）

如果你电脑里有 Claude Code 或 Codex，啥都不用懂，直接说一句：

> 「帮我安装 yt-dlp 这个工具」

装完之后想下哪个视频：

> 「帮我用 yt-dlp 下载这个视频：[粘贴链接]」

从安装到下载，一行命令都不用记。

---

## 手动版：一步步来

### 第一步：安装（只需一次）

**Mac：**
```bash
brew install yt-dlp ffmpeg
```
如果提示没有 brew，先装 brew：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Windows（PowerShell）：**
```powershell
irm get.scoop.sh | iex
scoop install yt-dlp ffmpeg
```

> ffmpeg 用来合并高清音视频，必须一起装。

### 第二步：复制视频链接

在抖音/B站/YouTube 点「分享 → 复制链接」，拿到网址。

### 第三步：下载

```bash
yt-dlp "视频链接"
```

回车，等几秒，视频就在当前文件夹里了。

---

## 进阶用法

**最高画质 MP4：**
```bash
yt-dlp -f "bv*+ba/b" --merge-output-format mp4 "链接"
```

**需要登录才能看高清？（借用浏览器 Cookie）：**
```bash
yt-dlp --cookies-from-browser chrome "链接"
```

**只下载音频（MP3）：**
```bash
yt-dlp -x --audio-format mp3 "链接"
```

---

> 💡 这个工具支持的 1800+ 网站：抖音、YouTube、B站、推特/X、小红书、TikTok、Instagram、Facebook、Vimeo、PornHub、Twitch……你能想到的基本都支持。

---

> 📌 原文作者：[@Leobai825](https://x.com/Leobai825) 天策
> 原文数据：2万浏览 · 124 点赞 · 171 收藏
> 原文链接：[X.com](https://x.com/Leobai825/status/2067854120392720471)
