# TechCorp 企业官网

## How to Run

### 开发环境

```bash
cd frontend
npm install
npm run dev
```

访问 http://localhost:3000

### Docker 部署

```bash
docker-compose up -d --build
```

访问 http://localhost:3000

## Services

| 服务 | 端口 | 说明 |
|------|------|------|
| frontend | 3000 | Next.js 前端应用 |

## 测试账号

本项目为纯前端展示网站，无需登录账号。

## 题目内容

我现在需要新建一个企业官网项目，请以提供的图片UI内容，帮我用next.js,tailwind.css 为技术框架,

---

## 项目介绍

TechCorp 企业官网是一个基于 Next.js 和 Tailwind CSS 构建的现代化企业展示网站，采用深色科技主题设计。

### 技术栈

- **框架**: Next.js 16 + React 19
- **样式**: Tailwind CSS 4
- **部署**: Docker + Nginx

### 页面结构

- **首页**: Hero、服务介绍、关于我们、案例展示、新闻动态、CTA
- **关于我们**: 公司介绍、发展历程、团队展示
- **产品服务**: 服务列表与详情
- **解决方案**: 行业解决方案
- **新闻动态**: 新闻列表
- **联系我们**: 联系表单

### 特性

- 响应式设计，支持移动端和桌面端
- 深色科技主题，青蓝色渐变配色
- 玻璃拟态效果和动画交互
- 未完成功能 Toast 提示
