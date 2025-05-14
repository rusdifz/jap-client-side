const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetcher(url: string) {
  if (!API_KEY) {
    throw new Error('API key is required');
  }

  const res = await fetch(url, {
    headers: {
      'api-key': API_KEY,
    },
  });
  console.log('res for', res);

  if (!res.ok) throw new Error('Gagal memuat data');
  return res.json();
}
