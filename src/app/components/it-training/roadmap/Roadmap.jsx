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
        content : `Understand the client’s training needs and objectives`
      },
      {
        strong:`Free Consultation`,
        content:`Discuss training goals, specific topics of interest, and desired outcomes.`
      },
      {
        strong:`Requirement Analysis`,
        content:`Identify skill gaps, training requirements, and preferred learning formats.`
      },
      {
        strong:`Proposal & Quote`,
        content:` Provide a tailored training proposal with a detailed plan and schedule.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Curriculum Development & Planning', 
    subtitle: 'Phase 02:', 
    percentage:25, 
    content: [
      {
        strong:`Description`,
        content:`Develop a detailed training curriculum and plan based on the client’s needs.`
      },
      {
        strong:`Curriculum Design`,
        content:`Create a comprehensive curriculum covering the selected topics (Cloud & DevOps, Web Development, AI/ML, IoT).`
      },
      {
        strong:`Training Materials`,
        content:`Prepare instructional materials, including slides, handouts, and exercises.`
      },
      {
        strong:`Schedule Planning`,
        content:`Develop a training schedule with clear milestones and timeline.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Training Delivery', 
    subtitle: 'Phase 03', 
    percentage:50, 
    content: [
      {
        strong:`Description`,
        content:`Conduct the training sessions as per the established plan.`
      },
      {
        strong:`Instructor-Led Sessions`,
        content:`Deliver interactive training sessions with hands-on exercises and real-world examples`
      },
      {
        strong:`Online Modules (if applicable)`,
        content:`Provide online training modules for remote learning.`
      },
      {
        strong:`Practical Exercises`,
        content:`Implement practical exercises and projects to reinforce learning`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Assessment & Feedback', 
    subtitle: 'Phase 04:', 
    percentage:75, 
    content: [
      {
        strong:`Description `,
        content:`Evaluate the effectiveness of the training and gather feedback`
      },
      {
        strong:`Knowledge Assessment`,
        content:`Conduct assessments and quizzes to gauge participants’understanding.
`
      },
      {
        strong:`Client Feedback`,
        content:`Collect feedback from participants and the client on the training experience.`
      },
      {
        strong:`Adjustments & Improvements`,
        content:`Make necessary adjustments to the training program based on feedback.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Training Support & Resources', 
    subtitle: 'Phase 05', 
    percentage:100, 
    content: [
      {
        strong:`Description`,
        content:` Provide ongoing support and additional resources to ensure continued learning.`
      },
      {
        strong:`Resource Access`,
        content:`: Offer access to supplementary materials and resources for further study.`
      },
      {
        strong:`Follow-Up Sessions`,
        content:`Schedule follow-up sessions or consultations to address any additional questions or needs.`
      },
      {
        strong:`Continuous Support`,
        content:`Provide support for any issues or additional inquiries related to the training topics.`
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
          This streamlined roadmap ensures that each aspect of the IT training process is
comprehensively covered, from initial consultation to ongoing support. Visiongroww is
committed to delivering effective and practical training solutions that empower individuals and
teams across various IT domains.

          </p>
        </div>
      </section>
    </>
  );
}

export default Roadmap;