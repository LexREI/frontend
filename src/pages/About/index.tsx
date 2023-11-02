import HomeHeader from '@/layouts/Header/HomeHeader';
import Hero from '@/pages/About/components/Hero';

export default function About() {
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="h-full home_background isolate">
        <Hero />
      </main>
    </div>
  );
}
