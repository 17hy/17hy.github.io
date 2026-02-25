# 🚀 个人主页项目 - 快速开始指南

## 📋 项目概述

这是一个使用 **React + Vite + Tailwind CSS** 构建的现代个人主页，可以展示你的项目经历、技能和个人成就。

### ✨ 核心特性
- ✅ 快速构建（Vite）和热模块重载
- ✅ 响应式设计（在所有设备上完美显示）
- ✅ 深色/浅色模式切换
- ✅ 项目数据集中管理（JSON配置）
- ✅ GitHub Pages自动部署
- ✅ 性能优化（图片懒加载、代码分割）
- ✅ SEO友好

## 🛠️ 本地开发

### 1️⃣ 克隆仓库

```bash
git clone https://github.com/17hy/17hy.github.io.git
cd 17hy.github.io
```

### 2️⃣ 安装依赖

```bash
npm install
```

### 3️⃣ 启动开发服务器

```bash
npm run dev
```

默认会在 `http://localhost:5173` 打开。

### 4️⃣ 构建生产版本

```bash
npm run build
```

生成的静态文件将在 `dist/` 目录中。

## 📝 自定义内容

### 步骤1：编辑配置文件

编辑 `public/data/portfolio.json`，修改：

```json
{
  "personal": {
    "name": "你的名字",
    "title": "你的职位",
    "bio": "个人简介",
    "email": "你的邮箱",
    "social": {
      "github": "你的GitHub",
      "linkedin": "你的LinkedIn",
      ...
    }
  }
}
```

### 步骤2：添加项目

在 `portfolio.json` 的 `projects` 数组中添加你的项目：

```json
{
  "id": "my-project",
  "name": "项目名称",
  "description": "短描述",
  "descriptionLong": "长描述",
  "image": "项目截图URL",
  "tags": ["React", "TypeScript"],
  "github": "https://github.com/17hy/project",
  "demo": "https://demo.example.com",
  "startDate": "2025-01",
  "endDate": "2025-06",
  "featured": true
}
```

### 步骤3：替换头像和项目图片

1. 将头像上传到某个图床（如：GitHub、Imgur、七牛云等）
2. 更新 `portfolio.json` 中的 `avatar` URL
3. 项目截图同理

### 步骤4：设置社交媒体链接

在 `personal.social` 中填入你的真实链接

## 🔐 链接到私有项目资料

### 方式1：直接链接（推荐）

在主页显示 "项目资料" 按钮，点击跳转到私有仓库的访问说明页面：

```json
"privateResources": {
  "title": "项目资料库",
  "description": "详细的项目文档和案例分析",
  "link": "https://github.com/17hy/portfolio-private"
}
```

### 方式2：申请表单

如果你不想让访问者直接看到私有仓库，可以创建一个访问申请表单：

```json
"privateResources": {
  "applyLink": "https://forms.gg/your-form-id",
  "applyCTA": "申请访问"
}
```

推荐工具：
- Google Forms
- Typeform
- Wufoo

### 方式3：邮件联系

```json
"privateResources": {
  "contactEmail": "your.email@example.com"
}
```

## 🚀 部署到GitHub Pages

### 自动部署（推荐）

1. 代码推送到main分支后，自动触发GitHub Actions
2. 项目自动构建并部署到 `https://17hy.github.io`
3. 约2-3分钟后生效

### 手动部署

```bash
npm run build
git add dist/
git commit -m "build: 更新部署"
git push origin main
```

## 📊 GitHub Pages 配置

1. 进入 [Repository Settings](https://github.com/17hy/17hy.github.io/settings)
2. 在 "Pages" 部分，选择：
   - Source: `GitHub Actions`
   - 确保worklow文件存在：`.github/workflows/deploy.yml`

## 🎨 主题定制

### 修改颜色主题

编辑 `src/styles/globals.css` 或 `tailwind.config.js`：

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### 修改字体

在 `src/styles/globals.css` 中导入自定义字体（如 Google Fonts）

## 📈 SEO 优化

### 1️⃣ Meta标签

编辑 `src/App.jsx` 中的Helmet配置：

```jsx
<Helmet>
  <title>你的名字 - 全栈工程师</title>
  <meta name="description" content="你的个人简介" />
  <meta property="og:image" content="你的头像URL" />
</Helmet>
```

### 2️⃣ Sitemap

Vite会自动生成sitemap，部署后访问 `/sitemap.xml`

### 3️⃣ Google Analytics

在 `public/index.html` 中添加GA代码

## 🐛 常见问题

### Q: 部署后样式不显示？
A: 清除浏览器缓存，检查 `vite.config.js` 中的 `base` 配置

### Q: 如何自定义域名？
A: 在 `public/CNAME` 中添加你的域名，如 `yourname.com`

### Q: 如何追踪访问量？
A: 集成Google Analytics或其他分析工具

## 📚 相关资源

- [React官方文档](https://react.dev)
- [Vite文档](https://vitejs.dev)
- [Tailwind CSS文档](https://tailwindcss.com)
- [GitHub Pages帮助](https://pages.github.com)

## 📞 支持和反馈

遇到问题？请创建 [Issue](https://github.com/17hy/17hy.github.io/issues)

## 📄 许可证

MIT License - 你可以自由使用、修改和分发此代码。

---

**祝你打造一个精彩的个人主页！** 🎉
