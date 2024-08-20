 import React from 'react';
import SectionHeading from '../../common/section-heading/page';
 import Carousel from '../../common/carousel/page'


function WhyVisionGroww() { 
  return (
    <>
      <section className='py-12 bg-white'>
        <div className='container mx-auto'>
          <SectionHeading subheading="Why Choose" heading="VisionGroww?" align="text-center" line="mx-auto" /> 
          <Carousel /> 
        </div>
      </section>
    </>
  );
}

export default WhyVisionGroww;
