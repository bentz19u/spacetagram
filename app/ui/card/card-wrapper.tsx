'use client';

import { getDateBefore } from '@/app/lib/date-helper';
import { fetchNasaImages, NasaImg } from '@/app/lib/nasa-api';
import { Card } from '@/app/ui/card/card';
import { Suspense, useEffect, useRef, useState } from 'react';
import IndexSkeleton, { CardSkeleton } from '@/app/ui/skeletons';

type cardWrapperProps = {
  initialImages: NasaImg[];
};

export default function CardWrapper({ initialImages }: cardWrapperProps) {
  const [images, setImages] = useState(initialImages);
  const [isFetching, setIsFetching] = useState(false);

  let numberDaysBefore = 5;
  let key = 0;

  const fetchMoreImages = async () => {
    setIsFetching(true);

    numberDaysBefore += 1;
    const toDate = getDateBefore(numberDaysBefore);
    numberDaysBefore += 5;
    const fromDate = getDateBefore(numberDaysBefore);
    const newImages = await fetchNasaImages(fromDate, toDate);

    // API return images sorted in ascending order by date
    setImages((prev) => [...prev, ...newImages.reverse()]);
    setIsFetching(false);
  };

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching) {
          fetchMoreImages();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      {images?.map((image: NasaImg) => <Card key={key++} image={image} />)}
      <div ref={observerRef} style={{ height: '1px' }} />
    </>
  );
}
