'use client';
import React from 'react';
import SectionHeading from '../../common/section-heading/SectionHeading';
 import Carousel from '../../common/carousel/Carousel'

 const carouselData = [
  {
    img: '/images/why-icon-1.svg',
    width:97,
    height:103,
    title: 'Comprehensive Service Offerings', 
    content: `At VisionGroww, we provide a wide range of services including Web Design, App Design, IT Training, IT Consultancy, and Master Classes. Our diverse portfolio ensures that all your IT and design needs are met under one roof.`,
  },
  {
    img: '/images/why-icon-2.svg',
    width:93,
    height:95,
    title: 'Expert Design Solutions', 
    content: `Our design solutions are crafted by experts who understand the nuances of user experience and aesthetic appeal.`,
  },
  {
    img: '/images/why-icon-3.svg',
    width:101,
    height:98,
    title: 'Top-Notch IT Training', 
    content: `We offer advanced IT training programs that are designed to keep you ahead in the ever-evolving tech industry.`,
  },
  {
    img: '/images/why-icon-4.svg',
    width:99,
    height:101,
    title: 'Professional IT Consultancy', 
    content: `Our IT consultancy services are aimed at helping businesses navigate complex technological challenges.`,
  },
  {
    img: '/images/why-icon-5.svg',
    width:99,
    height:103,
    title: 'Advanced Master Classes', 
    content: `Our master classes provide in-depth knowledge and hands-on experience in various IT domains.`,
  },
  {
    img: '/images/why-icon-6.svg',
    width:100,
    height:101,
    title: 'Tailored Maintenance', 
    content: `We offer customized maintenance packages that ensure your systems are always running smoothly.`,
  },
  {
    img: '/images/why-icon-7.svg',
    width:100,
    height:102,
    title: 'Customer Centric Approach', 
    content: `Our customer-centric approach ensures that your needs are always our top priority.`,
  },
  {
    img: '/images/why-icon-8.svg',
    width:112,
    height:108,
    title: 'Industry Expertise', 
    content: `With years of industry experience, we bring unparalleled expertise to every project.`,
  },
];

function WhyVisionGroww() { 
  return (
    <>
      <section className='py-12 bg-white overflow-hidden'>
        <div className='container mx-auto'>
          <SectionHeading subheading="Why Choose" heading="VisionGroww?" align="text-center" line="mx-auto" /> 
          <Carousel  carouselData={carouselData} /> 
        </div>
      </section>
    </>
  );
}

export default WhyVisionGroww;
