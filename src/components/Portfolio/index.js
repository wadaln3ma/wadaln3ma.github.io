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
        <h1 className="sub-title before:bg-white after:bg-white">
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
        {data.map((item, i) =>(
          <SwiperSlide key={i}>
            <PortfolioItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
)}

export default Portfolio
