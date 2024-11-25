import { getDateBefore } from '@/app/lib/date-helper';
import { fetchNasaImages, NasaImg } from '@/app/lib/nasa-api';
import { Card } from '@/app/ui/card/card';

export default async function CardWrapper() {
  const numberDaysBefore = 5;
  const date = getDateBefore(numberDaysBefore);
  const images = await fetchNasaImages(date);

  // API return images sorted in ascending order by date
  images.reverse();

  return (
    <>
      {images?.map((image: NasaImg) => <Card key={image.url} image={image} />)}
    </>
  );
}
