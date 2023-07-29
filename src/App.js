import React from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="container">
      <h1>Tooltip Example</h1>
      <Tooltip position="top" content="This is the tooltip content.">
        <button className="btn">Hover me</button>
      </Tooltip>
    </div>
  );
}

export default App;
