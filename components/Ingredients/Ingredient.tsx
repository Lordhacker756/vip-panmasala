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
      className="w-full  h-[60vh]  lg:h-[70vh] mx-auto flex md:flex-row flex-col items-center justify-center px-[10%]"
      data-aos={id % 2 === 0 ? "fade-down-right" : "fade-down-left"}
      data-aos-duration="5000"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`flex  justify-between gap-4 flex-wrap    w-full`}>
        <Image
          src={MainImage}
          alt="Betelnut"
          width={300}
          height={300}
          className={id % 2 !== 0 ? `order-2` : "order-1"}
        />
        <div
          className={`flex flex-col items-start justify-center  ${
            id % 2 !== 0 ? "order-1" : "order-2"
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
          <p className=" text-gray-200 md:max-w-[30vw] w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dicta
            quidem veritatis provident. Minus nihil exercitationem ducimus
            dolorem adipisci expedita fuga, incidunt quae! Id, veritatis
            corrupti asperiores illum enim suscipit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ingredient;
