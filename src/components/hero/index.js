import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import hero from '../../assets/img/wallpaper.jpg'
import { pconfig } from './particles-config.js'

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const URL = 'https://www.upwork.com/freelancers/~01cc3de46d40113f24'

const Hero = ()=>{
  
  const particlesInit = async (main) => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  
  const particlesLoaded = (container) => {
    console.log(container);
  }
  
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Engineer", 
      "Fullstack Software Developer",
      "Android Developer",
      "Designer",
      "Content Creator",
      ],
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
        className="flex items-center w-full h-screen z-30" 
        style={{ backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat' }}>
      <Particles
          id="tsparticles"
          className="w-ful h-screen"
          init={particlesInit}
          loaded={particlesLoaded}
          options={pconfig} />
      
        <div className="z-40 text-white p-8 space-y-2 lg:px-16">
        <div className="text-2xl">Hello! My name is...</div>
        <div className="text-4xl lg:text-6xl font-bold font-poppins">Abdulrahman Hamad</div>
        <div className="text-3xl">and I'm <span ref={el} className="text-primary"></span></div>
        <div><a href={URL} target="_blank" rel="noreferrer"
          className="bg-primary text-xl mt-2 px-3 py-2 rounded-xl shadow-xl hover:bg-transparent hover:border border-b border-primary hover:text-primary duration-200">
        Hire me
        </a></div>
      </div>
      <div className="top-0 left-0 right-0 bottom-0 w-full h-screen z-10">  
      </div>
    </div>
  </section>
)}

export default Hero
