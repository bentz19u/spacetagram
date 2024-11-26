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

export async function fetchNasaImages(
  startDate: string,
  endDate: string
): Promise<NasaImg[]> {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?` +
        new URLSearchParams({
          api_key: process.env.API_KEY ?? '',
          thumbs: 'true',
          start_date: startDate,
          end_date: endDate,
        })
    );
    const result = (await response.json()) as NasaImg[];
    // API doesn't allow order by so we do it here
    result.reverse();
    return result;
  } catch (error) {
    console.error('fetchNasaImages Error: ', error);
    throw new Error('Failed to fetch images from API.');
  }
}
