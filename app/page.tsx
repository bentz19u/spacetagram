import { fetchNasaImages } from '@/app/lib/nasa-api';
import { getDateBefore, formatDateToLongForm } from '@/app/lib/date-helper';

export default async function Home() {
  const numberDaysBefore = 5;
  const date = getDateBefore(numberDaysBefore);
  const images = await fetchNasaImages(date);
  // console.log(images);
  return (
    <>
      <div id='main-content' className={`mx-auto flex flex-col`}>
        {images?.map((image) => (
          <article key={image.url} className={'mt-2 rounded-md bg-neutral-900'}>
            <h2 className={'p-4'}>{image.title}</h2>
            <img src={image.url} alt={`${image.title}`} className={'p-0'} />
            <div className='article-footer p-4'>
              {image.explanation}
              <p className={'pt-2'}>{formatDateToLongForm(image.date)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
