import { useInView } from 'react-intersection-observer'

const Skills = ()=>{
  
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <section id="skills" className="my-16" ref={ref}>


      <div className="text-center">
        <h2 className="text-4xl font-poppins font-bold">My Skills</h2>
        <h1 className="sub-title">
            what i know
        </h1>
      </div>

      <div className="flex flex-col mx-auto text-gray-700 space-y-4 px-5 sm:w-[50%]">
        <div>
          <div className="flex justify-between">
            <p>HTML</p>
            <p>100%</p>
          </div>
          <div className={`bars before:w-full ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>CSS</p>
            <p>80%</p>
          </div>
          <div className={`bars before:w-[80%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>JavaScript</p>
            <p>85%</p>
          </div>
          <div className={`bars before:w-[85%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>React.js & Next.js</p>
            <p>90%</p>
          </div>
          <div className={`bars before:w-[90%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>React Native</p>
            <p>80%</p>
          </div>
          <div className={`bars before:w-[80%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Unit Testing</p>
            <p>70%</p>
          </div>
          <div className={`bars before:w-[70%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>tailwindcss</p>
            <p>90%</p>
          </div>
          <div className={`bars before:w-[90%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Node.js</p>
            <p>75%</p>
          </div>
          <div className={`bars before:w-[75%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Laravel</p>
            <p>80%</p>
          </div>
          <div className={`bars before:w-[80%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Native Android Development</p>
            <p>87%</p>
          </div>
          <div className={`bars before:w-[87%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Kotlin</p>
            <p>85%</p>
          </div>
          <div className={`bars before:w-[85%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Java</p>
            <p>80%</p>
          </div>
          <div className={`bars before:w-[80%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Data Science with python</p>
            <p>65%</p>
          </div>
          <div className={`bars before:w-[65%] ${inView && 'before:animate-fill-bar'}`}></div>
        </div>

      </div>
    
    </section>
)}

export default Skills
