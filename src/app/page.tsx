import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ToppingsSection from '@/components/sections/ToppingsSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <ToppingsSection />
      <WhyChooseSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
