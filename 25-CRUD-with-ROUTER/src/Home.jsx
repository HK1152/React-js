import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
function Home() {

    const [data, setdata] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((res) => {
                console.log(res.data);
                setdata(res.data)
                console.log(data);

            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/users/' + id)
        location.reload()
    }

    // let name="janvi"
    // console.log(name.includes('j'));

    const [search, setsearch] = useState('')
    return (
        <div className='d-flex flex-column bg-light vh-100 justify-content-center align-items-center'>
            <h1>Users List</h1>
            <div className='d-flex justify-content-end w-75'>
                <Link to='/Create' className=' btn btn-success'>Add +</Link>
            </div>
            <div className='m-3 bg-white shadow border p-5 container'>
                <form action="">
                    <input type="text" name="" id="" placeholder='search data with name' onChange={(e) => {setsearch(e.target.value) }} className='w-75 p-3 m-4 ' />
                </form>
                <table className='table table-striped border'>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            })

                                .map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td >
                                                <Link to={`/Read/${item.id}`} className='p-2 mx-2 btn'><FaEye /></Link>
                                                <Link to={`/Update/${item.id}`} className='p-2 mx-2 btn'>
                                                    <FaPenToSquare />
                                                </Link>

                                                <button className='p-2 mx-2 btn' onClick={(e) => { handleDelete(item.id) }}><ImBin /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home