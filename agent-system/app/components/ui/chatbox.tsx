// src/components/ChatBox.tsx
import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { ScrollArea } from "./scrollarea";

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-md border border-gray-300 rounded-md shadow-md flex flex-col h-[400px]">
      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 bg-gray-50">
        {messages.length > 0 ? (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 ${
                idx % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <span
                className={`inline-block px-3 py-2 rounded-lg ${
                  idx % 2 === 0
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No messages yet!</p>
        )}
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-300 flex items-center gap-2 bg-white">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSend} disabled={!input.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatBox;
