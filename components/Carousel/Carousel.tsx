"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/assets/c1.jpeg"}
            alt="random"
            fill={true}
            loading={"eager"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/c2.jpeg"}
            alt="random"
            fill={true}
            loading={"eager"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/c3.jpeg"}
            alt="random"
            fill={true}
            loading={"lazy"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/assets/c4.jpeg"}
            alt="random"
            fill={true}
            loading={"lazy"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
