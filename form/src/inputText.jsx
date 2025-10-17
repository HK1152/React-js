import React, { useState } from 'react'

function InputText() {
    let [inputText, setInputText] = useState("");
  return (
    <>
      <input type="text" placeholder="Enter text" value={inputText} onChange={e => setInputText(e.target.value)} />
      <h1>your value : {inputText}</h1>
    </>
  )
}


export default InputText
