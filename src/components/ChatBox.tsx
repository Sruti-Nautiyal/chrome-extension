import React, { useState } from "react";
import "./chatbox.css";
import Api from "./api";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  console.log(input);
  const generateResponse = async () => {
    try {
      const response = await fetch("https://localhost300.com/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: input }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const tu = data[0].generated_text.tokens;
      console.log("hello", data);
      if (response.status == 200) {
      }
      setOutput(data[0].generated_text);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="main">
      <div className="output">{output}</div>
      <div id="input-box">
        <input
          id="box"
          type="text"
          value={input}
          placeholder="Ask Something"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={generateResponse}>Generate</button>
      </div>
    </div>
  );
};

export default ChatBox;
