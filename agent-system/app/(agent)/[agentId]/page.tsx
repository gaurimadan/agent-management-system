// src/app/page.tsx

"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Table } from "../../components/ui/table";
import { ScrollArea } from "../../components/ui/scrollarea";
import ChatBox from "../../components/ui/chatbox"; // ChatBox component created above

// Mock data for agents (you can fetch this data from a server)
const agentsData = [
  { id: 1, name: "Marie", language: "English", gender: "Female" },
  { id: 2, name: "Sarah", language: "English", gender: "Female" },
  { id: 3, name: "Mark", language: "English", gender: "Male" },
  { id: 4, name: "Sam", language: "English", gender: "Male" },
  { id: 5, name: "Marie", language: "Spanish", gender: "Female" },
  { id: 6, name: "Sarah", language: "Spanish", gender: "Female" },
  { id: 7, name: "Mark", language: "Spanish", gender: "Male" },
  { id: 8, name: "Sam", language: "Spanish", gender: "Male" },
];

const Page = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>("Marie");
  const [prompt, setPrompt] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 4;


  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = agentsData.slice(indexOfFirstAgent, indexOfLastAgent);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

 
  const handleAgentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAgent(e.target.value);
  };

  return (
    <div className="flex h-screen">
   
      <div className="w-1/4 bg-purple-200 text-black p-4">
        <h2 className="text-xl font-semibold mb-4">Select Voice</h2>
        <div>
          <Input
            value={selectedAgent}
            onChange={handleAgentNameChange}
            className="mb-4"
            placeholder="Enter Agent Name"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">English</h3>
          {agentsData
            .filter((agent) => agent.language === "English")
            .map((agent) => (
              <Button
                key={agent.id}
                variant={selectedAgent === agent.name ? "default" : "outline"}
                onClick={() => setSelectedAgent(agent.name)}
              >
                {agent.name}
              </Button>
            ))}
          <h3 className="text-lg">Spanish</h3>
          {agentsData
            .filter((agent) => agent.language === "Spanish")
            .map((agent) => (
              <Button
                key={agent.id}
                variant={selectedAgent === agent.name ? "default" : "outline"}
                onClick={() => setSelectedAgent(agent.name)}
              >
                {agent.name}
              </Button>
            ))}
        </div>
      </div>

      <div className="w-3/4 p-8 flex flex-col gap-6">
       
        <div className="flex justify-between items-center">
          <Input
            value={selectedAgent}
            onChange={handleAgentNameChange}
            className="w-1/4"
            placeholder="Agent Name"
          />
          <div className="flex items-center gap-4">
            <Button variant="outline">Test Call</Button>
            <Button variant="outline">Test Chat</Button>
          </div>
        </div>

       
        <div className="border rounded-md">
          <h3 className="text-lg font-semibold p-4">Agent List</h3>
          <ScrollArea className="max-h-60 p-4">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Language</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {currentAgents.map((agent) => (
                  <tr key={agent.id}>
                    <td>{agent.name}</td>
                    <td>{agent.language}</td>
                    <td>{agent.gender}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollArea>

         
          <div className="flex justify-center p-4">
            <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </Button>
            <span className="mx-2">{currentPage}</span>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(agentsData.length / agentsPerPage)}
            >
              Next
            </Button>
          </div>
        </div>

    
        <div className="flex gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Prompt</h3>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="w-full h-40 p-4 border rounded-md"
            />
          </div>

          <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-4">Test Chat</h3>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
