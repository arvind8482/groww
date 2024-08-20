'use client'; // Ensure this component is treated as a client component
import React, { useState } from 'react';
import SectionHeading from '../../common/section-heading/page';
 

const sliderData = [
  {
    img: '/images/why-icon-1.png',
    title: 'Comprehensive Service Offerings', 
    width:97,
    height:103,
    content: `At VisionGroww, we provide a wide range of services including Web Design, App Design, IT Training, IT Consultancy, and Master Classes. Our diverse portfolio ensures that all your IT and design needs are met under one roof.`,
  },
  {
    img: '/images/why-icon-2.png',
    title: 'Expert Design Solutions', 
    width:93,
    height:95,
    content: `Our design solutions are crafted by experts who understand the nuances of user experience and aesthetic appeal.`,
  },
  {
    img: '/images/why-icon-3.png',
    title: 'Top-Notch IT Training', 
    width:101,
    height:98,
    content: `We offer advanced IT training programs that are designed to keep you ahead in the ever-evolving tech industry.`,
  },
  {
    img: '/images/why-icon-4.png',
    title: 'Professional IT Consultancy', 
    width:99,
    height:101,
    content: `Our IT consultancy services are aimed at helping businesses navigate complex technological challenges.`,
  },
  {
    img: '/images/why-icon-5.png',
    title: 'Advanced Master Classes', 
    width:99,
    height:103,
    content: `Our master classes provide in-depth knowledge and hands-on experience in various IT domains.`,
  },
  {
    img: '/images/why-icon-6.png',
    title: 'Tailored Maintenance', 
    width:100,
    height:101,
    content: `We offer customized maintenance packages that ensure your systems are always running smoothly.`,
  },
  {
    img: '/images/why-icon-7.png',
    title: 'Customer Centric Approach', 
    width:100,
    height:102,
    content: `Our customer-centric approach ensures that your needs are always our top priority.`,
  },
  {
    img: '/images/why-icon-8.png',
    title: 'Industry Expertise', 
    width:112,
    height:108,
    content: `With years of industry experience, we bring unparalleled expertise to every project.`,
  },
];

function WhyVisionGroww() {

  
  

  return (
    <>
      <section className='py-12 bg-white'>
        <div className='container mx-auto'>
          <SectionHeading subheading="Why Choose" heading="VisionGroww?" align="text-center" line="mx-auto" /> 
    
         
        </div>
      </section>
    </>
  );
}

export default WhyVisionGroww;
