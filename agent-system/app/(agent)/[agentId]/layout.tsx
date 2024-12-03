"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { SidebarContent, Sidebar } from "../components/Sidebar";
import { useParams } from "next/navigation";

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  const { agentId } = useParams(); 


  const normalizedAgentId = Array.isArray(agentId) ? agentId[0] : agentId;

  const selectedSection = normalizedAgentId || "default"; 

  return (
    <div className="flex h-screen">
    
      <Sidebar />

      
      <SidebarContent selected={selectedSection} />

      <div className="flex-grow">
        <Navbar agentId={normalizedAgentId} />
        {children}
      </div>
    </div>
  );
}
