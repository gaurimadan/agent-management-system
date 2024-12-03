// app/(agent)/components/Navbar.tsx

import React, { useState } from "react";

export function Navbar({ agentId }: { agentId: string | undefined }) {
  const [agentName, setAgentName] = useState(agentId || "Agent Name");
  return (
    <div className="flex justify-between items-center bg-purple-600 text-black px-4 py-2">
      
      <input
        type="text"
        value={agentName}
        onChange={(e) => setAgentName(e.target.value)}
        className="bg-transparent text-xl border-b-2 border-white outline-none"
      />
      <div className="flex gap-4">
      
        <button className="px-4 py-2 bg-purple-200 rounded">Test Call</button>
        
        <button className="px-4 py-2 bg-purple-200 rounded">Test Chat</button>
      </div>
    </div>
  );
}
