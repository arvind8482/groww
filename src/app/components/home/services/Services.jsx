'use client';
  import { useState } from 'react';
  import SectionHeading from '../../common/section-heading/SectionHeading';
  import Button from '../../common/button/Button';
  import Image from 'next/image'; 
  import Link from 'next/link';
  const tabsData = [
    {
      label: 'Web Design',
      subcontent: [
        {
          heading: 'Figma Design',
          img: '/images/services-icon-figma.svg',
          width:84,
          height:84,
          link:'/web-design#figmaDesign',
          content: 'Craft stunning visual designs and prototypes using Figma, ensuring seamless collaboration and feedback.'
        },
        {
          heading: 'Logo Design',
          img: '/images/services-icon-logo-design.svg',
          width:84,
          height:85,
          link:'/web-design#logoDesign',
          content: 'Create memorable and impactful logos that resonate with your brand’s identity and values.'
        },
        {
          heading: 'Website Design',
          width:78,
          height:77,
          link:'/web-design#websiteDesign',
          img: '/images/services-icon-website-design.svg',
          content: 'Design responsive, user-friendly websites tailored to your business needs, enhancing online presence.'
        },
        {
          heading: 'Secure Hosting',
          img: '/images/services-icon-secure-hosting.svg',
          width:78,
          height:79,
          link:'/web-design#secureHosting',
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
          img: '/images/services-icon-figma.svg',
          width:84,
          height:84,
          link:'/app-design#figmaDesign',
          content: 'We utilize Figma, a leading collaborative design tool, to create high-fidelity wireframes.'
        },
        {
          heading: 'Logo Design',
          img: '/images/services-icon-logo-design.svg',
          width:84,
          height:84,
          link:'/app-design#logoDesign',
          content: 'Your app’s logo is a critical element of its brand identity. Our logo design process ensures it stands out.'
        },
        {
          heading: 'UI/UX Design',
          width:85,
          height:85,
          link:'/app-design#UIUXDesign',
          img: '/images/services-icon-ux.svg',
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
          img: '/images/services-icon-cloud.svg',
          width:121,
          height:85,
          link:'/it-training#cloudDevOpsTraining',
          content: 'Our Cloud & DevOps training focuses on modern practices and tools used to streamline development.'
        },
        {
          heading: 'Web Development',
          img: '/images/services-icon-website-design.svg',
          width:78,
          height:77,
          link:'/it-training#webDevelopmentTraining',
          content: 'Our Web Development training provides comprehensive instruction on creating and managing websites.'
        },
        {
          heading: 'AI/ML Training',
          img: '/images/services-icon-aiml.svg',
          width:86,
          height:86,
          link:'/it-training#AIMLTraining',
          content: 'Our AI/ML training is designed to introduce participants to artificial intelligence and machine learning concepts and techniques.'
        },
        {
          heading: 'IoT Training',
          img: '/images/services-icon-iot.svg',
          width:78,
          height:74,
          link:'/it-training#IotTraining',
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
          img: '/images/services-icon-cloud.svg',
          width:121,
          height:85,
          link:'/it-consulting#cloudIntegration',
          content: 'Our Cloud Integration services focus on seamlessly connecting your on-premises systems with cloud-based solutions.'
        },
        {
          heading: 'Cloud Migration',
          img: '/images/services-icon-cloud-inetgration.svg',
          width:121,
          height:85,
          link:'/it-consulting#cloudMigration',
          content: 'Our Cloud Migration services assist organizations in moving their IT resources from on-premises to cloud environments.'
        },
        {
          heading: 'DevOps',
          img: '/images/services-icon-devops.svg',
          width:185,
          height:83,
          link:'/it-consulting#devOps',
          content: 'Our DevOps consultancy focuses on implementing and optimizing DevOps practices to improve collaboration.'
        },
        {
          heading: 'Web Development',
          img: '/images/services-icon-website-design.svg',
          width:78,
          height:77,
          link:'/it-consulting#webDevelopment',
          content: 'Our Web Development consultancy provides expert advice and solutions for building and enhancing Web Apps & websites.'
        },
      ],
      link:'/it-consulting'
    },
    {
      label: 'Master Classes',
      subcontent: [
        {
          heading: 'Tools Master Class',
          img: '/images/services-icon-website-design.svg',
          width:78,
          height:77,
          link:'/master-classes#toolsMasterClass',
          content: 'Our Tools Master Class provides comprehensive training on essential tools used in modern development and operations.'
        },
        {
          heading: 'Cloud Certification Master Class',
          img: '/images/services-icon-cloud.svg',
          width:121,
          height:85,
          link:'/master-classes#cloudCertificationMasterClass',
          content: 'Our Cloud Certification Master Class prepares participants for certification exams and provides hands-on experience with major cloud platforms.'
        },
        {
          heading: 'Database Master Class',
          img: '/images/services-icon-secure-hosting.svg',
          width:78,
          height:79,
          link:'/master-classes#databaseMasterClass',
          content: 'Our Database Master Class covers key database technologies and their applications.'
        },
        {
          heading: 'Full Stack Master Class',
          img: '/images/services-icon-mern.svg',
          width:95,
          height:86,
          link:'/master-classes#fullStackMasterClass',
          content: 'Our Full Stack Master Class provides training on building end-to-end web applications using popular technology stacks.'
        },
      ],
      link:'/master-classes'
    },
  ];

  function Services() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    return (
      <section className='py-12 bg-secondary overflow-hidden' >
        <div className='container mx-auto'>
          <SectionHeading subheading="Our Services" heading="Anything tech, Everything tech!" align="text-center" line="mx-auto" /> 
          <div className="flex flex-col px-6 xl:px-0 mb-6 xl:flex-row xl:space-x-3 justify-center">
            {tabsData.map((tab, idx) => (
              <button
                key={idx}
                className={`p-4 text-tabs mb-2 transition-colors duration-300 rounded-2xl ${
                  idx === activeTabIndex
                    ? 'bg-secondarytext-white border-2 border-secondary-dark'
                    : 'bg-white text-primary border-2 border-white'
                }`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col px-6 xl:px-0 xl:flex-row xl:space-x-6 justify-center">
            {tabsData[activeTabIndex].subcontent.map((item, idx) => (
              <div  key={`${activeTabIndex}-${idx}`} className='p-6 bg-white border-2 border-white mb-6 rounded-2xl hover:bg-secondary  hover:border-secondary-dark transition ease-in-out w-full xl:w-1/4 min-h-tabs-content-small'>
                <div className='py-6 flex justify-center'>
                  <div  style={{ width: item.width, height: item.height }}>
                    <Image
                      src={item.img}
                      alt={item.heading}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      style={{ objectFit: 'cover' }} // Ensures the image covers the given dimensions
                    /> 
                  </div>
                </div>
                <div className='min-h-tabs-subheading-small'>
                <h3 className='text-tabs font-semibold text-center'>
                <Link href={item.link} >
                         {item.heading}
                   </Link>
                </h3>
                 
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