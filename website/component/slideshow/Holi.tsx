import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Close from '../../asset/image/svg/Close';
import 'swiper/css';
import 'swiper/css/navigation';
import { HoliImages } from '../../userdata/UserData';
import { Navigation } from 'swiper';

interface HoliProps {
  onClose?: any;
  selectImage: any;
}

export const Holi: React.FC<HoliProps> = ({ onClose, selectImage }) => {
  const handleOnClose = (e: any) => {
    if (e.target.id === 'team-container') onClose();
  };
  const [showImage, setShowImage] = useState(selectImage);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const galleryImage: any = showImage;
  console.log('selectedImgIndex', selectedImgIndex);
  return (
    <>
      <div
        id='team-container'
        onClick={handleOnClose}
        className='teams-popup-container'
      >
        <div className='teams-popup-wapper'>
          <div className='click-close-popup'>
            <button onClick={onClose}>
              <Close />
            </button>

            <div className='gallery-image-popup'>
              <Image alt='images' src={galleryImage.image} fill={true}/>
            </div>
            <div className='swipers-images-popup'>
              <Swiper
                navigation={true}
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation]}
                className='mySwiper'
              >
                {HoliImages.map((item: any, idx: number) => (
                  <>
                    <SwiperSlide key={`team-img-${idx}`}>
                      <div
                        className='slider_img'
                        onClick={() => setShowImage(item)}
                      >
                        <Image className='' src={item.image} alt='open1'width={500}
                          height={500} />
                      </div>
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
