import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

// api search : JSON Placeholder
async function data() {
  const use = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(use);
  
} 
const data2 = async ()=>{
  const uses =await fetch('https://jsonplaceholder.typicode.com/todos/2')
  console.log(uses);
  const usedata = await uses.json();
  console.log(usedata);
}

// cmd package run karo
const data3 = async ()=>{
  const usex =await axios.get('https://jsonplaceholder.typicode.com/todos/3')
  console.log(usex);
  console.log(usex.data);
}


const data4 = async ()=>{
  const {data} =await axios.get('https://jsonplaceholder.typicode.com/todos/4')
  console.log(data);

}



  return (
    <>
 <button onClick={data}>click karo</button>
 <button onClick={data2}>firse kar</button>
 <button onClick={data3}>axios</button>
 <button onClick={data4}> Destructure axios</button>
    </>
  )
}

export default App
