export function CardSkeleton() {
  return (
    <article className={'mt-2 rounded-md bg-neutral-900'}>
      <h2 className={'p-4'}></h2>
      <div className={`card-skeleton-div`}></div>
      <div className='article-footer flex w-full max-w-fit flex-col p-4'>
        <div></div>
        <p className={'pt-2'}></p>
      </div>
    </article>
  );
}

export default function IndexSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}
