import { fetchNasaImages, NasaImg } from '@/app/lib/nasa-api';
import { getDateBefore } from '@/app/lib/date-helper';
import { Card } from '@/app/ui/card/card';

export default async function Home() {
  const numberDaysBefore = 5;
  const date = getDateBefore(numberDaysBefore);
  const images = await fetchNasaImages(date);

  return (
    <>
      <div id='main-content' className={`mx-auto flex flex-col`}>
        {images?.map((image: NasaImg) => (
          <Card key={image.url} image={image} />
        ))}
      </div>
    </>
  );
}
