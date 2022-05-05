import { useState, useEffect } from 'react'
import { MenuIcon } from '@heroicons/react/solid'

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

  return (
    <nav 
      className={`flex items-center justify-between ${color && 'bg-purple-700'} max-w-7xl sticky top-0 text-white p-4 mx-auto z-50 transition duration-200 ease-in`}>
      <div className="text-2xl"><a href="/">Abdulrahman <span className={`${color ? 'text-white' : 'text-purple-700'} transition duration-200`}>Hamad</span></a></div>
      
      <div className="">
        <ul class="hidden md:inline-flex items-center space-x-2 hidden">
          <li><a href="#home" className="menu-btn">Home</a></li>
          <li><a href="#about" className="menu-btn">About</a></li>
          <li><a href="#services" className="menu-btn">Services</a></li>
          <li><a href="#skills" className="menu-btn">Skills</a></li>
          <li><a href="#projects" className="menu-btn">Projects</a></li>
          <li><a href="#contact" className="menu-btn">Contact</a></li>
        </ul>
        
        <MenuIcon className="text-white w-6 md:hidden"/>
      </ div>
  </nav>
)}

export default Navbar
