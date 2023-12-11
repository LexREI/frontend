import HomeHeader from '@/layouts/Header/HomeHeader';
import PricingComponent from '@/pages/Pricing/components/PricingComponent';

export default function Pricing() {
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="home_background isolate h-full">
        <PricingComponent />
      </main>
    </div>
  );
}
