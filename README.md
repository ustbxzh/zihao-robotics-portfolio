# Zihao Xing | Robotics Systems Portfolio

A one-page robotics portfolio focused on heterogeneous robot modeling,
transfer-docking reinforcement learning, multi-robot simulation, and ROS2
digital twins.

## Portfolio flow

1. Robotics systems overview
2. Transfer-docking case: model, training, checkpoint comparison, validation
3. Six-platform robot fleet
4. ROS2 digital-twin platform
5. Aircraft assembly digital twin
6. Research profile and capabilities

## Local development

Requirements: Node.js 22.13 or later.

```bash
npm install
npm run dev
```

For a lightweight static preview without installing dependencies:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Production build

```bash
npm run build
```

The build uses Vinext, the Cloudflare Vite integration, and the OpenAI Sites
packaging plugin. Hosting bindings live in `.openai/hosting.json`.

## Source layout

```text
index.html                     Main content and metadata
css/style.css                  Responsive visual system
js/main.js                     Reveal motion and accessible video modal
assets/images/optimized/       Web-ready versions of the latest robot models
assets/videos/                 Training and validation videos
assets/posters/                Video poster frames
assets/og.png                  Social sharing card
app/route.ts                   Hosted HTML response
public/                        Selected static deployment assets
```

## Featured new media

- `transfer-docking-robot.webp`
- `lifting-robot.webp`
- `catch-robot.webp`
- `transfer-robot.webp`
- `process-robot.webp`
- `perception-robot.webp`
- `transfer-docking-training.mp4`

The original source images and the original Chinese-named training video are
preserved in `assets/`. Deployment-facing copies use portable ASCII filenames.

## Publishing review

Before making the portfolio public, review every image and video for project
names, company identifiers, facility details, internal parameters, or other
restricted information.
