"use client";

import React from 'react';
import CarouselClients from '../../common/carousel-clients/page';
import SectionHeading from '../../common/section-heading/page';

function ClientSection() {
  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto'>
        <SectionHeading subheading="Our" heading="Important Client?" align="text-center" line="mx-auto" />
        <CarouselClients />
      </div>
    </section>
  );
}

export default ClientSection;
