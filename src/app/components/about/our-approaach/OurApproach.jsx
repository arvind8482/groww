'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/SectionHeadingTwoLine'
import { motion } from 'framer-motion'

const OurApproach = () => {
  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className='py-5   xl:py-20 px-8 xl:px-0  bg-secondary'>
        <div className='container xl:px-6 xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2 pt-2 xl:pt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <SectionHeadingTwoLine align="text-start" line="text-start" heading="Our Approach" />
            <p className='text-default-size'>
              At VisionGroww, our client-centered approach ensures we thoroughly understand your needs and objectives from the very beginning. We work collaboratively with you throughout the project, involving you at every step to ensure the final product aligns with your vision. Our proven process includes:
            </p>
            <ul className='text-default-size py-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Initial Consultation & Requirement Gathering :</strong> We listen to your needs and provide a tailored proposal for web and app design, IT training, or consultancy services.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Planning & Design :</strong> We develop detailed plans and create initial design concepts, ensuring stunning visuals and intuitive user experiences.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Development & Implementation :</strong> We build responsive websites, mobile applications, and implement IT solutions using the latest technologies.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Testing & Quality Assurance :</strong> We ensure all products are polished and free of issues, delivering exceptional quality.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Launch & Deployment :</strong> We make your project live, ensuring seamless performance across platforms.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 xl:pb-6'>
                <strong>Maintenance & Support :</strong> We provide ongoing maintenance and support, including three months of complimentary services, to ensure your project remains optimized and functional.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
          >
            <Image
              src='/images/img-ourapproach.svg'
              className='w-full'
              alt=''
              width={621}
              height={573}
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default OurApproach;
