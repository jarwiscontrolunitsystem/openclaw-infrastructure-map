# 🗺️ OpenClaw Infrastructure Map

## User Story
**Als** visueller Mensch und OpenClaw-Nutzer  
**möchte ich** eine interaktive Echtzeit-Visualisierung meiner gesamten Infrastruktur  
**damit** ich auf einen Blick sehe: Was läuft wo, welche Verbindungen bestehen, und wie Daten durch mein System fließen.

---

## Vision
Eine React-basierte Web-App, die zwei Kernfunktionen vereint:

### 1. **Infrastruktur-Map** (Statisch/Langsam aktualisiert)
- Übersicht aller verbundenen Komponenten
- Status-Anzeige: "Ist alles grün? Läuft mein Server?"
- Zeigt: Nodes, Channels, Modelle, Skills, externe Services

### 2. **Flow-Visualizer** (Echtzeit)
- Live-Visualisierung des Datenflusses
- Animierte "Punkte" die den Weg einer Nachricht zeigen:  
  `Telegram → Router → Skill (z.B. Websuche) → LLM → Response`
- Visualisiert den "Gedankengang" (Chain of Thought) des Bots

---

## Technologie-Stack

### Frontend
- **React** – UI-Framework
- **React Flow** – Node-basierte UI (Goldstandard für Flow-Visualisierungen)
  - Performant
  - Unterstützt Live-Leitungen die aufleuchten bei Datenfluss
  - Einfache React-Integration
- **Tailwind CSS** – Styling
- **Alternative**: Cytoscape.js (organischer/Map-artiger Stil, aber komplexer)

### Backend/Integration
- **WebSocket-Verbindung** zum OpenClaw Gateway (Port 18789)
- **Event Sniffing** für Echtzeit-Visualisierung
- **OpenClaw Memory** für persistenten State

---

## Node-Typen

| Node-Typ | Beispiele | Icon/Farbe |
|----------|-----------|------------|
| **Channels** | WhatsApp, Telegram, Discord, iMessage, Slack | 💬 Blau |
| **Gateway** | OpenClaw Gateway (Zentrum) | 🦞 Orange |
| **AI Models** | Claude API, lokale LLMs, OpenAI | 🧠 Lila |
| **Skills** | GitHub, Calendar, Browser, Notion | ⚡ Grün |
| **External Services** | APIs, Webhooks, Cron-Jobs | 🌐 Grau |
| **Memory/Storage** | Workspace, Memory-Files | 💾 Gelb |

---

## Features (3 Phasen)

### Phase 1: MVP ✅
- [ ] Statische Map mit allen Komponenten
- [ ] Drag & Drop zum Arrangieren
- [ ] Farbcodierte Status-Anzeige (grün/gelb/rot)
- [ ] Klick auf Node → Details-Panel
- [ ] Basic UI mit Tailwind CSS

**Acceptance Criteria:**
- Map zeigt alle 6 Node-Typen
- Status-Farben ändern sich basierend auf Erreichbarkeit
- Nodes können frei positioniert werden
- Details-Panel zeigt relevante Infos (Port, Status, Uptime)

### Phase 2: Live-Integration 🔄
- [ ] WebSocket-Verbindung zum Gateway
- [ ] Echtzeit-Status-Updates
- [ ] Animierte Datenfluss-Visualisierung
- [ ] Event-Log Sidebar

**Acceptance Criteria:**
- WebSocket bleibt stabil verbunden
- Nachrichtenfluss wird animiert (z.B. Telegram → Gateway → Claude)
- Events werden in Sidebar geloggt
- Keine Performance-Einbußen bei >10 gleichzeitigen Events

### Phase 3: Advanced 🚀
- [ ] Chain-of-Thought Visualisierung
- [ ] Historische Flows abspielen
- [ ] Custom Layouts speichern
- [ ] Export als Bild/PDF
- [ ] Dark/Light Mode

