import React from "react";
import logo from "./logo.svg";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
