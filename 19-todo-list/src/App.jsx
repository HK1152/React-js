import { useState } from "react";
import "./App.css";
import Ragistor from "./components/ragistor.jsx";
import Entry from "./components/entry.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Entry />
        <Ragistor />
      </div>
    </>
  );
}

export default App;
