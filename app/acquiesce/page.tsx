import React from "react";
import Image from "next/image";
import Product from "../../public/assets/Product.png";
import Card from "@/components/Card/Card";
function Acquiesce() {
  return (
    <div>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-theme_gold bg-gray-800 flex-shrink-0">
              <p className="text-5xl  ">1</p>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-theme_gold text-lg title-font font-medium mb-2">
                Select A Product
              </h2>
              <p className="leading-relaxed text-base">
                Pick favorite pack size and tap Subscribe Now
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-theme_gold text-lg title-font font-medium mb-2">
                CHOOSE SUBSCRIPTION & DELIVERY PLAN
              </h2>
              <p className="leading-relaxed text-base">
                Select Quantity, Subscription Period and Shipping Frequency
              </p>
            </div>
            <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-theme_gold bg-gray-800 flex-shrink-0">
              <p className="text-5xl  ">2</p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-theme_gold bg-gray-800 flex-shrink-0">
              <p className="text-5xl  ">3</p>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-theme_gold text-lg title-font font-medium mb-2">
                DOORSTEP DELIVERY
              </h2>
              <p className="leading-relaxed text-base">
                Enter Payment Details and Enjoy Doorstep Delivery
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-theme_gold text-lg title-font font-medium mb-2">
                ENJOY ADDITIONAL BENEFITS
              </h2>
              <p className="leading-relaxed text-base">
                Get Free Delivery and 2 X Rewards
              </p>
            </div>
            <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-theme_gold bg-gray-800 flex-shrink-0">
              <p className="text-5xl  ">4</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-2 border-theme_gold rounded-lg mx-10 bg-gray-800 flex justify-center items-center p-5">
        <Image
          src={Product}
          alt="Product"
          className="sm:w-[15vw] w-[60vw] mx-10"
        />
        <div className="w-[40%]">
          <h2 className="text-2xl text-theme_gold font-bold">Why Acquiesce?</h2>
          <div className="text-xl mt-4 leading-loose">
            - Enjoy free delivery on every order <br />
            - Get 2X Reward Points
            <br />
            - Subscribe for 1, 3, 6 or 12 Months. <br />
            - Shipped every – Week, Fortnight or Month
            <br /> - Cancel or Pause, any time.
          </div>
        </div>
      </section>

      <h2 className="text-2xl text-theme_gold font-bold mt-20 text-center">
        Our Premium Products
      </h2>
      <div className="flex flex-wrap justify-center gap-5 mx-10">
        <Card img={"pdt1"} />
        <Card img={"pdt2"} />
        <Card img={"pdt3"} />
        <Card img={"pdt5"} />
        <Card img={"pdt6"} />
      </div>
      <section className="text-gray-400  body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Address
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Acquiesce
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Acquiesce;
