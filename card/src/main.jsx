import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card /> 
    
  </StrictMode>,
)
