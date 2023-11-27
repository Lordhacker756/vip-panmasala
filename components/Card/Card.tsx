import React from "react";
import Image from "next/image";

function Card(props: any) {
  return (
    <div className="w-[300px] h-[400px] my-5 border-2 border-theme_gold rounded-xl shadow-xl justify-evenly items-center flex flex-col">
      <figure className="w-[120px] h-[150px]">
        <img
          src={`/assets/${props.img}.png`}
          alt="random"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </figure>
      <h3 className="text-theme_gold text-sm">VIP Pan Masala 300g Pack</h3>
      <div>
        <h3 className="font-bold text-xl mb-2 text-center">$20</h3>
        <h3 className=" text-xs">(Free shipping)</h3>
      </div>
      <div className="flex-col md:flex-row flex justify-evenly items-center w-full">
        <button className="bg-theme_gold border-1 border-theme_gold cursor-pointer hover:bg-black hover:text-theme_gold hover:border-[1px] transition-all ease-in hover:border-theme_gold text-black text-sm px-3 py-1 rounded-lg w-[80%] md:w-auto my-2">
          Add to Cart
        </button>
        <button className="bg-theme_gold border-1 border-theme_gold cursor-pointer hover:bg-black hover:text-theme_gold hover:border-[1px] transition-all ease-in hover:border-theme_gold text-black text-sm px-3 py-1 rounded-lg w-[80%] md:w-auto my-2">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;
