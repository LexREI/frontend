import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function doChaClientSideUsingPost(
  body: API.OpenAIChatUsingPostBody
) {
  return axios.post(`${BASE_URL}/openai/chat`, body);
}
