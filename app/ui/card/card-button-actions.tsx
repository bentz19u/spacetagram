'use client';

import { Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import styles from './card.module.css';

export const CardButtonActions = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showAnimatedHeart, setShowAnimatedHeart] = useState(false);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const likeImage = () => {
    localStorage.setItem(`liked-${url}`, 'true');
    setLiked(true);
    setShowAnimatedHeart(true); // Trigger the animation
  };

  const unLikeImage = () => {
    localStorage.removeItem(`liked-${url}`);
    setLiked(false);
  };

  useEffect(() => {
    const savedState = localStorage.getItem(`liked-${url}`);
    if (savedState) {
      setLiked(true);
    }
  }, []);

  return (
    <div className={'flex pl-1 pr-1'}>
      <div className='relative'>
        {liked ? (
          <Favorite
            onClick={() => unLikeImage()}
            htmlColor='#ed4956'
            className={'cursor-pointer'}
          ></Favorite>
        ) : (
          <FavoriteBorder
            onClick={() => likeImage()}
            className='cursor-pointer hover:text-gray-500'
          ></FavoriteBorder>
        )}
        {showAnimatedHeart && (
          <div className='absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center'>
            <Favorite
              className={styles['animated-heart']}
              htmlColor='#ed4956'
              onClick={() => {
                setShowAnimatedHeart(false);
                unLikeImage();
              }}
              onAnimationEnd={() => setShowAnimatedHeart(false)}
            />
          </div>
        )}
      </div>
      <div>
        <Tooltip
          disableHoverListener
          disableTouchListener
          open={copied}
          title='Link copied'
          placement='top'
          className={'ml-3'}
        >
          <ShareIcon
            onClick={() => copyToClipboard(url)}
            className={'cursor-pointer hover:text-gray-500'}
          ></ShareIcon>
        </Tooltip>
      </div>
    </div>
  );
};
