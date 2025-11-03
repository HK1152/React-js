import { useState } from 'react'

import './App.css'

function App() {
  const [user,setUser] = useState({name:'Kavy',code:1152})
  const click=()=>{ 
    const newuser = {...user}
    newuser.code = 4462
    
    setUser(newuser)
    console.log(user);
  }


  const [arr, setArr] = useState([10,20,30])

  const changeArr = ()=>{
    const newArr = [...arr]
    newArr.push(40)
    newArr.unshift(5)
    console.log(newArr);
    
    setArr(newArr)
  }

  const [emp, setEmp] = useState({name:'kavya',age:19,sex:'m'})
  const empChange =()=>{
    setEmp({...emp,age:20})
  }

  return (
    <>
    <p>pehli click kar fir dekh</p>
    <h1>{user.name}, {user.code}</h1>
     <button onClick={click}>click kar</button>
     <br /><br />
     <h1>{arr}</h1>
     <button onClick={changeArr}>fir idhar click kar</button>


     <br /><br /><br />
     <h5>ye dusri rit se hai</h5>
     <h1>{emp.name}, {emp.age}, {emp.sex}</h1>
     <button onClick={empChange}>tu click karta ja</button>
    </>
  )
}

export default App
