import { Header } from "@/feature/layout/header";
import { Hero } from "@/feature/main-page/hero";
import { HousesAndApartments } from "@/feature/properties/houses-and-apartments";
import { Testimonials } from "@/feature/main-page/testimonials";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HousesAndApartments />
        <Testimonials />
      </main>
    </div>
  );
};

export default MainPage;