**Acceptance Criteria:**
- User kann vergangene Message-Flows "abspielen" (Timeline-Slider)
- Layout-Positionen werden gespeichert (LocalStorage oder OpenClaw Memory)
- Export in PNG/SVG funktioniert
- Theme-Switch ohne Reload

---

## Technische Herausforderungen

| Challenge | Lösung |
|-----------|--------|
| **API-Stabilität** | OpenClaw entwickelt sich schnell weiter | Flexible Architektur mit Versioning |
| **Event-Parsing** | Gateway-Events korrekt interpretieren | Event-Schema dokumentieren + Tests |
| **Performance** | Viele Animationen gleichzeitig | React Flow optimiert + Virtual Rendering |
| **Konfiguration** | Map muss sich an unterschiedliche Setups anpassen | Auto-Discovery via Gateway API |

---

## Architektur-Konzept

```
┌─────────────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE MAP                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│   │ WhatsApp│  │Telegram │  │ Discord │   [Channels]     │
│   └────┬────┘  └────┬────┘  └────┬────┘                  │
│        │            │            │                         │
│        └────────────┼────────────┘                         │
│                     ▼                                       │
│             ┌───────────────┐                              │
│             │   GATEWAY     │ ← WebSocket :18789           │
│             │   (Router)    │                              │
│             └───────┬───────┘                              │
│                     │                                       │
│     ┌───────────────┼───────────────┐                     │
│     ▼               ▼               ▼                      │
│ ┌─────────┐   ┌─────────┐   ┌─────────┐                  │
│ │ Claude  │   │ Local   │   │ OpenAI  │   [AI Models]    │
│ │  API    │   │  LLM    │   │  API    │                  │
│ └─────────┘   └─────────┘   └─────────┘                  │
│                     │                                       │
│     ┌───────────────┼───────────────┐                     │
│     ▼               ▼               ▼                      │
│ ┌─────────┐   ┌─────────┐   ┌─────────┐                  │
│ │ GitHub  │   │Calendar │   │ Browser │   [Skills]       │
│ │ Skill   │   │ Skill   │   │ Skill   │                  │
│ └─────────┘   └─────────┘   └─────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Potenzial

- **Community-Interest**: OpenClaw hat 100k+ GitHub Stars, Ökosystem ist jung
- **Lücke im Markt**: Kein vergleichbares Visualisierungstool existiert
- **Mögliche Formate**:
  - Standalone Web-App
  - OpenClaw Skill
  - Dashboard-Plugin für Port 18789

---

## Nächste Schritte (Sprint 1)

1. **Recherche** (2h)
   - Gateway WebSocket API dokumentieren
   - React Flow Tutorials durcharbeiten
   - Event-Schema analysieren

2. **Setup** (1h)
   - React + Vite Projekt aufsetzen
   - Tailwind CSS konfigurieren
   - React Flow installieren

3. **Prototyp** (4h)
   - Minimale React Flow Map mit hardcoded Nodes
   - 6 Node-Typen (je 1 Beispiel)
   - Basic Styling

4. **Integration** (3h)
   - WebSocket-Verbindung zu localhost:18789
   - Status-Polling implementieren
   - Erste Live-Updates

**Geschätzte Zeit Phase 1:** 10-15 Stunden

---

## Referenzen

- OpenClaw Docs: https://docs.openclaw.ai/
- OpenClaw GitHub: https://github.com/openclaw/openclaw
- React Flow: https://reactflow.dev/
- Gateway Architecture: https://docs.openclaw.ai/architecture
- Tailscale IP (local): http://100.84.41.53:18789

---

## Success Metrics

- [ ] Map zeigt alle relevanten Komponenten (>90% Coverage)
- [ ] Echtzeit-Updates mit <500ms Latenz
- [ ] Stabil über 24h Uptime
- [ ] Positive Community-Reaktion (wenn geshared)
