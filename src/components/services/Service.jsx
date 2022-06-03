
const Service = ({ title, desc, Icon })=>{
  return (
    <div 
      className="group flex flex-col items-center bg-gray-800 opacity-90 text-white rounded-lg shadow-lg mx-8 my-4 sm:m-4 p-2 hover:scale-105 hover:bg-primary transition transform ease duration-200">
      <Icon className="w-10 text-primary group-hover:text-white"/>
      <h2 className="text-xl font-semibold py-1 whitespace-nowrap">{title}</h2>
      <p className="text-gray-400 px-3 indent-3 text-left text-center">
        {desc}
      </p>
    </div>
)}

export default Service
