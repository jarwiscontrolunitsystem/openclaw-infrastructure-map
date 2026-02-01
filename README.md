# 🗺️ OpenClaw Infrastructure Map

**Interactive real-time visualization of your OpenClaw infrastructure**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![React Flow](https://img.shields.io/badge/React_Flow-11-purple.svg)](https://reactflow.dev/)

---

## 🎯 Vision

A React-based web app that provides two core functions:

### 1. **Infrastructure Map** (Static/Slow Updates)
- Overview of all connected components
- Status indicators: "Is everything green? Is my server running?"
- Shows: Nodes, Channels, Models, Skills, External Services

### 2. **Flow Visualizer** (Real-time)
- Live visualization of data flow
- Animated "dots" showing message paths:  
  `Telegram → Router → Skill (e.g., Web Search) → LLM → Response`
- Visualizes the bot's "chain of thought"

---

## 🛠️ Technology Stack

**Frontend:**
- React + Vite
- React Flow (node-based UI)
- Tailwind CSS

**Backend/Integration:**
- WebSocket connection to OpenClaw Gateway (port 18789)
- Event sniffing for real-time visualization
- OpenClaw Memory for persistent state

---

## 📋 Features (Roadmap)

### Phase 1: MVP ✅
- [ ] Static map with all components
- [ ] Drag & Drop arrangement
- [ ] Color-coded status indicators (green/yellow/red)
- [ ] Click on node → details panel
- [ ] Basic UI with Tailwind CSS

### Phase 2: Live Integration 🔄
- [ ] WebSocket connection to Gateway
- [ ] Real-time status updates
- [ ] Animated data flow visualization
- [ ] Event log sidebar

### Phase 3: Advanced 🚀
- [ ] Chain-of-Thought visualization
- [ ] Replay historical flows
- [ ] Save custom layouts
- [ ] Export as image/PDF
- [ ] Dark/Light mode

---

## 🎨 Node Types

| Type | Examples | Color/Icon |
|------|----------|-----------|
| **Channels** | WhatsApp, Telegram, Discord, iMessage | 💬 Blue |
| **Gateway** | OpenClaw Gateway (central hub) | 🦞 Orange |
| **AI Models** | Claude API, Local LLMs, OpenAI | 🧠 Purple |
| **Skills** | GitHub, Calendar, Browser, Notion | ⚡ Green |
| **External Services** | APIs, Webhooks, Cron Jobs | 🌐 Gray |
| **Memory/Storage** | Workspace, Memory Files | 💾 Yellow |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- OpenClaw Gateway running on port 18789

### Installation

```bash
# Clone the repository
git clone https://github.com/jarwiscontrolunitsystem/openclaw-infrastructure-map.git
cd openclaw-infrastructure-map

# Install dependencies
npm install

# Start dev server
npm run dev
```

**Access:** Open http://localhost:5173

---

## 📖 Documentation

Full project story and technical details: [STORY.md](./STORY.md)

---

## 🤝 Contributing

This project is in early development. Contributions, ideas, and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

MIT License - see [LICENSE](./LICENSE) for details

---

## 🔗 Links

- [OpenClaw Docs](https://docs.openclaw.ai/)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [React Flow](https://reactflow.dev/)

---

## ⚡ Status

**Current Phase:** Setup & Planning  
**Next Milestone:** Phase 1 MVP (Static Map)

---

Built with ❤️ for the OpenClaw community
