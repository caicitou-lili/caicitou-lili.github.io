---
title: GitHub 奶爸级入门教程——从注册到开源贡献
date: 2026-06-17 01:30:00
tags: [GitHub, 开源, Git, AI编程, 教程]
categories: 教程
---

GitHub 有多牛？**1.8 亿开发者，至少 6 亿仓库**。腾讯、阿里、字节的开源项目全在上面。有最近爆火的 OpenClaw，有数字人，有 Skill 仓库，甚至还有阿波罗登月的代码。

GitHub 可不是程序员专属。AI 编程能力变强之后，现在几乎要**人手一个 GitHub 仓库**了。

这篇奶爸级教程带你从零搞懂：注册、搜索、仓库操作、Git 使用、部署上线、开源贡献。

<!-- more -->

---

## 开源是什么

代码本质上是文字。**不开源** = 这段文字只在你电脑里，别人看不到。**开源** = 放到 GitHub 上设成公开仓库，任何人都能看、能复制、能拿去改。

但开源不等于放弃所有权。许可证规定别人能做什么：
- **MIT 协议：** 最宽松，几乎不限制
- **GPL 协议：** 最严格，别人用了你的代码，他自己的代码也得开源
- **什么都不放：** 法律上默认保留所有权利

---

## Git 和 GitHub 的区别

**不是一回事。**

| | Git | GitHub |
|------|-----|--------|
| 是什么 | 版本控制工具 | 代码托管网站 |
| 在哪 | 你电脑上 | 云端服务器 |
| 功能 | 记录每次改动，能退回任意历史版本 | 共享代码、协作开发 |
| 联网 | 不需要 | 需要 |

> Git 是你电脑上的版本记录本，GitHub 是这本记录本的云端备份加共享平台。

---

## 注册与安全

### 注册账号

1. 打开 github.com → 点 **Sign up**
2. 填邮箱、密码、用户名、国家
3. **邮箱用 Gmail**——后面 Supabase、Vercel、Cloudflare 全支持 Google 一键登录。QQ 邮箱和 163 邮箱经常把验证邮件扔进垃圾箱
4. 用户名别起 test001，用真名拼音或长期英文 ID

### 开双重认证（2FA）

**必须开。** GitHub 从 2023 年起强制要求做过代码贡献的账号开 2FA。

路径：右上角头像 → Settings → Password and authentication → Two-factor authentication → Enable → 选 Authenticator app

下载 Google Authenticator，扫码绑定。**16 个恢复码必须存好**——手机丢了这是唯一的救命钥匙。

---

## 创建仓库

右上角 + 号 → New repository：

| 选项 | 建议 |
|------|------|
| 仓库名 | 全小写英文，用连字符，如 `my-first-project` |
| Description | 一句话说清楚干什么的，建议填 |
| Public / Private | 免费账号两种都能无限建 |
| Add a README | **勾上**，这是仓库的脸面 |

---

## 搜索项目

顶部搜索栏直接打字，几个最常用限定符：

```
language:python         只搜 Python 项目
stars:>1000             只要 Star 过千的热门
pushed:>2026-01-01      今年还在更新的活跃项目
in:name                 关键词出现在仓库名里
```

**组合示范：** `machine learning language:python stars:>5000 pushed:>2026-01-01`

比在搜索引擎里搜"某某项目推荐"快一个数量级，没 SEO 灌水文章夹在中间。

---

## 读懂一个仓库

打开任意仓库页面，从上到下：

| 区域 | 说明 |
|------|------|
| **Star** | 收藏+点赞，Star 数越高项目越受欢迎 |
| **Fork** | 把整个仓库复制到你账号下，独立副本随便改 |
| **Watch** | 订阅更新通知 |
| **Code 标签** | 最核心——看代码和文件 |
| **Issues** | 工单区，提 bug、提需求、问怎么用 |
| **Pull Requests** | 合并请求，给别人项目贡献代码的入口 |
| **README.md** | 项目说明书，看陌生项目先看这个 |

**绿色 Code 按钮** = 下载代码入口。右侧 About 栏显示简介、语言、Star 数、Fork 数。

---

## 本地 Git 操作（零命令）

**不需要装 Git，不需要背命令。** 打开 AI 编程工具（Cursor、Claude Code、Copilot、Trae 都行），对它说这六句话：

| 操作 | 对 AI 说 |
|------|----------|
| 初始化 | "帮我初始化 Git 仓库" |
| 下载别人仓库 | "帮我把这个仓库克隆到本地 github.com/xxx/xxx" |
| 提交改动 | "提交所有改动，说明是：修复了登录页白屏" |
| 推送到 GitHub | "推送到 GitHub" |
| 拉取远端更新 | "拉一下最新代码" |
| 关联远端仓库 | "帮我把这个项目关联到 GitHub 上的 xxx 仓库，然后推送上去" |

Agent 在后台自动执行一切，包括自动配好 SSH Key。

---

## 部署上线

| 类型 | 平台 | 对 AI 说 |
|------|------|----------|
| 静态 HTML | **GitHub Pages** | "帮我把这个仓库部署到 GitHub Pages" |
| React/Vue/Next.js | **Vercel** | "帮我把这个项目部署到 Vercel" |

每次 git push 自动重新部署。免费套餐个人项目够用，加载速度比国内很多付费虚拟主机还快。

---

## Fork + PR：开源贡献核心流程

1. **Fork：** 点右上角 Fork 按钮，把目标仓库复制到自己账号下
2. **Clone：** 把自己 Fork 的仓库拉到本地
3. **改代码：** 在本地改，提交，推送
4. **发起 PR：** 打开自己 Fork 仓库的 GitHub 页面 → 点 Compare and pull request → 填写标题和描述说清楚改了什么
5. **等合并：** 原作者审核，可能让你改几处，也可能直接 Merge

---

## 推荐浏览的开源项目

| 项目 | Star | 说明 |
|------|------|------|
| [Qwen](https://github.com/QwenLM/Qwen) | - | 阿里开源大语言模型，7B-72B 全量开放 |
| [Apollo-11](https://github.com/chrislgarry/Apollo-11) | 30K+ | 1969 年阿波罗 11 号制导计算机原始代码 |
| [HowToCook](https://github.com/Anduin2017/HowToCook) | 80K | 程序员做饭指南，每道菜标难度、材料精确到克 |
| [English-level-up-tips](https://github.com/byoungd/English-level-up-tips) | 46K | 英语提升技巧，7 层结构从基础到 AI 工具 |

看这些项目不需要完全看懂代码。打开先看 README，再看文件结构，感受真实项目长什么样。这种浏览本身就是最好的学习。

---

剩下的就一件事了——打开 GitHub，搜一个你感兴趣的项目，点进去看它的 README 和文件结构。再用 git clone 拉到本地，改点东西，push 上去。**踩过一次完整流程，这些知识才是你的。**

---

> 📌 原文作者：[@laowangbabababa](https://x.com/laowangbabababa) 老王霸 AI Lab
> 原文数据：63.2万浏览 · 645 点赞 · 189 转推 · 1572 收藏
> 原文链接：[X.com](https://x.com/laowangbabababa/status/2061384966227849698)
