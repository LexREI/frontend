import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function getCurrentUserUsingGet() {
  return axios.get(`${BASE_URL}/user/get_current_user`, {
    withCredentials: true,
  });
}
