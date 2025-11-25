import React from "react";
import { useState } from "react";

function UpPage({ lists = [], setLists }) {
  const [data, setdata] = useState("");

  const doneData = (e) => {
    e.preventDefault();
    const copy = [...(lists || [])]
    const newtime = new Date().toLocaleTimeString();
    copy.unshift({ data, newtime })
    setLists(copy)
    setdata("")
  }

  return (
    <div className="m-3 p-4 rounded-2xl bg-white shadow-sm">
      <form className="flex gap-2 items-center" onSubmit={doneData}>
        <input
          type="text"
          placeholder="Add a todo"
          className="flex-1 p-2 rounded border border-gray-200"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        <button type="submit" className="px-3 py-2 bg-indigo-600 text-white rounded">Add</button>
      </form>
    </div>
  );
}

export default UpPage;
