import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./styles.css"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper"
import PortfolioItem from "./PortfolioItem"
import { data } from "./data"

const Portfolio = ()=>{
  return (
    <section className="w-full bg-black py-20" id="projects">

      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">My Portfolio</h2>
        <h1 class="text-center text-purple-500 overflow-hidden before:h-[3px] after:h-[3px] after:bg-white after:inline-block after:relative after:align-middle after:w-1/6 before:bg-white before:inline-block before:relative before:align-middle before:w-1/6 before:right-2 after:left-2 text-base font-semibold p-4">
            some projects
        </h1>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ dynamicBullets : true }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={ false}
        className="mySwiper"
      >
        {data.map(item =>(
          <SwiperSlide>
            <PortfolioItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
)}

export default Portfolio
