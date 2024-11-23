import { fetchNasaImages } from '@/app/lib/nasa-api';
import { getDateBefore } from '@/app/lib/date-healper';
import Image from 'next/image';

export default async function Home() {
  const numberDaysBefore = 5;
  const date = getDateBefore(numberDaysBefore);
  const images = await fetchNasaImages(date);
  // console.log(images);
  return (
    <main>
      <div>
        {images?.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            alt={`${image.title}`}
            height={500}
            width={500}
          />
        ))}
      </div>
    </main>
  );
}
