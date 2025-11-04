import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import UnderConstruction from '@/components/common/UnderConstruction';
import AboutUs from '@/components/Home/AboutUs';
import Services from '@/components/Home/Services';
import SuccessPartners from '@/components/Home/SuccessPartners';
import MobileApp from '@/components/Home/MobileApp';
import Hero from '@/components/Home/Hero';
import Stats from '@/components/Home/Stats';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* All components commented out during site reconstruction */}
      <Hero />
      {/* <Stats /> */}
      <AboutUs />
      <Services />
      <SuccessPartners />
      <MobileApp />
      {/* <Contact /> */}
      {/* Under Construction Component */}
      {/* <UnderConstruction /> */}
    </main>
  );
}
