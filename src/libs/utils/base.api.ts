'use server';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!API_KEY) {
  throw new Error('API key is required');
}

export const baseApi = (url: string) => {
  return {
    url: BASE_URL + url,
    headers: {
      'api-key': API_KEY,
      'Content-Type': 'application/json',
    },
  };
};
