import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  localStorage.setItem('kavy',1152)
  const store= localStorage.getItem('kavy')
  console.log(store);
  // localStorage.removeItem('kavy')
  // localStorage.clear()
  

const obj = [{
  name:'kavy',
  age:19
},
{
  name:'krishna',
  age:19
}];
console.log(obj[0].name);// show to aa ritej thay
// nut localStoragema save karva mate badhu string hovu joiae
localStorage.setItem('obj',JSON.stringify(obj)) // mtlb aa apdu obj ae object formet ma chhe aene string ma to nakhvu padse ne 

const realobj = localStorage.getItem('obj')
console.log(realobj); // to string formate me aaya 

const useobj = JSON.parse(localStorage.getItem('obj'))


console.log(useobj[0].name); // dekh lo bhai




  return (
    <>
    hk
    </>
  )
}

export default App
