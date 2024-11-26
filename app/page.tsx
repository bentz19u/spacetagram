import { Suspense } from 'react';
import IndexSkeleton from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/card/card-wrapper';
import { getDateBefore } from '@/app/lib/date-helper';
import { fetchNasaImages } from '@/app/lib/nasa-api';

export default async function Home() {
  // get the first batch of images from the API
  const toDate = getDateBefore(1);
  const fromDate = getDateBefore(5);
  const newImages = await fetchNasaImages(fromDate, toDate);

  return (
    <>
      <div id='main-content' className={`mx-auto flex flex-col`}>
        <Suspense fallback={<IndexSkeleton />}>
          <CardWrapper initialImages={newImages} />
        </Suspense>
      </div>
    </>
  );
}
