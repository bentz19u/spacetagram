import { Suspense } from 'react';
import IndexSkeleton from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/card/card-wrapper';

export default async function Home() {
  return (
    <>
      <div id='main-content' className={`mx-auto flex flex-col`}>
        <Suspense fallback={<IndexSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
    </>
  );
}
