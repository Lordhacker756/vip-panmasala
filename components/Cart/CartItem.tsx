import React from "react";
import {
  addItemToCart,
  removeItemFromCart,
  removeAllItemsOfThisTypeFromCart,
} from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";

type CartItemProps = {
  name: string;
  price: number;
  image: string;
  model: string;
  quantity: number;
};

function CartItem(props: CartItemProps) {
  const { name, price, image, model, quantity } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="justify-between mb-6 bg-[#010317] p-6 shadow-md sm:flex sm:justify-start border-2 border-theme_gold rounded-lg">
      <img
        src={image}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <p className="mt-1 text-xs text-gray-300">{model}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-black py-1 px-3.5 duration-100 hover:bg-theme_gold hover:text-blue-50"
              onClick={() => {
                dispatch(removeItemFromCart(props));
              }}
            >
              {" "}
              -{" "}
            </span>
            <input
              className="p-2 w-10 border border-theme_gold bg-[#010317] text-center justify-center items-center text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
            />
            <span
              className="cursor-pointer rounded-r bg-black py-1 px-3 duration-100 hover:bg-theme_gold hover:text-blue-50"
              onClick={() => {
                dispatch(addItemToCart(props));
              }}
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Rs. {price * quantity}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={() => {
                dispatch(removeAllItemsOfThisTypeFromCart(props));
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
