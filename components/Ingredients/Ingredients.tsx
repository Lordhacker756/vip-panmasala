"use client";
import { IngredientsData } from "@/app/constants/IngredientsData";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Ingredient from "./Ingredient";
import Product from "../../public/assets/Product.png";
import Image from "next/image";
function Ingredients() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="flex flex-col  w-full">
      {IngredientsData.map((ingredient, index) => {
        return <Ingredient {...ingredient} key={index} />;
      })}
      <div
        className="w-full mt-8 flex justify-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <Image src={Product} alt="Product" className="w-[25vw]" />
      </div>
    </div>
  );
}

export default Ingredients;
