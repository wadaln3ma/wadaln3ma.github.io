import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import hero from '../img/wallpaper.jpg'

const Hero = ()=>{

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Engineer", 
      "Fullstack Software Developer",
      "Android Developer",
      "Content Creator",
      "...",],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="absolute top-0 w-full h-screen">
      <div 
        className="flex items-center w-full h-screen" 
        style={{ backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat' }}>
      <div className="z-40 text-white max-w-7xl p-8 space-y-2">
        <div className="text-xl">Hello! My name is...</div>
        <div className="text-4xl">Abdulrahman Hamd</div>
        <div className="text-2xl">and I'm an <span ref={el} className="text-purple-700"></span></div>
        <div><a href="/" 
          className="bg-purple-700 px-3 py-2 rounded-xl shadow-xl hover:bg-transparent hover:border border-b border-purple-700 hover:text-purple-700 duration-200">
        Hire me
        </a></div>
      </div>
    </div>
  </section>
)}

export default Hero
