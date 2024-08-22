'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/SectionHeadingTwoLine'

function WhyChooseUs() {
  return (
     <>
            <section className='py-20 bg-white'>
            <div className='container px-6 xl:px-0  mx-auto flex flex-col xl:flex-row xl:items-center'>
            <div className='w-full xl:w-1/2'>
            <Image
      src="/images/img-whatwedo.png"  className='w-full'  alt=''
      width={618}
      height={644} 
    /> 
                    </div>
                <div className='w-full xl:w-1/2'>
            
                    <SectionHeadingTwoLine align="text-start" line="text-start" heading="Why Choose Us" />
                 
                      <ul className='text-default-size  ps-6 py-6 '>
                           <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Expert Team : </strong>Our team comprises highly skilled professionals with extensive experience in various technologies.</li>
                           <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Comprehensive Services :</strong>We offer a full suite of services to meet all your digital needs.</li>
                           <li  className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Quality Assurance : </strong> We adhere to best practices and industry standards to deliver high-quality products.</li>
                           <li  className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Client-Centered Approach :</strong> We value your feedback and work collaboratively to ensure your satisfaction.</li>
                           <li  className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Proven Process : </strong> Our well-defined process ensures timely and successful project delivery.</li>
                           <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Customer Satisfaction : </strong>Our ultimate goal is your satisfaction, and we go the extra mile to ensure your success.</li>
                   </ul>
                </div>
              
            </div>
            <p className='container mx-auto text-default-size pt-8 px-6 text-center'>
            At VisionGroww, we are dedicated to helping your vision grow. Partner with us to transform your ideas into reality with our expertise, creativity, and commitment to excellence. Let’s build something amazing together!
                </p>
        </section> 
     </>
  )
}

export default WhyChooseUs