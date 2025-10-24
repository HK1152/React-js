import React from "react";
import { ArrowRight } from 'lucide-react';




export default function Mainpagerightimg(props) {
 
  return (
    <div className="w-1/3 h-full shrink-0 relative  overflow-hidden rounded-4xl" >
      <img
        className="w-full h-full object-fit-cover  "
        src={props.img}
        
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full  p-6 opacity-80 hover:opacity-100 hover:transition-opacity duration-300 flex justify-between flex-col ">
        <h2 className="bg-white  w-14 h-14 rounded-full flex justify-center items-center text-2xl font-bold">{props.id}</h2>
        <div className="">
          <p className="text-white text-xl leading-normal mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            sequi? Earum quam non voluptatum maxime iusto est quibusdam omnis
            minima.
          </p>
          <div className="flex justify-between mt-5">
            <button className="text-white bg-blue-600 rounded-full px-8 py-2 font-semibold text-lg">{props.statu}</button>
            <button className="text-white bg-blue-600 rounded-full px-3 py-2 font-semibold text-lg"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
