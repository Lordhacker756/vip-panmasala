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
  const loaderImage = () => {
    return `https://placehold.co/2000x1900/png`;
  };

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
