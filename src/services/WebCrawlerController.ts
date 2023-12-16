import axios from 'axios';
import { WEB_CRAWLER_URL } from '@/config/domain';

export async function webCrawlerUsingPost(body: API.WebCrawlerBody) {
  return axios.post(`${WEB_CRAWLER_URL}/web-crawler`, body);
}
