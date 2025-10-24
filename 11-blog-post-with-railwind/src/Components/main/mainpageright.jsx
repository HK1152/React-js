import React from "react";
import Mainpagerightimg from "./mainpagerightimg.jsx";
import './css/rightimg.css'
export default function Mainpageright(props) {
  

  return (
    <div className="w-4/6 h-200 flex flex-nowrap gap-3 overflow-x-auto pr-20   " id="rightimg">
       {props.users.map(
        (e,index)=>{
          return <Mainpagerightimg img={e.link} statu={e.statu} key={index} id={e.id}/>
        }
       )}
        
        
    </div>
  );
}
