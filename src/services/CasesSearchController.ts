import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function searchCaseUsingPost(body: API.CasesSearchUsingPostBody) {
  return axios.post(`${BASE_URL}/cases/search`, body);
}
