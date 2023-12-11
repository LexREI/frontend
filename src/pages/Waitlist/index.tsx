import HomeHeader from '@/layouts/Header/HomeHeader';
import Form from '@/pages/Waitlist/components/Form';

export default function Waitlist() {
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="home_background h-full">
        <Form />
      </main>
    </div>
  );
}
