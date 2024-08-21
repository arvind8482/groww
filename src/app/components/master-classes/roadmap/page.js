'use client'; // Ensure this component is treated as a client component
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from '../../common/section-heading/page';
import RoadmapAppDesign from '../../common/roadmap-app-design/page'

const roaadmapData = [
  {
    img: '/images/roadmap-line.png',
    title: 'Initial Consultation & Needs Assessment', 
    subtitle: 'Phase 01', 
    percentage:0, 
    content: [
      {
        strong:'Description',
        content : ` Understand the client’s learning objectives and requirements for the
master classes.`
      },
      {
        strong:`Free Consultation`,
        content:`Discuss the client’s goals, specific topics of interest, and desired
outcomes for the master classes.`
      },
      {
        strong:`Needs Assessment`,
        content:`Identify the skills and knowledge gaps, and determine the most
relevant master classes.`
      },
      {
        strong:`Proposal & Plan`,
        content:`Provide a tailored proposal with a detailed plan, curriculum, and
schedule for the master classes.`
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
        content:`Develop a comprehensive curriculum and detailed plan based on the client’s needs.`
      },
      {
        strong:`Curriculum Design`,
        content:`Create in-depth curricula for each master class topic, including tools, cloud certifications, databases, full-stack development, and data science.`
      },
      {
        strong:`Training Materials`,
        content:`Prepare instructional materials such as slides, handouts, and practical exercises.`
      },
      {
        strong:`Schedule Planning`,
        content:`Develop a training schedule with clear milestones and timelines for each master class.`
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
        content:`Conduct the master classes as per the established plan.`
      },
      {
        strong:`Instructor-Led Sessions`,
        content:` Deliver interactive, expert-led sessions with hands-on exercises and real-world applications.`
      },
      {
        strong:`Online Modules (if applicable)`,
        content:`: Provide online training modules for remote learning.
● Practical Exercises: Implement practical exercises, projects, and case studies to
reinforce learning.`
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
        content:`Evaluate the effectiveness of the master classes and gather feedback.`
      },
      {
        strong:`Knowledge Assessment`,
        content:`Conduct assessments, quizzes, and practical evaluations to
measure participants' understanding and skills.`
      },
      {
        strong:`Client Feedback`,
        content:`Collect feedback from participants and the client on the training
experience and effectiveness.`
      },
      {
        strong:`Adjustments & Improvements: `,
        content:`Make necessary adjustments to the master class content or delivery based on feedback.`
      }, 
    ],
  },
  {
    img: '/images/roadmap-line.png',
    title: 'Post-Training Support & Resources', 
    subtitle: 'Phase 05', 
    percentage:100, 
    content: [
      {
        strong:`Description`,
        content:`Provide ongoing support and additional resources to ensure continued
learning and application.`
      },
      {
        strong:`Resource Access`,
        content:`: Offer access to supplementary materials, resources, and recorded
sessions for further study.`
      },
      {
        strong:`Follow-Up Sessions`,
        content:`Schedule follow-up sessions or consultations to address any additional questions or needs.`
      },
      {
        strong:`Continuous Support`,
        content:`Provide support for any issues or additional inquiries related to
the master class topics.
`
      }, 
    ],
  },
 
];

function Roadmap() {
   
  return (
    <>
      <section className='py-20 px-8 xl:px-0 bg-white'>
        <div className='container mx-auto'>
          <SectionHeading subheading="IT Training" heading="Services" align="text-center" line="mx-auto" /> 
          <RoadmapAppDesign roaadmapData={roaadmapData} /> 
          <p className='text-default py-6 text-primary text-center '>
          This roadmap ensures a structured approach to delivering master classes, from initial
consultation through to post-training support. Visiongroww is committed to providing
high-quality, practical training solutions that empower participants with the knowledge and skills
needed to excel in their fields.

          </p>
        </div>
      </section>
    </>
  );
}

export default Roadmap;