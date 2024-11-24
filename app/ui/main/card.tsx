import { formatDateToLongForm } from '@/app/lib/date-helper';
import { NasaImg } from '@/app/lib/nasa-api';
import { CardExplanation } from '@/app/ui/main/card-explanation';

type CardProps = {
  image: NasaImg;
};

export const Card = (card: CardProps) => {
  return (
    <article className={'mt-2 rounded-md bg-neutral-900'}>
      <h2 className={'p-4'}>{card.image.title}</h2>
      <img src={card.image.url} alt={`${card.image.title}`} className={'p-0'} />
      <div className='article-footer flex w-full max-w-fit flex-col p-4'>
        <CardExplanation explanation={card.image.explanation} />
        <p className={'pt-2'}>{formatDateToLongForm(card.image.date)}</p>
      </div>
    </article>
  );
};
