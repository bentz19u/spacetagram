'use client';

import { getDateBefore } from '@/app/lib/date-helper';
import { fetchNasaImages, NasaImg } from '@/app/lib/nasa-api';
import { Card } from '@/app/ui/card/card';
import { useEffect, useRef, useState } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';

type cardWrapperProps = {
  initialImages: NasaImg[];
};

export default function CardWrapper({ initialImages }: cardWrapperProps) {
  const [images, setImages] = useState(initialImages);
  const [isFetching, setIsFetching] = useState(false);

  const numberDaysBefore = useRef(5);
  const preloadImages = useRef<NasaImg[]>([]);
  const observerRef = useRef<HTMLDivElement>(null);

  const fetchMoreImages = async () => {
    setIsFetching(true);

    if (preloadImages.current.length > 0) {
      setImages((prev) => [...prev, ...preloadImages.current]);
    }

    numberDaysBefore.current += 1;
    const toDate = getDateBefore(numberDaysBefore.current);
    numberDaysBefore.current += 5;
    const fromDate = getDateBefore(numberDaysBefore.current);

    // then we query the next batch of images
    try {
      preloadImages.current = await fetchNasaImages(fromDate, toDate);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    // we preload the next images
    fetchMoreImages();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching) {
          fetchMoreImages();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      {images?.map(
        (image: NasaImg, index) =>
          image.media_type != 'other' && (
            <Card key={`${image.url}-${index}`} image={image} />
          )
      )}

      {isFetching &&
        Array.from({ length: 5 }).map((_, idx) => <CardSkeleton key={idx} />)}

      <div ref={observerRef} style={{ height: '1px' }} />
    </>
  );
}
