import HomeHeader from '@/layouts/Header/HomeHeader';
import PricingComponent from '@/pages/Pricing/components/PricingComponent';

export default function Pricing() {
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="h-full home_background isolate">
        <PricingComponent />
      </main>
    </div>
  );
}
