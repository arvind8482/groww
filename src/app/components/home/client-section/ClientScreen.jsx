"use client";

import React from 'react';
import CarouselClients from '../../common/carousel-clients/CarouselClients';
import SectionHeading from '../../common/section-heading/SectionHeading';

const clientsData = [
  {
    img: '/images/client-1.png',  
    title: 'Client Data',
    width: 207,
    height: 70
  },
  {
    img: '/images/client-2.jpg',
    title: 'Client Data',
    width: 207,
    height: 70
  },
  {
    img: '/images/client-3.png',
    title: 'Client Data',
    width: 219,
    height: 45
  },
  {
    img: '/images/client-4.png',
    title: 'Client Data',
    width: 147,
    height: 70
  },
  {
    img: '/images/client-1.png',  
    title: 'Client Data',
    width: 207,
    height: 70
  },
  {
    img: '/images/client-2.jpg',
    title: 'Client Data',
    width: 207,
    height: 70
  },
  {
    img: '/images/client-3.png',
    title: 'Client Data',
    width: 219,
    height: 45
  },
  {
    img: '/images/client-4.png',
    title: 'Client Data',
    width: 147,
    height: 70
  },
  {
    img: '/images/client-1.png',  
    title: 'Client Data',
    width: 207,
    height: 70
  },
  {
    img: '/images/client-2.jpg',
    title: 'Client Data',
    width: 207,
    height: 70
  },
  {
    img: '/images/client-3.png',
    title: 'Client Data',
    width: 219,
    height: 45
  },
  {
    img: '/images/client-4.png',
    title: 'Client Data',
    width: 147,
    height: 70
  },
 
];

function ClientSection() {
  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto'>
        <SectionHeading subheading="Our" heading="Tools" align="text-center" line="mx-auto" />
        <CarouselClients carousalData={clientsData} /> {/* Updated here */}
      </div>
    </section>
  );
}

export default ClientSection;
