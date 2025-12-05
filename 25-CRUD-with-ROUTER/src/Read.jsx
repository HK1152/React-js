import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Read() {
    const [data,setdata]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then((res)=>{
            // console.log(res.data);
            setdata(res.data)
            console.log(data);
            
        })
    },[])
  return (
    <div className='container d-flex flex-column bg-light justify-content-center align-items-center'>
      <h1>Details of User</h1>
        <div className="m-2">
          <h2>Name:</h2>
          <h4>{data.name}</h4>
        </div>
        <div className="m-2">
          <h2>Username:</h2>
          <h4>{data.username}</h4>
        </div>
        <div className="m-2">
          <h2>Email:</h2>
          <h4>{data.email}</h4>
        </div>
        <div className="m-2">
          <h2>Phone:</h2>
          <h4>{data.phone}</h4>
        </div>
        <Link to='/' className='btn btn-outline-success p-2 m-5'>Back</Link>
    </div>
  )
}

export default Read