// app/(agent)/components/MainSection.tsx

import { useState, useEffect } from "react";

export function MainSection() {
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Autosaving...", { name, prompt });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [name, prompt]);

  return (
    <div className="p-6">
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border p-2"
      />
      <label>Prompt</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="block w-full border p-2 mt-4"
      />
    </div>
  );
}
