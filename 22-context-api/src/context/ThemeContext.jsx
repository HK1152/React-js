import React, { createContext, useContext, useState } from 'react'
export const ThemeDataContext = createContext()

function ThemeContext(props) {
  const [theme, settheme] = useState('light')
  return (
    <ThemeDataContext.Provider value={[theme,settheme]}>
      {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext