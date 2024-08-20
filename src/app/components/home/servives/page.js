'use client';
import React, { useState } from 'react';
import SectionHeading from '../../common/section-heading/page'
import Button from '../../common/button/page'
import Image from 'next/image'
const tabsData = [
  {
    label: 'Web Design',
    subcontent: [
      {
        heading: 'Figma Design',
        img: '/images/services-icon-figma.png',
        width:84,
        height:84,
        content: 'Craft stunning visual designs and prototypes using Figma, ensuring seamless collaboration and feedback.'
      },
      {
        heading: 'Logo Design',
        img: '/images/services-icon-logo-design.png',
        width:84,
        height:85,
        content: 'Create memorable and impactful logos that resonate with your brand’s identity and values.'
      },
      {
        heading: 'Website Design',
        width:78,
        height:77,
        img: '/images/services-icon-website-design.png',
        content: 'Design responsive, user-friendly websites tailored to your business needs, enhancing online presence.'
      },
      {
        heading: 'Secure Hosting',
        img: '/images/services-icon-secure-hosting.png',
        width:78,
        height:79,
        content: 'Enjoy robust and secure hosting for your website, along with three months of complimentary maintenance.'
      },
    ],
    link:'/web-design'
  },
  {
    label: 'App Design',
    subcontent: [
      {
        heading: 'Figma Design',
        img: '/images/services-icon-figma.png',
        width:84,
        height:84,
        content: 'We utilize Figma, a leading collaborative design tool, to create high-fidelity wireframes.'
      },
      {
        heading: 'Logo Design',
        img: '/images/services-icon-logo-design.png',
        width:84,
        height:84,
        content: 'Your app’s logo is a critical element of its brand identity. Our logo design process ensures it stands out.'
      },
      {
        heading: 'UI/UX Design',
        width:85,
        height:85,
        img: '/images/services-icon-ux.png',
        content: 'User Interface (UI) and User Experience (UX) design are at the heart of our app design services.'
      },
    ],
      link:'/app-design'
  },
  {
    label: 'IT Training',
    subcontent: [
      {
        heading: 'Cloud & DevOps',
        img: '/images/services-icon-cloud.png',
        width:121,
        height:85,
        content: 'Our Cloud & DevOps training focuses on modern practices and tools used to streamline development.'
      },
      {
        heading: 'Web Development',
        img: '/images/services-icon-website-design.png',
        width:78,
        height:77,
        content: 'Our Web Development training provides comprehensive instruction on creating and managing websites.'
      },
      {
        heading: 'AI/ML Training',
        img: '/images/services-icon-aiml.png',
        width:86,
        height:86,
        content: 'Our AI/ML training is designed to introduce participants to artificial intelligence and machine learning concepts and techniques.'
      },
      {
        heading: 'IoT Training',
        img: '/images/services-icon-iot.png',
        width:78,
        height:74,
        content: 'Our IoT training focuses on the development and implementation of interconnected devices and systems.'
      },
    ],
    link:'/it-training'
  },
  {
    label: 'IT Consultancy',
    subcontent: [
      {
        heading: 'Cloud Integration',
        img: '/images/services-icon-cloud.png',
        width:121,
        height:85,
        content: 'Our Cloud Integration services focus on seamlessly connecting your on-premises systems with cloud-based solutions to enhance flexibility and efficiency.'
      },
      {
        heading: 'Cloud Migration',
        img: '/images/services-icon-cloud-inetgration.png',
        width:121,
        height:85,
        content: 'Our Cloud Migration services assist organizations in moving their IT resources from on-premises to cloud environments.'
      },
      {
        heading: 'DevOps',
        img: '/images/services-icon-devops.png',
        width:185,
        height:83,
        content: 'Our DevOps consultancy focuses on implementing and optimizing DevOps practices to improve collaboration.'
      },
      {
        heading: 'Web Development',
        img: '/images/services-icon-website-design.png',
        width:78,
        height:77,
        content: 'Our Web Development consultancy provides expert advice and solutions for building and enhancing web applications and websites.'
      },
    ],
     link:'/it-consulting'
  },
  {
    label: 'Master Classes',
    subcontent: [
      {
        heading: 'Tools Master Class',
        img: '/images/services-icon-website-design.png',
        width:78,
        height:77,
        content: 'Our Tools Master Class provides comprehensive training on essential tools used in modern development and operations.'
      },
      {
        heading: 'Cloud Certification Master Class',
        img: '/images/services-icon-cloud.png',
        width:121,
        height:85,
        content: 'Our Cloud Certification Master Class prepares participants for certification exams and provides hands-on experience with major cloud platforms.'
      },
      {
        heading: 'Database Master Class',
        img: '/images/services-icon-secure-hosting.png',
        width:78,
        height:79,
        content: 'Our Database Master Class covers key database technologies and their applications.'
      },
      {
        heading: 'Full Stack Master Class',
        img: '/images/services-icon-mern.png',
        width:95,
        height:86,
        content: 'Our Full Stack Master Class provides training on building end-to-end web applications using popular technology stacks.'
      },
    ],
    link:'/master-classes'
  },
];

function Services() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className='py-12 bg-secondary'>
      <div className='container mx-auto'>
        <SectionHeading subheading="Our Services" heading="Anything tech, Everything tech!" align="text-center" line="mx-auto" /> 
        <div className="flex flex-col px-6 xl:px-0 mb-6 xl:flex-row xl:space-x-3 justify-center">
          {tabsData.map((tab, idx) => (
            <button
              key={idx}
              className={`p-4 text-tabs  mb-2 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'bg-secondary-dark text-white'
                  : 'bg-white text-primary'
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col  px-6 xl:px-0 xl:flex-row xl:space-x-6 justify-center">
          {tabsData[activeTabIndex].subcontent.map((item, idx) => (
            <div key={idx} className='p-8 bg-white mb-6 rounded-2xl w-full xl:w-1/4 min-h-tabs-content'>
             
              <div className='py-6 text-center'>
              <Image
  src={item.img} alt={item.heading} className='mx-auto'  width={item.width} height={item.height}
    /> 
              </div>
              <div className='min-h-tabs-subheading'>
                  <h3 className='text-tabs font-semibold text-center'>{item.heading}</h3>
               </div>
              
              <p className='text-default-size text-center'>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex py-6 justify-center">
          <Button href={tabsData[activeTabIndex].link} text="View More" /> 
        </div>
      </div>
    </section>
  );
}

export default Services;
