'use client';

import { useState } from 'react';

export const CardExplanation = ({ explanation }: { explanation: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className={`${expanded ? '' : '... truncate'}`}>{explanation}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        className={'dark'}
      >{`${expanded ? 'less' : 'more'}`}</button>
    </div>
  );
};
