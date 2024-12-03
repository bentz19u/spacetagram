'use client';

import { useState } from 'react';

export const CardExplanation = ({ explanation }: { explanation: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={'pt-2'}>
      <p className={`text-sm ${expanded ? '' : '... truncate'}`}>
        {explanation}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className={'text-gray-400'}
      >{`${expanded ? 'less' : 'more'}`}</button>
    </div>
  );
};
