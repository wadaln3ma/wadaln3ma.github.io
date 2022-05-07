import { AcademicCapIcon } from '@heroicons/react/solid'

const Service = ()=>{
  return (
    <div 
      className="group flex flex-col items-center bg-gray-800 opacity-90 text-white rounded-lg shadow-lg mx-8 my-4 sm:m-4 p-2 hover:scale-105 hover:bg-purple-700 transition transform ease duration-200">
      <AcademicCapIcon className="w-10 text-purple-700 group-hover:text-white"/>
      <h2 className="text-xl font-semibold py-1">Software Development</h2>
      <p className="px-1">
        fullstack software development javascript, android development, backend, pyyhon,
        any other topices
      </p>
    </div>
)}

export default Service
