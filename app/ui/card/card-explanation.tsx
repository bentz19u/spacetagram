'use client';

import { useState } from 'react';

export const CardExplanation = ({ explanation }: { explanation: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className={`${expanded ? '' : '... truncate'}`}>{explanation}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className={'text-gray-400'}
      >{`${expanded ? 'less' : 'more'}`}</button>
    </div>
  );
};
