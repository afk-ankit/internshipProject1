import React, { useRef, useState } from 'react'
import { useTheme } from '../Store/ThemeProvider'
import '../styles/ThemeSwitcher.css'





function ThemeSwitcher() {
    const [theme, dispatch] = useTheme()


    const switchRef = useRef()
    const handleStyle = () => {
        dispatch()
        console.log(switchRef.current.classList.toggle('on'))
    }

    return (
        <div className='ThemeSwitcher' onClick={handleStyle} >
            <h3 className='themeSwitcher__item'>Dark</h3>
            <h3 className='themeSwitcher__item' style={{
                color: "white"
            }}>Light</h3>
            <div className='ThemeSwitcher__button' ref={switchRef}>

            </div>
        </div >
    )
}

export default ThemeSwitcher    