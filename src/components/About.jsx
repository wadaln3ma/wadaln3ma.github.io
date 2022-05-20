import profile from '../img/profile.jpg'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const About = ()=>{

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Software Developer"],
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
     <section className="">
      <div className="">
        <div className="text-center">
          <h2 className="text-4xl font-bold">About me</h2>
          <h1 className="text-center text-primary overflow-hidden before:h-[2px] after:h-[2px] after:bg-black after:inline-block after:relative after:align-middle after:w-[40px] before:bg-black before:inline-block before:relative before:align-middle before:w-[40px] before:right-2 after:left-2 text-base font-semibold p-4">
            who i am
</h1>
        </div>

        <div className="grid grid-cols-1 justify-center md:grid-cols-3 gap-4 m-4">

          <div className="relative w-[300px] mx-auto my-4 h-[370px] sm:w-[400px] md:w-[300px] rounded-2xl overflow-hidden sm:col-span-1">
            <img src={profile} alt="Profile" className="absolute w-full" />
          </div>

          <div className="sm:col-span-2 mt-4 pb-3">
            <div className="text-xl font-bold">
              <div>I'm a <span ref={el} className="text-primary"></span></div>
            </div>

            <p className="mb-5 pr-4">
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
          I am a full stack developer 
            </p>
            <div><a className="bg-primary text-lg font-bold text-white px-6 py-3 rounded-lg mt-8 hover:bg-transparent hover:ring-[1px] ring-primary hover:text-primary trasition duration-20"
            href="/">
              Download CV
            </a></div>
          </div>
        </div>
      </div>
    </section>
)}

export default About
