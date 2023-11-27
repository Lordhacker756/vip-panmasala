import Cards from "@/components/Cards/Cards";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import Ingredients from "@/components/Ingredients/Ingredients";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/Videos/Videos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-5 max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Carousel />

      <h1 className="text-3xl text-white mt-20 font-bold">Our Products</h1>
      <Cards />

      <Ingredients />

      <Video />

      <Footer />
    </main>
  );
}
