'use server';

import { NasaError } from '@/app/lib/errors';

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

    const result = (await response.json()) as NasaImg[] | any;

    if (result.error) {
      throw new NasaError(result.error.code, result.error.message);
    }

    // API doesn't allow order by so we do it here
    result.reverse();
    return result;
  } catch (error) {
    if (error instanceof NasaError) {
      console.error(`NasaError: ${error.code} - ${error.message}`);
      throw error; // Rethrow specific errors to propagate them
    } else {
      console.error('Unexpected Error:', error);
      throw new Error('An unexpected error occurred while fetching images.');
    }
  }
}
