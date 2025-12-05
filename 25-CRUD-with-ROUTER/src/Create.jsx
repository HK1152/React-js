import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Create() {
    const navigate=useNavigate()
    const [value, setvalue] = useState(
        {
            id: '',
            name: '',
            username: '',
            email: '',
            phone: ''
        }
    )
    useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then((res)=>{
        let arr = res.data;
        
        let newid = arr.length > 0 
            ? Math.max(...arr.map(item => Number(item.id))) + 1 
            : 1;

        setvalue(prev => ({ ...prev, id: newid.toString() }));
    })
},[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', value)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
    }

    // const setdata = (e) => {
    //     setvalue(prev => (
    //         { ...prev, name: e.target.value }
    //     ))
    // }
    return (
        <div className='d-flex flex-column  vh-100 justify-content-center p-5 container'>
            <h1>Add new User</h1>

            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='row m-3'>
                        <label htmlFor="" className='form-label'>Name :</label>
                        <input type="text" name="" id="" placeholder='enter your name' className='form-control' onChange={(e) => {
                            setvalue(prev => (
                                { ...prev, name: e.target.value }
                            ))
                        }} />
                    </div>
                    <div className='row m-3'>
                        <label htmlFor="" className='form-label'>Username :</label>

                        <input type="text" name="" id="" placeholder='enter your Username' className='form-control' onChange={(e) => {
                            setvalue(prev => (
                                { ...prev, username: e.target.value }
                            ))
                        }} />
                    </div>
                    <div className='row m-3'>
                        <label htmlFor="" className='form-label'>Email :</label>
                        <input type="text" name="" id="" placeholder='enter your Email' className='form-control'onChange={(e) => {
                            setvalue(prev => (
                                { ...prev, email: e.target.value }
                            ))
                        }} />
                    </div>
                    <div className='row m-3'>
                        <label htmlFor="" className='form-label'>Phone :</label>
                        <input type="text" name="" id="" placeholder='enter your Phone' className='form-control' onChange={(e) => {
                            setvalue(prev => (
                                { ...prev, phone: e.target.value }
                            ))
                        }}/>
                    </div>
                    <button className='btn btn-success p-2' type='submit'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Create