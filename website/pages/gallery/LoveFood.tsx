import React, { useState } from 'react';
import Image from 'next/image';
import { FoodImages } from '../../userdata/UserData';
import Arrow from '../../asset/image/svg/Arrow';
import { useRouter } from 'next/router';
import DynamicHead from '../../component/head/DynamicHead';
import { FoodSlider } from '../../component/slideshow/FoodSlider';
interface LoveFoodProps {
  onClose?: any;
}
const LoveFood: React.FC<LoveFoodProps> = ({ onClose }) => {
  const [showImage, setShowImage] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const router = useRouter();
  return (
    <>
      <DynamicHead title='We Love Foods'>
        <section className='main_section circle_background'>
          <section className='mv-container'>
            <div className='multi_head'>
              <span className='multi_heading'>
                <h1>We &#128151;</h1>
                <h1>Foods</h1>
              </span>
            </div>
            <div className='back_section'>
              <span
                className='back_arrow'
                onClick={() => router.push('/careers/#life_mediwave')}
              >
                <Arrow />
                <p>Back to Careers</p>
              </span>
            </div>
          </section>

          <section className='gallery_image_container'>
            <div className='image_container'>
              {FoodImages &&
                FoodImages.map((item: any, id: number) => (
                  <>
                    <div
                      className='slide_show_container'
                      onClick={() => {
                        setShowSlide(true);
                        setShowImage(item);
                      }}
                    >
                      <Image src={item.image} alt='ope1' width={500}
                          height={500}/>
                    </div>
                  </>
                ))}
            </div>
          </section>
          {showSlide && (
            <div>
              <FoodSlider
                selectImage={showImage}
                onClose={() => setShowSlide(false)}
              />
            </div>
          )}
        </section>
      </DynamicHead>
    </>
  );
};
export default LoveFood;
