import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Update from './Update'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Create' element={<Create/>} />
        <Route path='/Read/:id' element={<Read/>} />
        <Route path='/Update/:id' element={<Update/>} />
      </Routes>
    </Router>
  )
}

export default App
