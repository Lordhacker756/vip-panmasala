"use client";
import { useState } from "react";
import Image from "next/image";
import { CiUser, CiSearch } from "react-icons/ci";
import { TbBus } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

export default function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const { totalQuantity } = useAppSelector((state) => state);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const closeSideMenu = () => {
    setShowSideMenu(false);
  };

  return (
    <>
      <nav className="w-full">
        <ul className="flex flex-col md:flex-row items-center justify-between px-4">
          <li className="w-20 md:w-32 relative cursor-pointer">
            <Link href="/">
              <Image
                src={"/assets/logo.webp"}
                alt="random"
                width={100}
                height={40}
              />
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            <ul className="flex gap-4 md:gap-8 items-center justify-center">
              <li className="text-theme_gold text-lg hover:text-white cursor-pointer">
                <Link href="/buy">Buy</Link>
              </li>
              <li className="text-theme_gold text-lg hover:text-white cursor-pointer">
                <Link href="/acquiesce">Acquiesce</Link>
              </li>
              <li
                className="text-theme_gold text-lg hover:text-white cursor-pointer"
                onClick={closeSideMenu}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li className="my-4 md:mt-0">
            <ul className="flex items-center justify-center gap-4">
              <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer">
                <Link href="/login">
                  <CiUser className="text-2xl text-theme_gold hover:text-white" />
                </Link>
              </li>
              <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer">
                <CiSearch className="text-2xl text-theme_gold hover:text-white" />
              </li>
              <li className="border-r-2 border-r-gray-500 px-4 cursor-pointer relative">
                <Link href="/cart">
                  <TiShoppingCart className="text-2xl text-theme_gold hover:text-white" />
                  <p className="px-[4px] absolute text-xs bg-white rounded-full text-black -top-2 right-2">
                    {totalQuantity}
                  </p>
                </Link>
              </li>
              <li className="px-2 cursor-pointer" onClick={toggleSideMenu}>
                <RxHamburgerMenu className="text-2xl text-theme_gold hover:text-white" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Side Menu */}
      {showSideMenu && (
        <div className="fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 h-full w-64 bg-[#010317] p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-theme_gold text-2xl font-bold">VIP</div>
              <div
                className="cursor-pointer"
                onClick={() => setShowSideMenu(false)}
              >
                <IoMdClose className="text-3xl text-white hover:text-theme_gold" />
              </div>
            </div>
            <ul className="text-white">
              <li className="mb-3 flex item-center cursor-pointer">Home</li>
              <li className="mb-3 flex item-center cursor-pointer">
                Our Story
              </li>
              <li className="mb-3 relative flex flex-col h-[120px]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center">Products</span>
                </div>
                <ul className="pl-4 absolute top-[20px] h-12 bg-[#010317] p-2">
                  <li className="text-white my-1 cursor-pointer">Product 1</li>
                  <li className="text-white my-1 cursor-pointer">Product 2</li>
                  <li className="text-white my-1 cursor-pointer">Product 3</li>
                </ul>
              </li>
              <li className="mb-3 flex item-center cursor-pointer">Buy</li>
              <li className="mb-3 flex item-center cursor-pointer">
                Acquiesce
              </li>
              <li className="mb-3 flex item-center cursor-pointer">
                Contact Us
              </li>
            </ul>
            <div className="flex justify-evenly items-center mt-4 gap-4">
              <AiFillFacebook className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
              <AiOutlineTwitter className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
              <AiFillYoutube className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
              <AiOutlineInstagram className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
