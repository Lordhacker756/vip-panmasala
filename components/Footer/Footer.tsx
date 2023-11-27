import React from "react";

function Footer() {
  return (
    <div>
      <div className="border-2 border-theme_gold w-[90vw] lg:w-[90vw] py-10 lg:py-20 px-4 lg:px-0 m-5 rounded-md flex justify-evenly mt-8 flex-wrap lg:flex-nowrap gap-6">
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

        <div className="lg:border-r-2 border-theme_gold px-4 lg:px-10 mb-4 lg:mb-0 w-full flex flex-col items-center">
          <p className="font-bold text-theme_gold text-lg lg:text-xl">
            Online Purchase
          </p>
          <p className="text-lg lg:text-xl">shop@dsgroup.com</p>
        </div>

        <div className="px-4 w-full flex flex-col items-center">
          <p className="font-bold text-theme_gold text-lg lg:text-xl">
            R Club Reward
          </p>
          <p className="text-lg lg:text-xl">therclub@dsgroup.com</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-10 mt-4 lg:mt-20">
        <div className="mb-6 lg:mb-0 w-full flex flex-col items-center">
          <h3 className="text-theme_gold font-bold text-lg lg:text-xl py-2">
            About Us
          </h3>
          <p className="py-2 text-md lg:text-lg">Our Story</p>
          <p className="py-2 text-md lg:text-lg">Events</p>
          <p className="py-2 text-md lg:text-lg">Contact Us</p>
        </div>

        <div className="mb-6 lg:mb-0 w-full flex flex-col items-center">
          <h3 className="text-theme_gold font-bold text-lg lg:text-xl py-2">
            R - Club
          </h3>
          <p className="py-2 text-md lg:text-lg">How it works</p>
          <p className="py-2 text-md lg:text-lg">Benfits</p>
          <p className="py-2 text-md lg:text-lg">Redeem Points</p>
          <p className="py-2 text-md lg:text-lg">FAQs</p>
        </div>

        <div className="mb-6 lg:mb-0 w-full flex flex-col items-center">
          <h3 className="text-theme_gold font-bold text-lg lg:text-xl py-2">
            Other Links
          </h3>
          <p className="py-2 text-md lg:text-lg">Buy Now</p>
          <p className="py-2 text-md lg:text-lg">TV commercials</p>
          <p className="py-2 text-md lg:text-lg">Rajniganda Achievers</p>
          <p className="py-2 text-md lg:text-lg">Terms & Conditions</p>
        </div>
      </div>

      <div className="flex justify-center items-center border-t-2 border-theme_gold p-2 bg-slate-800">
        <p className="text-md lg:text-lg">
          © 2023{" "}
          <span className="text-theme_gold font-bold">VIP Pan Masala</span>{" "}
          Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
