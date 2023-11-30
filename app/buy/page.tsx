"use client";

import Card from "@/components/Card/Card";
import React, { useState } from "react";

function Buy() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="my-10 mx-4">
      <div className="flex flex-row items-center justify-center bg-gray-700 rounded-full p-2 mb-4">
        <div
          className={`w-[80%] text-sm border-2 border-theme_gold rounded-full flex justify-center items-center py-2 ${
            selectedTab === 0 ? "bg-theme_gold text-black" : ""
          } mr-2  md:mb-0`}
          onClick={() => setSelectedTab(0)}
        >
          All Products
        </div>
        <div
          className={`w-[80%] text-sm border-2 border-theme_gold rounded-full flex justify-center items-center py-2 ${
            selectedTab === 1 ? "bg-theme_gold text-black" : ""
          } mr-2 md:mb-0`}
          onClick={() => setSelectedTab(1)}
        >
          Pan Masala
        </div>
        <div
          className={`w-[80%] text-sm border-2 border-theme_gold rounded-full flex justify-center items-center py-2 ${
            selectedTab === 2 ? "bg-theme_gold text-black" : ""
          } mr-2 md:mb-0`}
          onClick={() => setSelectedTab(2)}
        >
          Acquiesce
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        {selectedTab === 0 && (
          <>
            <Card img={"pdt1"} />
            <Card img={"pdt2"} />
            <Card img={"pdt3"} />
            <Card img={"pdt5"} />
            <Card img={"pdt6"} />
          </>
        )}
        {selectedTab === 1 && (
          <>
            <Card img={"pdt6"} />
            <Card img={"pdt3"} />
            <Card img={"pdt5"} />
            <Card img={"pdt1"} />
            <Card img={"pdt2"} />
          </>
        )}
        {selectedTab === 2 && (
          <>
            <Card img={"pdt5"} />
            <Card img={"pdt2"} />
            <Card img={"pdt1"} />
            <Card img={"pdt6"} />
            <Card img={"pdt3"} />
          </>
        )}
      </div>
    </div>
  );
}

export default Buy;
