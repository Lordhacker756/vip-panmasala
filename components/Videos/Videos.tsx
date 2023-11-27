"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Card from "../Card/Card";
import VideoCard from "../VideoCard/VideoCard";

export default function Video() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          disableOnInteraction: false,
        }}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
