import Header from '@/pages/Home/components/Header';
import Hero from '@/pages/Home/components/Hero';
import LogoCloud from '@/pages/Home/components/LogoCloud';
import Feature from '@/pages/Home/components/Feature';
import Testimonial from '@/pages/Home/components/Testimonial';
import Pricing from '@/pages/Home/components/Pricing';
import FAQs from '@/pages/Home/components/FAQs';
import CTA from '@/pages/Home/components/CTA';
import Footer from '@/pages/Home/components/Footer';
import Stats from '@/pages/Home/components/Stats';
import Team from '@/pages/Home/components/Team';
import Contact from '@/pages/Home/components/Contact';
import HomeHeader from '@/layouts/Header/HomeHeader';

export default function Home() {
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="home_background h-full">
        <Hero />
        {/*<LogoCloud />*/}
        {/*<Feature />*/}
        {/*<Testimonial />*/}
        {/*<Pricing />*/}
        {/*<Stats />*/}
        {/*<Team />*/}
        {/*<Contact />*/}
        {/*<FAQs />*/}
        {/*<CTA />*/}
      </main>
      {/*<Footer />*/}
    </div>
  );
}
