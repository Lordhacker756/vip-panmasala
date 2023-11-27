import { IngredientsData } from "@/app/constants/IngredientsData";
import React from "react";
import Ingredient from "./Ingredient";

function Ingredients() {
  return (
    <div className="flex flex-col  w-full">
      {IngredientsData.map((ingredient, index) => {
        return <Ingredient {...ingredient} key={index} />;
      })}
    </div>
  );
}

export default Ingredients;
