import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Card from './card.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card day={ 'day'} post = {'post one'} path = {'src/img/post 1.jpg'}/>
    <Card day={ 'day'} post = {'post two'} path = {'src/img/post 2.jpg'}/>
    <Card day={ 'day'} post = {'post three'} path = {'src/img/post 3.jpg'}/>
  </StrictMode>,
)
