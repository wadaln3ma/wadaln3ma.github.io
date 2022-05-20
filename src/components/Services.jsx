import Service from "./Service"

const Services = ()=>{
  return (
    <section className="bg-black flex flex-col items-center my-16 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-poppins font-bold text-white">My Services</h2>
        <h1 className="sub-title before:bg-white after:bg-white">
            what i provide
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex">
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </section>
)}

export default Services
