"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import VideoCard from "../VideoCard/VideoCard";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export default function Video() {
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
    );
  } else {
    // Render three video cards in a flex container for smaller screens
    return (
      <div className="flex flex-col mt-20">
        <h1 className="font-bold text-2xl text-center text-theme_gold ">
          Latest From Us
        </h1>
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    );
  }
}
