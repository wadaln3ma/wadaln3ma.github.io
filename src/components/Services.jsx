import Service from "./Service"

const Services = ()=>{
  return (
    <section className="bg-black flex flex-col items-center my-16 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">My Services</h2>
        <h1 class="text-center text-purple-500 overflow-hidden before:h-[3px] after:h-[3px] after:bg-white after:inline-block after:relative after:align-middle after:w-1/6 before:bg-white before:inline-block before:relative before:align-middle before:w-1/6 before:right-2 after:left-2 text-base font-semibold p-4">
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
