import ApiConfig from 'app/config/api-config';

export default async function getMetrics(cryptoId: string) {
  await fetch(
    ApiConfig.BASE_URL + ApiConfig.ASSETS + '/' + cryptoId + '/metrics',
  );
}
