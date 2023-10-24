import HomeHeader from '@/layouts/Header/HomeHeader';
import LoginComponent from '@/pages/Login/components/LoginComponent';

export default function Login() {
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="h-full home_background">
        <LoginComponent />
      </main>
    </div>
  );
}
