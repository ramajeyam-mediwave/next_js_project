import React from 'react';
import OpenCermony from './opencermony';
import BirthDay from './birthday';
import DynamicHead from '../../component/head/DynamicHead';
import HoliCelebration from './HoliCelebration';
import LoveFood from './LoveFood';
import OfficeEvents from './OfficeEvents';
const Gallery = () => {
  return (
    <>
      <DynamicHead title='Celebration'>
        <section>
          <OpenCermony />
        </section>

        <section>
          <HoliCelebration />
        </section>
        <section>
          <LoveFood />
        </section>
        <section>
          <OfficeEvents />
        </section>
        <section>
          <BirthDay />
        </section>
      </DynamicHead>
    </>
  );
};
export default Gallery;
