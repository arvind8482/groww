'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'
import { motion } from 'framer-motion'

function AboutItTraining() {
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
      <section className='py-5 xl:py-20 px-8 xl:px-0 bg-white'>
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
              src="/images/web-design-1.png"
              width={619}
              height={368}
              alt=""
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={textVariants}
          >
            <SectionHeading subheading="What we’ll provide" heading="IT Training Services" align="text-left" line="mx-none" />
            <p className='text-default-size'>
              At Visiongroww, our IT Training services are designed to equip individuals and teams with the
              skills needed to excel in the ever-evolving tech landscape. Our training programs cover a range
              of topics, including Cloud & DevOps, Web Development, AI/ML, and IoT. Here’s a detailed look
              at each area:
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default AboutItTraining
