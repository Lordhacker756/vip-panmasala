import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="border-2 border-theme_gold w-[90vw] lg:w-[90vw] py-5 lg:py-5 px-4 lg:px-0 m-5 rounded-md flex justify-evenly mt-8 flex-wrap lg:flex-nowrap gap-6">
        <div className="lg:border-r-2 border-theme_gold px-4 lg:px-16 mb-4 lg:mb-0 w-full flex flex-col items-center">
          <p className="font-bold text-theme_gold text-lg lg:text-xl">
            Whats App Us
          </p>
          <p className="text-lg lg:text-xl">9810582570</p>
        </div>

        <div className="lg:border-r-2 border-theme_gold px-4 lg:px-10 mb-4 lg:mb-0 w-full flex flex-col items-center">
          <p className="font-bold text-theme_gold text-lg lg:text-xl">
            Customer Care
          </p>
          <p className="text-lg lg:text-xl">0120-4032570</p>
        </div>

        <div className="px-4 w-full flex flex-col items-center">
          <p className="font-bold text-theme_gold text-lg lg:text-xl">
            Online Purchase
          </p>
          <p className="text-lg lg:text-xl">shop@dsgroup.com</p>
        </div>
      </div>

      <div className="text-white bg-[#010317]">
        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full p-4 lg:p-10 mt-4 lg:mt-5">
          <div className="mb-6 lg:mb-0 flex flex-col items-center lg:items-start w-full lg:w-[35%]">
            <h3 className="text-theme_gold font-bold text-lg lg:text-xl py-2">
              About Us
            </h3>
            <p className="py-2 text-md lg:text-lg">Our Story</p>
            <p className="py-2 text-md lg:text-lg">Events</p>
            <p className="py-2 text-md lg:text-lg">Contact Us</p>
          </div>

          <div className="mb-6 lg:mb-0 flex flex-col items-center lg:items-start w-full lg:w-[35%]">
            <h3 className="text-theme_gold font-bold text-lg lg:text-xl py-2">
              Other Links
            </h3>
            <p className="py-2 text-md lg:text-lg">Buy Now</p>
            <p className="py-2 text-md lg:text-lg">TV commercials</p>
            <p className="py-2 text-md lg:text-lg">Rajniganda Achievers</p>
            <p className="py-2 text-md lg:text-lg">Terms & Conditions</p>
          </div>

          <div className="mb-6 lg:mb-0 w-full lg:w-[40%] flex flex-col items-center">
            <div className="w-full px-4">
              <h2 className="text-theme_gold font-bold text-lg lg:text-xl py-2">
                Sign Up For Newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-full lg:w-[90%] mb-4 lg:mb-0">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Enter your email ID"
                    className="w-full bg-white rounded border bg-opacity-100 border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 -ml-2 flex-shrink-0 inline-flex text-black bg-theme_gold border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-yellow-600 rounded">
                  Subscribe
                </button>
              </div>
              {/* Social Media Icons */}
              <div className="flex justify-center lg:justify-start items-center mt-4">
                <div className="flex justify-center items-center gap-6">
                  <FaFacebook className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
                  <FaXTwitter className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
                  <FaYoutube className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
                  <FaInstagram className="text-2xl text-white hover:text-theme_gold cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quicklinks */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-theme_gold text-center w-full lg:w-[90%] text-[10px] mt-2 mb-3">
            Digital Security: https://vippanmasala.in has been verified by
            Sectigo. The Communication of your private information from any
            address beginning with " https" is encrypted and secured using SSL.
          </p>

          {/* Links in single line separated by | */}
          <div className="flex flex-wrap justify-center w-full lg:w-[90%] mt-2 mb-2 text-white text-center text-10px">
            <a href="#" className="text-white text-xs">
              Home
            </a>
            <div className="border-r-[1px] border-white h-5 mx-2 "></div>
            <a href="#" className="text-white text-xs">
              About Us
            </a>
            <div className="border-r-[1px] border-white h-5 mx-2 "></div>
            <a href="#" className="text-white text-xs">
              Our Products
            </a>
            <div className="border-r-[1px] border-white h-5 mx-2 "></div>
            <a href="#" className="text-white text-xs">
              Contact Us
            </a>
            <div className="border-r-[1px] border-white h-5 mx-2 "></div>
            <a href="#" className="text-white text-xs">
              Terms & Conditions
            </a>
            <div className="border-r-[1px] border-white h-5 mx-2 "></div>
            <a href="#" className="text-white text-xs">
              Privacy Policy
            </a>
            <div className="border-r-[1px] border-white h-5 mx-2 "></div>
            <a href="#" className="text-white text-xs">
              Disclaimer
            </a>
          </div>

          <div className="mb-5">
            <a className="text-xs mr-5" href="#">
              Customer Care: 0120-40032270
            </a>
            <a className="text-xs" href="#">
              Email: shop@vippanmasala.com
            </a>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center justify-center items-center border-t-2 border-theme_gold px-2 py-3 bg-[#010317] mt-5">
          <img src="/assets/veg.jpeg" alt="logo" className="sm:mb-3 lg:mb-0" />
          <p className="text-xs text-center lg:text-left">
            © 2023{" "}
            <span className="text-theme_gold text-xs">VIP Pan Masala</span>{" "}
            Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
