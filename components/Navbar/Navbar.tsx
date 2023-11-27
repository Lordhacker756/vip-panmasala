"use server";
import Image from "next/image";
import { CiUser, CiSearch } from "react-icons/ci";
import { TbBus } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

export default async function Navbar() {
  return (
    <nav className="w-[100%]">
      <ul className="flex items-center justify-between p-4">
        <li className="lg:w-[10vw] lg:h-[10vh] w-[15vw] h-[5vh] relative">
          <Image src={"/assets/asset-1.png"} alt="random" fill={true} />
        </li>
        <li>
          <ul className="flex gap-8 items-center justify-center">
            <li className="text-white text-lg hover:text-theme_gold">Buy</li>
            <li className="text-white text-lg hover:text-theme_gold">Cart</li>
            <li className="text-white text-lg hover:text-theme_gold">
              Contact Us
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex items-center justify-center gap-4">
            <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer ">
              <CiUser className="text-2xl text-white hover:text-theme_gold" />
            </li>
            <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer">
              <TbBus className="text-2xl text-white hover:text-theme_gold" />
            </li>
            <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer">
              <CiSearch className="text-2xl text-white hover:text-theme_gold" />
            </li>
            <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer relative">
              <TiShoppingCart className="text-2xl text-white hover:text-theme_gold " />
              <p className="px-[4px]  absolute bg-white rounded-full text-black -top-2 right-2">
                0
              </p>
            </li>

            <li className="px-2 cursor-pointer">
              <RxHamburgerMenu className="text-2xl text-white hover:text-theme_gold" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
