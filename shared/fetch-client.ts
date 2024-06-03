import nodeFetch from 'node-fetch';

const BASE_URL = 'https://newsapi.org/v2';

export function fetchClient(input: string, params: Record<string, any>) {
  let url = new URL(`${BASE_URL}${input}`);

  Object.keys(params).forEach(key => {
    url.searchParams.append(key, params[key]);
  });
  url.searchParams.append('apiKey', process.env.API_KEY!);

  const headers = new Headers();
  headers.append('X-Api-Key', process.env.API_KEY!);

  console.log('Target:', url, process.env.NODE_ENV);

  return fetch(url, {
    method: 'GET',
    headers,
  });
}