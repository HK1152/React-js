import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './form.jsx'
import CheckBox from './checkBox.jsx' 
import InputText from './inputText.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputText />
    <hr />
    <Form />
    <hr />
    <CheckBox />
    <hr />
  </StrictMode>
)
