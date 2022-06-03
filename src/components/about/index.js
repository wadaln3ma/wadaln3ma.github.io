import { profile } from '../../assets/img'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { useInView } from 'react-intersection-observer'
import cv from '../../assets/CV_2022.pdf'

const About = ()=>{

  const { ref, inView, entry } = useInView({ 
    threshold: 0,
  })

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
    <section id="about" ref={ref}>
      <div className="h-screen"></div>
       <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold font-poppins">About me</h2>
          <h1 className="text-center text-primary overflow-hidden before:h-[2px] after:h-[2px] after:bg-black after:inline-block after:relative after:align-middle after:w-[40px] before:bg-black before:inline-block before:relative before:align-middle before:w-[40px] before:right-2 after:left-2 text-base font-semibold p-4">
            who i am
</h1>
        </div>

        <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-3 gap-4 m-4">

          <div className="relative w-[300px] mx-auto mr-full my-4 h-[370px] sm:w-[400px] md:w-[300px] rounded-2xl overflow-hidden col-span-1">
            <img src={profile} alt="Profile" className={`absolute w-full ${inView && 'animate-fade-in-right'}`} />
          </div>

          <div className="relative sm:col-span-2 h-[500px] sm:h-[450px]">
            <div className="absolute top-0 mt-4 pb-3 sm:ml-16 lg:ml-0">
            <div className="text-xl font-bold">
              <div>I'm a <span ref={el} className="text-primary"></span></div>
            </div>

              <p className="mb-5 pr-4 lg:pr-16 indent-10 text-justify text-gray-500">
              Coming from an Engineering background,  with strong Math and problem solving skills with interest in business and a passion towards strategy. My area of focus and interest varies from engineering,  programming to AI and machine learning.
I have 4+ yrs of experience in  software development using Java, Kotlin, Javascript, Python, PHP and MySQL. I used those languages for :

              <ul className="list-[upper-roman] marker:text-primary list-inside">
  <li>Android Development using Kotlin and Java</li>
  <li>Full stack web development using HTML, CSS, Tailwindcss, JS, React and Next.js for fronted, Node.js and Laravel for backend, SQL and MongoDB for Database management and manipulation.</li>
  <li>Data Analysis using Python, Numpy, Pandas, Scipy and Matplotlib.</li>
</ul>

            </p>

            <div><a className="bg-primary text-lg font-bold text-white px-6 py-3 rounded-lg mt-8 hover:bg-transparent hover:ring-[1px] ring-primary hover:text-primary trasition duration-20"
            href={cv} download>
              Download CV
            </a></div>
          </div>
          </div>
        </div>
      </div>
    </section>
)}

export default About
