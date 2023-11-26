"use server";
import Image from "next/image";
export default async function Navbar() {
  return (
    <nav className="w-[100%]">
      <ul className="flex items-center justify-between px-4">
        <li className="w-[10vw] h-[10vh] relative">
          <Image src={"/assests/asset-1.png"} alt="random" fill={true} />
        </li>
        <li>
          <ul className="flex gap-4 items-center justify-center">
            <li className="text-white text-lg">Buy</li>
            <li className="text-white text-lg">Subscribe</li>
            <li className="text-white text-lg">Rewards</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
