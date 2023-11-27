"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image, { StaticImageData } from "next/image";
type IngredientProps = {
  BackgroundImage: StaticImageData;
  MainImage: StaticImageData;
  MainText: string;
  Color: string;
  id: number;
};
function Ingredient({
  BackgroundImage,
  MainImage,
  MainText,
  id,
  Color,
}: IngredientProps) {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <section
      key={id}
      className="w-full  h-[40vh]  lg:h-[70vh] mx-auto flex items-center px-[10%]"
      data-aos={id % 2 === 0 ? "fade-down-right" : "fade-down-left"}
      data-aos-duration="5000"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`flex  justify-center gap-4 flex-col   w-full ${
          id % 2 !== 0 ? "items-start" : "items-end"
        }`}
      >
        <h1
          className={`text-3xl font-semibold `}
          style={{
            color: Color,
          }}
        >
          {MainText}
        </h1>
        <Image src={MainImage} alt="Betelnut" width={300} height={300} />
      </div>
    </section>
  );
}

export default Ingredient;
