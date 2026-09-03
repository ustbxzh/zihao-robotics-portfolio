# 机器人数字孪生与智能操作作品集

[访问公开作品集网站](https://zihao-robotics-systems.arielohry138.chatgpt.site)

一个聚焦机器人数字孪生建模、产业合作与智能操作研究的单页作品集网站。

## 内容结构

1. 机器人孪生模型建模：展示 OpenUSD 模型构建与动力学模型构建流程。
2. 产业合作成果：集中呈现商飞筒段对接数字孪生与移动数字孪生平台。
3. RL Manipulation：为后续强化学习智能操作成果预留展示空间。
4. 训练过程：简要展示移载对接训练与关键训练阶段。

## 本地开发

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

也可以直接启动静态预览：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 生产构建

```bash
npm run build
```

项目使用 Vinext、Cloudflare Vite 集成和 OpenAI Sites 打包插件，托管配置位于 `.openai/hosting.json`。

## 目录说明

```text
index.html                              页面内容与元数据
css/style.css                           响应式视觉样式
js/main.js                              页面动效与视频可视区域控制
assets/                                 原始项目素材
public/assets/images/workflows/         建模流程图的网页优化版本
public/assets/images/collaboration/     合作成果图片的网页优化版本
public/assets/videos/collaboration/     合作成果动态演示视频
public/assets/images/optimized/         机器人模型网页素材
public/assets/videos/                   训练与验证视频
public/assets/og.png                    社交分享封面
```

原始图片和 GIF 保留在 `assets/`，网页使用优化后的 WebP 与 MP4 文件，以兼顾展示质量和加载速度。

## 发布前检查

公开发布前，请确认图片和视频中不包含项目密级信息、内部参数、受限设备信息或其他不适合公开的内容。
