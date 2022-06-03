import { FaGithub } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'

const PortfolioItem = ({ item })=>{
  const { title, description, link, github, image } = item
  return (
    <div className="flex flex-col items-center  group w-full p-5 text-white hover:bg-primary transition duration-200 hover:scale-110">

      <img alt="" src={image} className="w-full object-cover rounded-full border-[3px] border-primary group-hover:border-white transition duration-200" />

      <h2 className="font-bold text-lg pt-5">{title}</h2>

      <h3 className="py-3">
        { description }
      </h3>
      
      <div className="flex items-center content-center space-x-4">
        <a href={github} rel="noreferrer" target="_blank"><FaGithub /></a>
        <a href={link} rel="noreferrer" target="_blank"><FaGlobe /></a>
      </div>
      
    </div>
)}

export default PortfolioItem
