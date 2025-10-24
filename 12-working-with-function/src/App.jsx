import { useState } from "react";
import "./app.css";

function App() {
  let h1 = document.querySelector(".h1s");

  const mousemove = (e) => {
    console.log("tu mouse udhar le gaya");
    console.log(e.clientY, e.clientX);
    // h1.innerText = e.clientY + "x" + e.clientX;
  };
  const scrollevent = () => {
    console.log("tu scroll mat kar bhai ");
  };
  return (
    <>
      <div className="mainparant" onWheel={scrollevent}>
        <div className="main">
          <div className="box" onMouseMove={mousemove}>
            <h1 className="h1s"></h1>
          </div>
        </div>

        <div className="page2">.page2</div>
        <div className="page3">.page3</div>
      </div>
    </>
  );
}

export default App;
