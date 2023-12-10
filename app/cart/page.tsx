"use client";
import CartItem from "@/components/Cart/CartItem";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

function Cart() {
  const cart = useAppSelector((state) => state);
  return (
    <div className=" bg-black pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Your Cart</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {/* Cart items */}

          {cart.totalQuantity > 0 ? (
            cart.items.map((item) => {
              return <CartItem {...item} />;
            })
          ) : (
            <div>
              <p className="text-theme_gold text-3xl font-bold mt-10">
                Your cart is empty
              </p>
              <p className="text-white text-lg mt-2">
                All your items will be displayed here!
              </p>
            </div>
          )}
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border border-theme_gold bg-[#010317] p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-300">Subtotal</p>
            <p className="text-gray-300">Rs. {cart.amount}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-300">Shipping</p>
            <p className="text-gray-300">Rs. 100</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">Rs. {cart.amount + 100}</p>
              <p className="text-sm text-gray-300">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-theme_gold py-1.5 font-medium text-black hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
