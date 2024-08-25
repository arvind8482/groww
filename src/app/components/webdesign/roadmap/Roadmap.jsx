'use client'; // Ensure this component is treated as a client component
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../../common/section-heading/SectionHeading';
import RoadmapWebDesign from '../../common/roadmap-web-design/RoadmapWebDesign'

const roaadmapData = [
  {
    img: '/images/roadmap-line.png',
    title: 'Initial Consultation & Requirement Gathering', 
    subtitle: 'Phase 01', 
    percentage:0, 
    content: [
      {
        strong:'Description',
        content : `Start by understanding the client's needs and objectives.`
      },
      {
        strong:`Free Consultation`,
        content:`Discuss your vision, goals, and requirements.`
      },
      {
        strong:`Requirement Analysis`,
        content:`Gather detailed information on the project scope.`
      },
      {
        strong:`Proposal & Quote`,
        content:`Provide a comprehensive proposal with a clear quote.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Planning & Design', 
    subtitle: 'Phase 02:', 
    percentage:25, 
    content: [
      {
        strong:`Description`,
        content:`Develop a detailed plan and initial design concepts.`
      },
      {
        strong:`Project Planning`,
        content:`Define milestones and timelines.`
      },
      {
        strong:`Design Mockups`,
        content:`Create initial mockups using tools like Figma.`
      },
      {
        strong:`Client Feedback`,
        content:`Review designs with the client and make adjustments.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Development & Implementation', 
    subtitle: 'Phase 03', 
    percentage:50, 
    content: [
      {
        strong:`Description`,
        content:`Build and implement the designs into functional products`
      },
      {
        strong:`Web Development`,
        content:`Develop the website using the latest technologies.`
      },
      {
        strong:`Logo & UI/UX Design`,
        content:`Finalize logo and user interface/experience designs.`
      },
      {
        strong:`Secure Hosting Setup`,
        content:`Prepare the hosting environment for deployment.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Testing & Quality Assurance', 
    subtitle: 'Phase 04:', 
    percentage:75, 
    content: [
      {
        strong:`Description `,
        content:`Ensure the final product is polished and free of issues.`
      },
      {
        strong:`Comprehensive Testing `,
        content:`Perform functional, performance, and security testing.`
      },
      {
        strong:`Client Review`,
        content:`Present the final product to the client for feedback.`
      },
      {
        strong:`Adjustments & Tweaks `,
        content:`Make necessary changes based on client input.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Launch & Deployment', 
    subtitle: 'Phase 05', 
    percentage:90, 
    content: [
      {
        strong:`Description`,
        content:`Make the project live and ensure it runs smoothly.`
      },
      {
        strong:`Final Deployment`,
        content:`Launch the website on the live server.`
      },
      {
        strong:`Performance Monitoring`,
        content:`Ensure everything works as intended post-launch.`
      },
      {
        strong:`Client Training `,
        content:`Provide training on how to manage the new site.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Maintenance & Support', 
    subtitle: 'Phase 06', 
    percentage:100, 
    content: [
      {
        strong:`Description`,
        content:`Provide ongoing support and maintenance to ensure long-term success.`
      },
      {
        strong:`3 Months of Free Maintenance`,
        content:`Regular updates and troubleshooting.`
      },
      {
        strong:`Continuous Support`,
        content:`Offer support for any issues or additional requirements.`
      },
      {
        strong:`Performance Optimization`,
        content:`Ensure optimal performance over time.`
      }, 
    ],
  }, 
];

function Roadmap() {
   
  return (
    <>
      <section className='py-5 xl:py-20 px-8 xl:px-0 bg-white'>
        <div className='container mx-auto'>
          <SectionHeading subheading="Web Design"   heading="Delivery Roadmap" align="text-center" line="mx-auto" /> 
          <RoadmapWebDesign roaadmapData={roaadmapData}   /> 
          <p className='text-default py-6 text-primary text-center '>
          This roadmap ensures that every aspect of your web design and development process is
meticulously managed, from the initial consultation through to long-term support and
enhancement. Visiongroww is committed to delivering exceptional web designs that meet and
exceed your expectations.

          </p>
        </div>
      </section>
    </>
  );
}

export default Roadmap;