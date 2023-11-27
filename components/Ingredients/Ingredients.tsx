"use client";
import { IngredientsData } from "@/app/constants/IngredientsData";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Ingredient from "./Ingredient";
import SandleWood from "../../public/assets/SandleWood.png";
import Rose from "../../public/assets/Rose.png";
import Cloves from "../../public/assets/Cloves.png";
import CardamomSeeds from "../../public/assets/CardamomSeeds.png";
import Product from "../../public/assets/Product.png";
import Image from "next/image";
function Ingredients() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div
      className="flex flex-col  w-full"
      data-aos="fade-up"
      data-aos-duration="6000"
      data-aos-anchor-placement="top-bottom"
    >
      {IngredientsData.map((ingredient, index) => {
        return <Ingredient {...ingredient} key={index} />;
      })}
      <div className="w-full mt-10 flex justify-center relative">
        <div className="absolute top-[10%] smm:left-[10%] left-0 sm:h-[70%] h-[90%] flex flex-col justify-between  translate-x-[10vw]">
          <Image
            src={Cloves}
            alt="RANDOM"
            width={200}
            height={100}
            className="w-[100px] sm:w-[200px] "
          />
          <Image
            src={Rose}
            alt="RANDOM"
            width={200}
            height={100}
            className="w-[100px] sm:w-[200px]"
          />
        </div>
        <div className="absolute top-[10%] sm:right-[10%] right-0 sm:h-[70%] h-[90%] flex flex-col -translate-x-[10vw] justify-between">
          <Image
            src={SandleWood}
            alt="RANDOM"
            width={200}
            height={100}
            className="w-[100px] sm:w-[200px] "
          />
          <Image
            src={CardamomSeeds}
            alt="RANDOM"
            width={200}
            height={100}
            className="w-[100px] sm:w-[200px] "
          />
        </div>
        <Image src={Product} alt="Product" className="sm:w-[25vw] w-[60vw]" />
      </div>
      <h2 className="text-white text-3xl font-bold my-10 w-full text-center">
        Experience <span className="text-theme_gold">Royality ✨</span>
      </h2>
    </div>
  );
}

export default Ingredients;
