import { useState } from 'react'
import './App.css'
import Hero from './Components/hero'
import Section2 from './Components/section2'
import ChangeButton from './Components/changeBUtton'
import Table from './Components/Table-of-contents'
import TableStar from './Components/table-star'
import Screencasts from './Components/Screencasts'
import Resources from './Components/Resources'
import Pricing from './Components/Pricing'
import Author from './Components/Author'
import Footer from './Components/footer'

function App() {

  return (
    <>
     <Hero />
     <Section2 />
   
     
      <ChangeButton />
    
     <div>
      <Table />
      <TableStar />
     </div>
     
     <Screencasts />
     <Resources />
      <Pricing />
      <Author />
      <Footer />
    </>
  )
}

export default App
