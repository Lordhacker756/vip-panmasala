"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import Card from "../Card/Card";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export default function Cards() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isDesktop) {
    return (
      <Swiper
        slidesPerView={3}
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
    );
  } else {
    // Render cards in a flex container for smaller screens
    return (
      <div className="flex flex-col">
        <Card img={"pdt1"} />
        <Card img={"pdt2"} />
        <Card img={"pdt3"} />
        <Card img={"pdt5"} />
        <Card img={"pdt6"} />
      </div>
    );
  }
}
