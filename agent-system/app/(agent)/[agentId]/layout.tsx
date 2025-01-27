"use client";

import React from "react";

import { useParams } from "next/navigation";

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  const { agentId } = useParams(); 


  const normalizedAgentId = Array.isArray(agentId) ? agentId[0] : agentId;

  const selectedSection = normalizedAgentId || "default"; 

  return (
    <div className="flex h-screen">
    
    

      
     

      <div className="flex-grow">
       
        {children}
      </div>
    </div>
  );
}
