// app/(agent)/components/Sidebar.tsx


import { useState } from "react";

export function Sidebar() {
    const items = ["English", "Spanish", "French"]; 
    const [selectedItem, setSelectedItem] = useState("English");
  
    return (
      <div className="w-60 bg-gray-100 h-full">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedItem(item)}
            className={`block p-4 ${selectedItem === item ? "bg-purple-200" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
  
  export function SidebarContent({ selected }: { selected: string }) {
    return (
      <div className="w-60 bg-gray-200 h-full">
        <h3>{selected}</h3>
      
      </div>
    );
  }
  