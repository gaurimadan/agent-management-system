// app/(agent)/components/AgentTable.tsx

import React, { useState } from "react";

const agents = Array(50).fill(null).map((_, i) => ({ id: i + 1, name: `Agent ${i + 1}` }));

export function AgentTable() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const paginatedAgents = agents.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {paginatedAgents.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td>{agent.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>Previous</button>
        <button onClick={() => setPage((p) => Math.min(p + 1, Math.ceil(agents.length / itemsPerPage)))}>
          Next
        </button>
      </div>
    </div>
  );
}
