import wall from '../../img/wallpaper.jpg'
import { FaGithub } from 'react-icons/fa'

const PortfolioItem = ({ item })=>{
  const { title, description, link, image } = item
  return (
    <div className="flex flex-col items-center  group w-full p-5 text-white hover:bg-purple-600 transition duration-200">

      <img alt="" src={wall} className="w-full rounded-full border-[3px] border-purple-600 group-hover:border-white transition duration-200" />

      <h2 className="font-bold text-lg pt-5">{title}</h2>

      <h3 className="py-3">
        { description }
      </h3>
      
      <FaGithub />
      
    </div>
)}

export default PortfolioItem
