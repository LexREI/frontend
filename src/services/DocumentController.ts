import axios from 'axios';

export async function documentsListUsingGet() {
  return axios.get(
    'https://lexari-backend-api.azurewebsites.net/api/documents'
  );
}
