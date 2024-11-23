'use server';

export interface NasaImg {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: 'image' | 'video' | 'other';
  service_version: 'v1';
  title: string;
  url: string;
}

export async function fetchNasaImages(startDate: string): Promise<NasaImg[]> {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?` +
        new URLSearchParams({
          api_key: process.env.API_KEY ?? '',
          thumbs: 'true',
          // count: '5',
          start_date: startDate,
        })
    );
    return (await response.json()) as NasaImg[];
  } catch (error) {
    console.error('fetchNasaImages Error: ', error);
    throw new Error('Failed to fetch images from API.');
  }
}
