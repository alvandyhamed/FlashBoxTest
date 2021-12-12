import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';
export default function getAsset(cryptoId: string) {
  return apiClient.get(ApiConfig.ASSETS + '/' + cryptoId);
}
