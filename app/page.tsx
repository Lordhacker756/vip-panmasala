import Carousel from "@/components/Carousel/Carousel";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-5">
      <Navbar />
      <Carousel />
    </main>
  );
}
