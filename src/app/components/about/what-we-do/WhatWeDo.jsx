'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/SectionHeadingTwoLine'
function WhatWeDo() {
  return (
    <>
     <section className='py-20 bg-white'>
            <div className='container px-6 xl:px-0  mx-auto flex flex-col xl:flex-row xl:items-center'>
            <div className='w-full xl:w-1/2'>
            <Image
      src="/images/img-whatwedo.png"
      width={618}
      height={644}
      alt="" className='w-full' 
    /> 
                    </div>
                <div className='w-full xl:w-1/2'>
            
                    <SectionHeadingTwoLine align="text-start" line="text-start" heading="What We Do" />
                    <p className='text-default-size '>
                    At VisionGroww, we specialize in delivering top-tier IT services to help your business excel in the digital age. Our diverse offerings include:
                      </p>
                      <ul className='text-default-size list-disc ps-6 py-6 '>
                            <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Web Design: </strong>We create responsive, user-friendly websites tailored to your business needs, along with stunning visual designs and memorable logos to enhance your online presence. Enjoy robust secure hosting with three months of free maintenance to ensure your website&apos;s performance.</li>
                            <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>App Design (Android/iOS) :</strong> We design intuitive app interfaces and distinctive logos, prioritizing exceptional user experiences. Our app designs also include three months of maintenance for optimal performance.</li>
                            <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>IT Training :</strong> Our specialized training programs cover Cloud & DevOps (AWS, Azure, GCP), Web Development, AI/ML, and IoT, helping you master essential skills for today&apos;s tech landscape.</li>
                            <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>IT Consultancy :</strong> We provide expert guidance on Cloud Integration, Cloud Migration, DevOps implementation, and web development, ensuring your projects achieve maximum efficiency and success.</li>
                            <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Master Classes :</strong>  Elevate your expertise with our hands-on master classes in Data Science, essential DevOps tools, Cloud Certification preparation, Full Stack Development, and Database Management.</li>
                        </ul>
                </div>
              
            </div>
            <p className='text-default-size pt-8 px-6 text-center'>
                At VisionGroww, we&apos;re dedicated to turning your vision into reality with our commitment to excellence and innovation. Let&apos;s build something amazing together!
                </p>
        </section>
    </>
  )
}

export default WhatWeDo