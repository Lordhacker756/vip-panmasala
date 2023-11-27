import React from "react";

function Footer() {
  return (
    <div>
      <div className="border-2 border-theme_gold w-[90vw] py-20 px-0 m-5 rounded-md flex justify-evenly mt-8 flex-wrap gap-6">
        <div className="lg:border-r-2 border-theme_gold px-16">
          <p className="font-bold text-theme_gold text-xl">Whats App Us</p>
          <p>9810582570</p>
        </div>

        <div className="lg:border-r-2 border-theme_gold px-10">
          <p className="font-bold text-theme_gold text-xl">Customer Care</p>
          <p>0120-4032570</p>
        </div>

        <div className="lg:border-r-2 border-theme_gold px-10">
          <p className="font-bold text-theme_gold text-xl">Online Purchase</p>
          <p>shop@dsgroup.com</p>
        </div>

        <div>
          <p className="font-bold text-theme_gold text-xl">R Club Reward</p>
          <p>therclub@dsgroup.com</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-evenly p-10 mt-20">
        <div className="">
          <h3 className="text-theme_gold font-bold text-xl py-2">About Us</h3>
          <p className="py-2 text-lg">Our Story</p>
          <p className="py-2 text-lg">Events</p>
          <p className="py-2 text-lg">Contact Us</p>
        </div>

        <div className="">
          <h3 className="text-theme_gold font-bold text-xl py-2">R - Club</h3>
          <p className="py-2 text-lg">How it works</p>
          <p className="py-2 text-lg">Benfits</p>
          <p className="py-2 text-lg">Redeem Points</p>
          <p className="py-2 text-lg">FAQs</p>
        </div>

        <div className="">
          <h3 className="text-theme_gold font-bold text-xl py-2">
            Other Links
          </h3>
          <p className="py-2 text-lg">Buy Now</p>
          <p className="py-2 text-lg">TV commercials</p>
          <p className="py-2 text-lg">Rajniganda Achievers</p>
          <p className="py-2 text-lg">Terms & Conditions</p>
        </div>
      </div>

      <div className="flex justify-center items-center border-t-2 border-theme_gold p-2 bg-slate-800">
        <p>
          © 2023{" "}
          <span className="text-theme_gold font-bold">VIP Pan Masala</span>{" "}
          Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
