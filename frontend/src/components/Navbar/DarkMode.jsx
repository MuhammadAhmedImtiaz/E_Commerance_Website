import React from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
import { useState } from 'react'
const DarkMode = () => {
    const [theme, settheme] = useState("dark")
  return (
    <div className='relative'>
        <img className={`w-12 cursor-pointer absolue right-0 ${theme === dark ?"opacity-0":"opacity-100"}`} 
        src={LightButton} alt="" />
        <img className={`w-12 cursor-pointer `} 
        src={DarkButton} alt="" />
    </div>
  )
}

export default DarkMode