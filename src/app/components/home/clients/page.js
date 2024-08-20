import React from 'react'
import SectionHeading from '../../common/section-heading/page';
import CarouselClients from '../../common/carousel-clients/page'

const clientsData = [
  {
    img: 'images/client-1.png',
    title: 'Client Data'
    },
  {
    img: 'images/client-2.jpg',
    title: 'Client Data'
  },
  {
    img: 'images/client-3.png',
    title: 'Client Data'
  },
  {
    img: 'images/client-4.png',
    title: 'Client Data'
    },
    {
      img: 'images/client-1.png',
      title: 'Client Data'
      },
    {
      img: 'images/client-2.jpg',
      title: 'Client Data'
    },
    {
      img: 'images/client-3.png',
      title: 'Client Data'
    },
    {
      img: 'images/client-4.png',
      title: 'Client Data'
      },
      {
        img: 'images/client-1.png',
        title: 'Client Data'
        },
      {
        img: 'images/client-2.jpg',
        title: 'Client Data'
      },
      {
        img: 'images/client-3.png',
        title: 'Client Data'
      },
      {
        img: 'images/client-4.png',
        title: 'Client Data'
        },
];



function Clients() {
  return (
    <>
         <section className='py-12 bg-white'>
            <div className='container mx-auto'>
            <SectionHeading subheading="Our" heading="Important Client?" align="text-center" line="mx-auto" />   
            <CarouselClients  sliderData={clientsData} />
            </div>
        </section>
    </>
  )
}

export default Clients