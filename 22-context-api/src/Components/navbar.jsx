import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import './navbar.css'

function Navbar() {
    const [theme, settheme] = useContext(ThemeDataContext)
    
    
    const changetheme = () => {
        if(theme == 'light') {
            settheme('dark')
        }
        else {
            settheme('light')
        }
        
        
    }
    return (
        <div className={`${theme} w-screen flex justify-between px-10 py-5`}>
            <h1>hk</h1>
            <div>
                <button onClick={changetheme} className={'${theme} px-10 py-2 rounded-4xl'}>{theme}</button>
            </div>
        </div>
    )
}

export default Navbar