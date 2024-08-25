'use client'; // Ensure this component is treated as a client component
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../../common/section-heading/SectionHeading';
import RoadmapItTraining from '../../common/roadmap-it-training/RoadmapItTraining'

const roaadmapData = [
  {
    img: '/images/roadmap-line.png',
    title: 'Initial Consultation & Needs Assessment', 
    subtitle: 'Phase 01', 
    percentage:0, 
    content: [
      {
        strong:'Description',
        content : `Understand the client’s IT challenges and objectives to tailor consultancy
services effectively`
      },
      {
        strong:`Free Consultation`,
        content:` Discuss your current IT environment, goals, and specific needs for consultancy.`
      },
      {
        strong:`Needs Assessment`,
        content:`: Identify key areas for improvement and potential solutions.`
      },
      {
        strong:`Proposal & Quote`,
        content:` Provide a detailed proposal with an action plan, scope, and timeline for the consultancy services.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Strategy Development & Planning', 
    subtitle: 'Phase 02:', 
    percentage:25, 
    content: [
      {
        strong:`Description`,
        content:`Develop a comprehensive strategy and detailed plan based on the identified needs.`
      },
      {
        strong:`Strategy Design`,
        content:`Create a strategy for cloud integration, cloud migration, DevOps, or web development, as applicable.`
      },
      {
        strong:`Resource Planning`,
        content:`Outline the resources, tools, and technologies required for successful implementation.`
      },
      {
        strong:`Timeline & Milestones`,
        content:`Establish a timeline with key milestones and deliverables.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Implementation & Execution', 
    subtitle: 'Phase 03', 
    percentage:50, 
    content: [
      {
        strong:`Description`,
        content:`Execute the strategy and implement the recommended solutions`
      },
      {
        strong:`Execution of Strategy`,
        content:`: Implement cloud integration, cloud migration, DevOps practices, or web development solutions as planned.`
      },
      {
        strong:`Configuration & Setup`,
        content:`Set up necessary tools, platforms, and environments.`
      },
      {
        strong:`Testing & Validation`,
        content:`Conduct testing to ensure the solutions are working as intended and meet the specified requirements.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Assessment & Optimization', 
    subtitle: 'Phase 04:', 
    percentage:75, 
    content: [
      {
        strong:`Description `,
        content:` Evaluate the effectiveness of the implemented solutions and makenecessary adjustments.`
      },
      {
        strong:`Performance Assessment`,
        content:` Review performance metrics and the impact of the implemented solutions.`
      },
      {
        strong:`Client Feedback`,
        content:`Gather feedback from the client to understand their experience and satisfaction.`
      },
      {
        strong:`Optimizations`,
        content:`Make adjustments and optimizations based on assessment results and client feedback.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Post-Implementation Support & Review', 
    subtitle: 'Phase 05', 
    percentage:100, 
    content: [
      {
        strong:`Description`,
        content:`: Provide ongoing support and review the outcomes to ensure long-term
success`
      },
      {
        strong:`Support & Troubleshooting:`,
        content:`Offer support for any issues that arise post-implementation and provide troubleshooting assistance.
`
      },
      {
        strong:`Resource Access`,
        content:`Provide access to additional resources and documentation as needed.`
      },
      {
        strong:`Final Review`,
        content:`Conduct a final review of the project to assess overall success anddiscuss potential future needs or enhancements.`
      }, 
    ],
  },
 
];

function Roadmap() {
   
  return (
    <>
        <section className='py-5 xl:py-20 px-8 xl:px-0 bg-white'>
        <div className='container mx-auto'>
          <SectionHeading subheading="IT Training" heading="Services" align="text-center" line="mx-auto" /> 
          <RoadmapItTraining roaadmapData={roaadmapData} /> 
          <p className='text-default py-6 text-primary text-center '>
          This roadmap ensures a structured approach to IT consultancy services, from initial consultation
through to post-implementation support. Visiongroww is committed to delivering expert guidance
and solutions that drive IT transformation and achieve your business objectives. 

          </p>
        </div>
      </section>
    </>
  );
}

export default Roadmap;