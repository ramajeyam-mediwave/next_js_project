import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import NoSSR from 'react-no-ssr';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import { Events } from './Events';
const IMG_URL = 'https://ramajeyam-mediwave.github.io/next_js_project/assets/celebration/';
const IMG_FORMAT = '.jpg';
const Gallery1 = `${IMG_URL}holi62020${IMG_FORMAT}`;
const Birthdeep = `${IMG_URL}bddeep${IMG_FORMAT}`;
const Gallery4 = `${IMG_URL}gallery14${IMG_FORMAT}`;
const Gallery3 = `${IMG_URL}christmas202211${IMG_FORMAT}`;
const Gallery7 = `${IMG_URL}gallery1${IMG_FORMAT}`;
const Womensday5 = `${IMG_URL}Womens-day_2${IMG_FORMAT}`;
const Gallery5 = `${IMG_URL}food7${IMG_FORMAT}`;
const events1 = `${IMG_URL}event20231${IMG_FORMAT}`;
const Food456 = `${IMG_URL}food2${IMG_FORMAT}`;
const Gallery8 = `${IMG_URL}diwali142021${IMG_FORMAT}`;

export default function Slideshow() {
  return (
    <>
      <section className='mv-container'>
        <div className='multi_head header_top'>
          <span className='multi_heading'>
            <h1>Life at</h1>
            <h1>Mediwave</h1>
          </span>
          <p>
            A sneak peek of what to expect once you join our team (Warning: We
            love having fun as much as we love working hard)
          </p>
        </div>
      </section>

      <div className='gallery-swiper'>
        <NoSSR>
          <section className='swippers-container'>
            <Swiper
              spaceBetween={30}
              navigation={true}
              // loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1494: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1860: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect='cube'
              speed={1000}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper'
            >
              <SwiperSlide className='min_image_length'>
                <div className='colorfull_entry fest_celebration'>
                  <Link href='/gallery/HoliCelebration'>
                    <Image
                      src={Gallery1}
                      alt='images1'
                      width={300}
                      height={300}
                    />
                    <div className='overlay'>
                      <div className='text'>Holi Celebration</div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide_two_images'>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/birthday'>
                      <Image
                        src={Birthdeep}
                        alt='images2'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Birthday Celebration</div>
                      </div>
                    </Link>
                  </div>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/ChristmasCelebration'>
                      <Image
                        src={Gallery3}
                        alt='images3'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Christmas Galattas</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='min_image_length'>
                <div className='welcoming_images fest_celebration'>
                  <Link href='/gallery/opencermony'>
                    <Image
                      src={Gallery4}
                      alt='images4'
                      width={300}
                      height={300}
                    />
                    <div className='overlay'>
                      <div className='text'>Openning Cermony</div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide_two_images'>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/Diwalicelebration'>
                      <Image
                        src={Gallery8}
                        alt='images5'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Diwali Celebration</div>
                      </div>
                    </Link>
                  </div>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/OfficeEvents'>
                      <Image
                        src={events1}
                        alt='images6'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Office Events</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='colorfull_content'>
                  <div className='Inside_colorfull fest_celebration'>
                    <Link href='/gallery/WomensdayCelebration'>
                      <Image
                        src={Womensday5}
                        alt='images7'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Womens Day Celebration</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='min_image_length'>
                <div className='welcoming_images fest_celebration'>
                  <Link href='/gallery/LoveFood'>
                    <Image
                      src={Food456}
                      alt='images4'
                      width={300}
                      height={300}
                    />
                    <div className='overlay'>
                      <div className='text'>We &#128151; Foods</div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className='min_image_length'>
                <div className='colorfull_entry fest_celebration'>
                  <Link href='/gallery/HoliCelebration'>
                    <Image
                      src={Gallery1}
                      alt='images1'
                      width={300}
                      height={300}
                    />
                    <div className='overlay'>
                      <div className='text'>Holi Celebration</div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide_two_images'>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/birthday'>
                      <Image
                        src={Birthdeep}
                        alt='images2'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Birthday Celebration</div>
                      </div>
                    </Link>
                  </div>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/ChristmasCelebration'>
                      <Image
                        src={Gallery3}
                        alt='images3'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Christmas Galattas</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='min_image_length'>
                <div className='welcoming_images fest_celebration'>
                  <Link href='/gallery/opencermony'>
                    <Image
                      src={Gallery7}
                      alt='images4'
                      width={300}
                      height={300}
                    />
                    <div className='overlay'>
                      <div className='text'>Openning Cermony</div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='slide_two_images'>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/LoveFood'>
                      <Image
                        src={Gallery5}
                        alt='images5'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>We &#128151; Foods</div>
                      </div>
                    </Link>
                  </div>
                  <div className='slide_images fest_celebration'>
                    <Link href='/gallery/OfficeEvents'>
                      <Image
                        src={events1}
                        alt='images6'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Office Events</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='min_image_length'>
                <div className='welcoming_images fest_celebration'>
                  <Link href='/gallery/Diwalicelebration'>
                    <Image
                      src={Gallery8}
                      alt='images4'
                      width={300}
                      height={300}
                    />
                    <div className='overlay'>
                      <div className='text'>Diwali Celebration</div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='colorfull_content'>
                  <div className='Inside_colorfull fest_celebration'>
                    <Link href='/gallery/opencermony'>
                      <Image
                        src={Gallery7}
                        alt='images7'
                        width={300}
                        height={300}
                      />
                      <div className='overlay'>
                        <div className='text'>Openning Cermony</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </NoSSR>
      </div>
    </>
  );
}
