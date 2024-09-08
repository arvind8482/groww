'use client'; // Ensure this component is treated as a client component
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../../common/section-heading/SectionHeading';
import RoadmapAppDesign from '../../common/roadmap-app-design/RoadmapAppDesign'

const roaadmapData = [
  {
    img: '/images/roadmap-line.png',
    title: 'Initial Consultation & Requirement Gathering', 
    subtitle: 'Phase 01', 
    percentage:0, 
    content: [
      {
        strong:'Description',
        content : `Begin by understanding the client's needs and goals for the app.`
      },
      {
        strong:`Free Consultation`,
        content:`Discuss your vision, objectives, and requirements for the app.`
      },
      {
        strong:`Requirement Analysis`,
        content:`Collect detailed information on the app’s scope and functionality.`
      },
      {
        strong:`Proposal & Quote`,
        content:`Provide a comprehensive proposal with a detailed quote.`
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
        content:`Define milestones, deliverables, and timelines.`
      },
      {
        strong:`Design Mockups`,
        content:`: Create initial mockups and wireframes using Figma.`
      },
      {
        strong:`Client Feedback`,
        content:`Review designs with the client and make necessary adjustments.`
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
        content:`Build and implement the designs into functional applications`
      },
      {
        strong:`App Development:`,
        content:`Develop the app for Android and iOS using the latest technologies.`
      },
      {
        strong:`Logo Design`,
        content:`Finalize the app’s logo to establish a strong brand identity`
      },
      {
        strong:`UI/UX Design`,
        content:`Create and refine the user interface and user experience design`
      }, 
      {
        strong:`Integration`,
        content:`Integrate all necessary features and functionalities.`
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
        content:`Perform functional, performance, and security testing`
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
        content:`Make the app live and ensure it runs smoothly`
      },
      {
        strong:`Final Deployment`,
        content:`Launch the app on the Google Play Store and Apple App Store.`
      },
      {
        strong:`Performance Monitoring`,
        content:`: Ensure everything works as intended post-launch.`
      },
      {
        strong:`Client Training `,
        content:`Provide training on how to manage and update the app.`
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
        content:`: Ensure optimal performance over time.`
      }, 
    ],
  }, 
];

function Roadmap() {
   
  return (
    <>
      <section className='py-5 xl:py-20 px-8 xl:px-0 bg-white'>
        <div className='container mx-auto'>
          <SectionHeading subheading="App Design" heading="Delivery Roadmap" align="text-center" line="mx-auto" /> 
          <RoadmapAppDesign roaadmapData={roaadmapData} /> 
          <p className='text-default py-6 text-primary text-center '>
          This roadmap ensures that every aspect of your app design and development process is
covered, from initial consultation to long-term support and growth. Visiongroww is committed to
delivering high-quality app designs that not only meet but exceed your expectations.
          </p>
        </div>
      </section>
    </>
  );
}

export default Roadmap;