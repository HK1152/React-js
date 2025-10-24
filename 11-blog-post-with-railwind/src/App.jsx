import { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import './App.css'
import Section1 from './Components/main/section1.jsx'


function App() {
 const users=[{
  id : 1,
  title : 'a',
  link : 'https://i.pinimg.com/1200x/f6/74/88/f674885bb968be67489dcebaf80dac7a.jpg',
  statu : 'Satisfied'
 },
  {
  id :2,
  title : 'b',
  link :'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  statu : 'Unsatisfied'
 },
  {
  id:3,
  title : 'c',
  link :'https://images.unsplash.com/photo-1676377630356-d8e7acd02ead?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
  statu : 'Neutral'
 },
 ,
 {
  id :4,
  title : 'b',
  link :'https://images.unsplash.com/photo-1749793716288-a5ab5ed3b0e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  statu : 'Unsatisfied'
 }

];

  return (
    <>
      <Section1 users={users} />
    </>
  )
}

export default App
