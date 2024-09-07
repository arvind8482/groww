'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '../../common/section-heading/SectionHeading'

function WhatWebDesign() {
  // Define animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className='py-5 xl:py-20  bg-white'>
        <motion.div
          className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={imageVariants}
          >
            <Image
              src="/images/web-design-1.svg"
              width={619}   className='w-full xl:w-4/5 '
              height={368}
              alt=""
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={textVariants}
          >
            <SectionHeading subheading="What we’ll provide" heading="In Web Design" align="text-left " line="mx-none" />
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              With Visiongroww&apos;s web design services, you can be confident that your online presence will be professionally crafted, secure, and maintained to the highest standards. Let us help you create a website that not only meets but exceeds your expectations.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default WhatWebDesign
