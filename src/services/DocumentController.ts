import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function documentsListUsingGet() {
  return axios.get(
    'https://lexari-backend-api.azurewebsites.net/api/documents'
  );
}

export async function documentUploadUsingPost(formData: any) {
  return axios.post(`${BASE_URL}/document`, formData);
}
