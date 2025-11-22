import React from "react";

function Resources() {
  return (
    <div>
      <div className="lg:px-130 pt-20 mt-10">
        <button className="border rounded-4xl px-3 py-2 text-blue-700 font-medium">
          03 | Resources
        </button>
        <h1 className="mt-5 text-3xl font-bold">
          Tools and resources you can use to get started even faster and
          progress even further.
        </h1>
        <p className="mt-3 text-xl">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
        </p>
      </div>
      <div className="flex  px-70 mt-20">
        <div className="w-1/3 px-10  border-r border-r-gray-200">
          <div className="flex justify-center items-center rounded-2xl bg-radial from-gray-700 from-10% to-black  h-40">
            <img
              src="https://primer.tailwindui.com/_next/static/media/figma.0d78130b.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center px-5 text-center gap-3">
            <h1 className="mt-10 font-medium">Figma icon templates</h1>
            <h1 className="text-[15px] text-gray-600">
              Perfectly structured templates for quickly designing new icons at
              dozens of common sizes.
            </h1>
          </div>
        </div>
        
        <div className="w-1/3 px-10  border-r border-r-gray-200">
          <div className="flex justify-center items-center rounded-2xl bg-[url(https://primer.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabstract-background.807725df.png&w=384&q=75)] object-cover bg- h-40">
            <img
              src="https://primer.tailwindui.com/_next/static/media/video-player.e8496657.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center px-5 text-center gap-3">
            <h1 className="mt-10 font-medium">Weekly icon teardowns</h1>
            <h1 className="text-[15px] text-gray-600">
              Weekly videos where we dissect and recreate beautiful icons we find on the web.
            </h1>
          </div>
        </div>

        <div className="w-1/3 px-10 ">
          <div className="flex justify-center items-center rounded-2xl bg-blue-600  h-40">
            <img
              src="https://primer.tailwindui.com/_next/static/media/discord.ad5bcc98.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center px-5 text-center gap-3">
            <h1 className="mt-10 font-medium">Community of icon designers</h1>
            <h1 className="text-[15px] text-gray-600">
             A private Discord server where you can get help and give feedback on each others' work.
            </h1>
          </div>
        </div>
      </div>


      <div className="w-full h-100 bg-[url(./src/img/page3.png)] object-cover flex justify-center items-center  text-white px-70 mt-20">
        <div className="w-1/2 ">
            <h1 className="text-7xl font-bold w-150 mb-8">Get the free <br /> sample chapters</h1>
        <p className="text-xl text-gray-300 w-150">Enter your email address and I’ll send you a sample from the book containing two of my favorite chapters.</p>
        </div>

        <div className="mt-20">
            <p className="font-medium">Get two free chapters straight to your inbox →</p>   
            <div className="border-2 border-gray-200 rounded-lg flex justify-between p-2 mt-5">
                <input type="email" name="" id="" placeholder="Enter Email..."/>
                <button className="bg-white rounded text-blue-600 font-bold px-2 py-2">Get free chapters</button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Resources;
