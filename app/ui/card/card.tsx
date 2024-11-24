import { formatDateToLongForm } from '@/app/lib/date-helper';
import { NasaImg } from '@/app/lib/nasa-api';
import { CardExplanation } from '@/app/ui/card/card-explanation';

type CardProps = {
  image: NasaImg;
};

export const Card = ({ image }: CardProps) => {
  return (
    <article className={'mt-2 rounded-md bg-neutral-900'}>
      <h2 className={'p-4'}>{image.title}</h2>
      <img src={image.url} alt={`${image.title}`} className={'p-0'} />
      <div className='article-footer flex w-full max-w-fit flex-col p-4'>
        <CardExplanation explanation={image.explanation} />
        <p className={'pt-2'}>{formatDateToLongForm(image.date)}</p>
      </div>
    </article>
  );
};
