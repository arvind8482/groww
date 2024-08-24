'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'
import { motion } from 'framer-motion'

const AboutSection = () => {
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
    <section className='py-20 px-8 xl:px-0 bg-white'>
      <div className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6'>
        <motion.div
          className='w-full xl:w-1/2'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <Image
            src="/images/img-about.png"
            width={619}
            height={368}
            alt=""
          />
        </motion.div>
        <motion.div
          className='w-full xl:w-1/2'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          <SectionHeading subheading="About Us" heading="What We Offer" align="text-left" line="mx-none" />
          <p className='text-default-size'>
            Welcome to VisionGroww, your trusted partner in digital transformation. We specialize in delivering top-notch services across a range of technologies, ensuring your business stands out in the digital landscape. Our comprehensive service offerings and expert team are dedicated to bringing your vision to life with excellence and precision.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection;
