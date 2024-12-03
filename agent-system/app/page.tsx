"use client";
import { useRouter } from "next/navigation";
import { Button } from "./components/ui/button";

// Mock data for agents (you can fetch this data from a server)
const agentsData = [
  { id: 1, name: "Marie", language: "English", gender: "Female", retellId: "agent_0dbd80a6069b38da5d757bd16d" },
  { id: 2, name: "Sarah", language: "English", gender: "Female", retellId: "agent_some_other_id" },
  { id: 3, name: "Mark", language: "English", gender: "Male", retellId: "agent_another_id" },
  { id: 4, name: "Sam", language: "English", gender: "Male", retellId: "agent_yet_another_id" },
  { id: 5, name: "Marie", language: "Spanish", gender: "Female", retellId: "agent_spanish_marie" },
  { id: 6, name: "Sarah", language: "Spanish", gender: "Female", retellId: "agent_spanish_sarah" },
  { id: 7, name: "Mark", language: "Spanish", gender: "Male", retellId: "agent_spanish_mark" },
  { id: 8, name: "Sam", language: "Spanish", gender: "Male", retellId: "agent_spanish_sam" },
];

const AppPage = () => {
  const router = useRouter();

  const handleAgentClick = (agentId: number) => {
    router.push(`/${agentId}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-4">
        {agentsData.map((agent) => (
          <Button
            key={agent.id}
            onClick={() => handleAgentClick(agent.id)}
            className="px-6 py-3"
          >
            {agent.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AppPage;