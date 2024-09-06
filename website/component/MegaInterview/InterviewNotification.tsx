import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import { XIcon } from '@heroicons/react/outline';

import Link from 'next/link';
import CloseWhite from '../../asset/image/Closewhite';

interface InterviewNotificationProps {
  showBanner: boolean;
  onClose: () => void;
}

const InterviewNotification: React.FC<InterviewNotificationProps> = ({
  showBanner,
  onClose,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/2023/mega-walkin');
  };

  return (
    <>
      {showBanner && (
        <div className='Banner_section'>
          <span className='banner_content'>
            Hey there &#128075; young talents &#128522; Join our Walk-in Job
            Interview for freshers and unlock incredible opportunities &#127881;{' '}
            <br />
            <Link className='banner_link' href='/2023/mega-walkin'>
              Click here
            </Link>
          </span>

          <div className='banner_block'>
            <button className='' onClick={onClose}>
              <CloseWhite />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InterviewNotification;
