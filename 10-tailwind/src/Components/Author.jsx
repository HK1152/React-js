import React from "react";

function Author() {
  return (
    <div className=" mx-130 mt-50 bg-gray-50 relative px-20 py-30 rounded-[80px] ">
      <img
        className="rounded-full w-70 h-70 -top-17 right-20 absolute"
        src="https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor.962d41ee.png&w=384&q=75"
        alt=""
      />

      <button className="border rounded-4xl px-3 py-2 text-blue-700 font-medium">
        05 | Author
      </button>
      <h1 className="text-6xl font-bold text-blue-600 mt-5">Mira Lindehoff –</h1>
      <h1 className="text-5xl font-bold">Hey there, I’m the author behind ‘Everything Starts as a Square’.</h1>
      <p className="mt-4 font-serif text-gray-500">I’ve been designing icons professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products. I’m an accomplished conference speaker, and have been teaching icon design workshops every month for the last three years. I’ve worked with designers of all skill levels and honed my way of teaching to really click for anyone who has the itch to start designing their own icons.</p>

    </div>
  );
}

export default Author;
