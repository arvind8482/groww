'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '../../common/section-heading/SectionHeading'

function AboutMasterClasses() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className='py-20 px-8 xl:px-0 bg-white'>
        <motion.div
          className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
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
            variants={itemVariants}
          >
            <SectionHeading subheading="About" heading="Master Classes" align="text-left" line="mx-none" />
            <p className='text-default-size'>
              Visiongroww’s Master Classes are designed to provide in-depth knowledge and hands-on
              experience with cutting-edge tools and technologies. Our master classes cover a range of topics
              including development tools, cloud certifications, databases, full-stack development, and data
              science. Here’s a detailed look at each master class offering:
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default AboutMasterClasses
