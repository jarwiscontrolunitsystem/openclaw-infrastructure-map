import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';

// Initial nodes - representing OpenClaw infrastructure
const initialNodes = [
  // Gateway (Center)
  {
    id: 'gateway',
    type: 'default',
    data: { label: '🦞 Gateway\nPort 18789' },
    position: { x: 400, y: 250 },
    style: {
      background: '#ff6b35',
      color: 'white',
      border: '2px solid #d45429',
      borderRadius: '10px',
      padding: '20px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  },
  
  // Channels (Top)
  {
    id: 'telegram',
    data: { label: '💬 Telegram' },
    position: { x: 200, y: 50 },
    style: {
      background: '#0088cc',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  {
    id: 'whatsapp',
    data: { label: '💬 WhatsApp' },
    position: { x: 400, y: 50 },
    style: {
      background: '#25D366',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  {
    id: 'discord',
    data: { label: '💬 Discord' },
    position: { x: 600, y: 50 },
    style: {
      background: '#5865F2',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  
  // AI Models (Left)
  {
    id: 'claude',
    data: { label: '🧠 Claude API' },
    position: { x: 50, y: 250 },
    style: {
      background: '#7C3AED',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  {
    id: 'qwen',
    data: { label: '🧠 Qwen Local' },
    position: { x: 50, y: 350 },
    style: {
      background: '#9333EA',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  
  // Skills (Right)
  {
    id: 'browser',
    data: { label: '⚡ Browser' },
    position: { x: 750, y: 200 },
    style: {
      background: '#10B981',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  {
    id: 'calendar',
    data: { label: '⚡ Calendar' },
    position: { x: 750, y: 300 },
    style: {
      background: '#059669',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  {
    id: 'github',
    data: { label: '⚡ GitHub' },
    position: { x: 750, y: 400 },
    style: {
      background: '#047857',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
    },
  },
  
  // Memory (Bottom)
  {
    id: 'memory',
    data: { label: '💾 Memory\n& Workspace' },
    position: { x: 400, y: 450 },
    style: {
      background: '#F59E0B',
      color: 'white',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
    },
  },
];

// Initial edges - connections between components
const initialEdges = [
  // Channels → Gateway
  { id: 'e1-1', source: 'telegram', target: 'gateway', animated: true },
  { id: 'e1-2', source: 'whatsapp', target: 'gateway', animated: true },
  { id: 'e1-3', source: 'discord', target: 'gateway', animated: true },
  
  // Gateway → AI Models
  { id: 'e2-1', source: 'gateway', target: 'claude', animated: true },
  { id: 'e2-2', source: 'gateway', target: 'qwen', animated: true },
  
  // Gateway → Skills
  { id: 'e3-1', source: 'gateway', target: 'browser', animated: true },
  { id: 'e3-2', source: 'gateway', target: 'calendar', animated: true },
  { id: 'e3-3', source: 'gateway', target: 'github', animated: true },
  
  // Gateway → Memory
  { id: 'e4-1', source: 'gateway', target: 'memory', animated: true },
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-full bg-gray-900">
      <div className="absolute top-4 left-4 z-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">🗺️ OpenClaw Infrastructure Map</h1>
        <p className="text-sm text-gray-400">Interactive real-time visualization</p>
      </div>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default App;
