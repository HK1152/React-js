import React from "react";
// import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-center font-bold">Redux Toolkit Counter App</h1>

      <h2 className="text-3xl font-bold">{count}</h2>

     <div className="button-group flex gap-4 justify-center mt-4">
       <button className="bg-green-700 px-6 py-2 text-white" onClick={() => dispatch(increment())}>+</button>
      <button className="bg-blue-700 px-6 py-2 text-white"  onClick={() => dispatch(decrement())}>-</button>
      <button className="bg-red-700 px-6 py-2 text-white"  onClick={() => dispatch(reset())}>Reset</button>
     </div>
    </div>
  );
}

export default App;