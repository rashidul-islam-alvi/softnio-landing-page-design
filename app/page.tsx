import About from "@/components/about";
import Booking from "@/components/booking";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PopularFood from "@/components/popular-food";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PopularFood />
      <Booking />
      <Testimonial />
      <Footer />
    </main>
  );
}
