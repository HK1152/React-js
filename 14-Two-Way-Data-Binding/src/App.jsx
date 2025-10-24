import { useState } from "react";

function App() {
  const sub = (e) => {
    e.preventDefault();
    console.log('Submit by ',Title);
    setTitle('')
  };
  const [Title, setTitle] = useState("");

  return (
    <>
      <form action="">
        <input
          type="text"
          value={Title}
         onChange={(e)=>{setTitle(e.target.value)}}
        />
        <button type="submit" onClick={sub}>
          click
        </button>
      </form>
      {/* <h1>value: {value}</h1> */}
    </>
  );
}

export default App;
