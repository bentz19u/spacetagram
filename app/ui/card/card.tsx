import { formatDateToLongForm } from '@/app/lib/date-helper';
import { NasaImg } from '@/app/lib/nasa-api';
import { CardExplanation } from '@/app/ui/card/card-explanation';
import { CardButtonActions } from '@/app/ui/card/card-button-actions';

type CardProps = {
  image: NasaImg;
};

export const Card = ({ image }: CardProps) => {
  return (
    <article className={'sm:mt-4 sm:rounded-md sm:bg-neutral-900'}>
      <h2 className={'p-4 text-sm'}>{image.title}</h2>
      {image.media_type == 'image' ? (
        <img src={image.url} alt={`${image.title}`} className={'p-0'} />
      ) : (
        <iframe
          className='left-0 top-0 h-full w-full'
          src={image.url}
          title={image.title}
        />
      )}
      <div className='article-footer flex w-full max-w-fit flex-col p-4'>
        <CardButtonActions url={image.url} />
        <CardExplanation explanation={image.explanation} />
        <p className={'pt-2 text-gray-400'}>
          {formatDateToLongForm(image.date)}
        </p>
      </div>
    </article>
  );
};
