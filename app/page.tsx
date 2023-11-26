import Cards from "@/components/Cards/Cards";
import Carousel from "@/components/Carousel/Carousel";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-5">
      <Navbar />
      <Carousel />

      <h1 className="text-3xl text-white mt-20 font-bold">Our Products</h1>
      <Cards />
    </main>
  );
}
