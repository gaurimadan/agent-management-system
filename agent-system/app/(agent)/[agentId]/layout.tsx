"use client";

import React from "react";

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
    
    

      
     

      <div className="flex-grow">
       
        {children}
      </div>
    </div>
  );
}
