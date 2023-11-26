"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import Card from "../Card/Card";

export default function Cards() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <Card img={"pdt1"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={"pdt2"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={"pdt3"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={"pdt5"} />
        </SwiperSlide>
        <SwiperSlide>
          <Card img={"pdt6"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
