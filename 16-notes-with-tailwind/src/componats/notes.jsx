import React, { useState } from "react";

export default function Notes() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [store, setStore] = useState([]);

  let subaction = (e) => {
    e.preventDefault();
    const copyStore = [...store];
    copyStore.push({ title, detail });
    setStore(copyStore);
    

    setDetail("");
    setTitle("");

  };

   const deleteNote = (idx) => {
    const copyStore = [...store];

    copyStore.splice(idx, 1)

    setStore(copyStore)
  }
  return (
    <>
      <div className="main bg-black w-screen h-screen flex ">
        <div className="left w-2/5 bg-black text-white flex flex-col ">
          <h1 className="font-bold text-5xl  p-12">Write note</h1>

          <form
            onSubmit={(e) => {
              subaction(e);
            }}
            className="flex gap-4 px-12 py-0 justify-between flex-col items-start"
          >
            <input
              type="text"
              value={title}
              placeholder="Enter note title"
              onChange={(e) => setTitle(e.target.value)}
              className="px-5 py-2 border-2 border-gray-500 outline-none rounded  w-full"
            />

            <textarea
              placeholder="Enter details"
              value={detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
              className="px-5 h-32 py-2 border-2 border-gray-500 outline-none rounded  w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-white text-black rounded-xl px-5 py-3 font-medium hover:bg-gray-300 transition"
            >
              Done
            </button>
          </form>
        </div>

        <div className="right w-3/5 bg-slate-950 p-10 flex flex-wrap flex-col gap-5 h-auto overflow-y-scroll text-white">
         <h1 className="font-bold text-5xl mb-5">Selected Notes</h1>
          {store.map(function (e, index) {

            return <div key={index} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{e.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{e.detail}</p>
              </div>
              <button onClick={() => {
                deleteNote(index)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </>
  );
}
