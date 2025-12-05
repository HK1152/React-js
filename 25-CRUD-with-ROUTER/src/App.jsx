import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Delete from './Delete'
import Read from './Read'
import Update from './Update'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Create' element={<Create/>}></Route>
              <Route path='/Delete' element={<Delete/>}></Route>
              <Route path='/Read/:id' element={<Read/>}></Route>
              <Route path='/Update/:id' element={<Update/>}></Route>

          </Routes>
      </Router>


    </>
  )
}

export default App
