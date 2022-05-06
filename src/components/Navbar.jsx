import { useState, useEffect } from 'react'
import { MenuAlt2Icon, MenuAlt3Icon } from '@heroicons/react/solid'

const NAVBAR_COMMON = "items-center w-full p-2 sticky top-0 text-white mx-auto z-50 transition duration-300 ease-in"
const NAVBAR = "flex justify-between w-full"
const NAVBAR_MENU_COMMON = "items-center text-white"
const NAVBAR_MENU = "flex flex-row space-x-2"
const MOBILE_NAVBAR_MENU = "flex flex-col w-full p-3 space-y-3 text-2xl font-bold"

const Navbar = ()=>{

  const [color, setColor] = useState(true)
  const changeColor = ()=>{
    if(window.scrollY > 75){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeColor)
    return ()=>{
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <nav 
      className={`${NAVBAR_COMMON} ${color && !showNavbar && 'bg-purple-700'} sm:${NAVBAR}`}>

      <div className="relative m-2">

        <div className={`text-2xl ${showNavbar && 'hidden'}`}><a href="/">Abdulrahman <span className={`${color ? 'text-white' : 'text-purple-700'} transition duration-200`}>Hamad</span></a></div>
      

        <div className="md:hidden absolute top-0 right-0" onClick={()=> setShowNavbar(!showNavbar)}>
          {showNavbar ?
            <MenuAlt2Icon className="text-white w-6 hover:scale-110 transition duration-200" />
            :
            <MenuAlt3Icon className="text-white w-6 hover:scale-110 transition duration-200"/>
          }
        </div>
      </div>
      
      <div>

        <ul class={`${NAVBAR_MENU_COMMON} ${showNavbar ? MOBILE_NAVBAR_MENU : 'hidden'} sm:${NAVBAR_MENU}`}>
          <li><a href="#about" className="menu-btn">About</a></li>
          <li><a href="#services" className="menu-btn">Services</a></li>
          <li><a href="#skills" className="menu-btn">Skills</a></li>
          <li><a href="#projects" className="menu-btn">Projects</a></li>
          <li><a href="#contact" className="menu-btn">Contact</a></li>
        </ul>
        
      </ div>
  </nav>
)}

export default Navbar
