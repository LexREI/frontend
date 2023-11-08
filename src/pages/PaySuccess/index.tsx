import { useNavigate } from 'react-router-dom';
import HomeHeader from '@/layouts/Header/HomeHeader';
import { useEffect, useState } from 'react';
import {
  getUserSubscriptionSession,
  paymentSuccessUsingPost,
} from '@/services/SubscriptionController';
import { Button } from '@/components/ui/button';

export default function PaySuccess() {
  const navigate = useNavigate();
  const [userSubscriptionSession, setUserSubscriptionSession] =
    useState<API.UserSubscriptionSessionResponse>();

  const getSubscriptionSession = async () => {
    try {
      const res = await getUserSubscriptionSession();
      if (res.data.code === 200) {
        setUserSubscriptionSession(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePaymentSuccess = async () => {
    try {
      const body: API.CheckoutSessionBody = {
        _id: userSubscriptionSession?._id || '',
        session_id: userSubscriptionSession?.session_id || '',
      };
      const res = await paymentSuccessUsingPost(body);
      if (res.data.code === 200) {
        navigate('/pricing');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSubscriptionSession();
  }, []);
  return (
    <div className="h-screen">
      <HomeHeader />
      <main className="h-full home_background isolate">
        <div className="py-40">
          <p>pay success</p>
          <Button onClick={() => handlePaymentSuccess()}>Proceed</Button>
        </div>
      </main>
    </div>
  );
}
