import React from "react";

function ChangeButton() {
  return (
    <div className="border-b border-gray-300 w-full h-30 flex px-30 ">
      <button className=" h-full w-1/5 flex flex-col justify-center text-center hover:bg-blue-50">
        <p className="text-gray-600 ">01</p>
        <h1 className="font-medium mt-2">Table of contents</h1>
      </button>
      <button className=" h-full w-1/5 flex flex-col justify-center text-center hover:bg-blue-50">
        <p className="text-gray-600 ">02</p>
        <h1 className="font-medium mt-2">Screencasts</h1>
      </button>
      <button className=" h-full w-1/5 flex flex-col justify-center text-center hover:bg-blue-50">
        <p className="text-gray-600 ">03</p>
        <h1 className="font-medium mt-2">Resources</h1>
      </button>
      <button className=" h-full w-1/5 flex flex-col justify-center text-center hover:bg-blue-50">
        <p className="text-gray-600 ">04</p>
        <h1 className="font-medium mt-2">Pricing</h1>
      </button>
      <button className=" h-full w-1/5 flex flex-col justify-center text-center hover:bg-blue-50">
        <p className="text-gray-600 ">05</p>
        <h1 className="font-medium mt-2">Author</h1>

        




      </button>
    </div>
  );
}

export default ChangeButton;
