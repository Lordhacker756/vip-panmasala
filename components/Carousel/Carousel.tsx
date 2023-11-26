"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={"/assets/c1.jpeg"} alt="random" fill={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/assets/c2.jpeg"} alt="random" fill={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/assets/c3.jpeg"} alt="random" fill={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/assets/c4.jpeg"} alt="random" fill={true} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
