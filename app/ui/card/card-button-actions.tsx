'use client';

import { Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';

export const CardButtonActions = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Tooltip
        disableFocusListener
        disableHoverListener
        disableTouchListener
        open={copied}
        title='Link copied'
        placement='top'
      >
        <ShareIcon
          onClick={() => copyToClipboard(url)}
          className={'cursor-pointer'}
        ></ShareIcon>
      </Tooltip>
    </>
  );
};
