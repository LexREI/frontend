import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function getUserSubscriptionUsingGet() {
  return axios.get(`${BASE_URL}/subscription/get_user_subscription`, {
    withCredentials: true,
  });
}

export async function createCheckoutSession(
  body: API.SubscriptionCheckoutItem
) {
  return axios.post(`${BASE_URL}/subscription/create_checkout_session`, body, {
    withCredentials: true,
  });
}

export async function getUserSubscriptionSession() {
  return axios.get(`${BASE_URL}/subscription/get_user_subscription_session`, {
    withCredentials: true,
  });
}

export async function paymentSuccessUsingPost(body: API.CheckoutSessionBody) {
  return axios.post(`${BASE_URL}/subscription/payment_success`, body, {
    withCredentials: true,
  });
}
