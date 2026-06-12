# Eco Screen Penang Website

现代简约单页网站，适合部署到 Vercel。内容包含首页、产品介绍、防蚊纱窗、防盗纱门、防盗纱窗、隐形纱窗、客户评价、免费测量表单和固定 WhatsApp 联系按钮。

## 修改 WhatsApp 号码

当前占位号码是 `+60 19-576 3499`，链接使用 `60195763499`。

需要替换时，请在这些文件中搜索并替换：

- `index.html`
- `script.js`

同时建议替换 `index.html` 里的 `telephone`、`sameAs` 和所有 `wa.me` 链接。

## 部署到 Vercel

1. 执行 `npm install`。
2. 执行 `npm run build`。
3. 把整个文件夹上传到 GitHub。
4. 在 Vercel 选择 `New Project`。
5. 导入这个项目。
6. Framework Preset 选择 `Other`。
7. Build Command 填写 `npm run build`。
8. Output Directory 填写 `dist`。
9. Environment Variables 不需要填写。
10. 点击 Deploy。

## 文件结构

- `index.html`：网站内容与 SEO 资料
- `styles.css`：响应式样式
- `script.js`：手机菜单与 WhatsApp 表单
- `assets/eco-screen-hero.webp`：主视觉优化版
- `assets/eco-screen-hero.png`：主视觉后备图与社交分享图
- `robots.txt`、`sitemap.xml`：SEO 基础文件
- `vercel.json`：Vercel 静态资源缓存设置
- `scripts/build.js`：把静态网站复制到 `dist`
- `.gitignore`：避免上传 `node_modules`、`dist` 和本地临时文件
