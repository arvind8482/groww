'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'
import { motion } from 'framer-motion'

const AboutAppDesign = () => {
  // Define animation variants
  const containerVariants = {
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
      <section className='py-5 xl:py-20 px-8 xl:px-0  bg-white'>
        <div className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              variants={imageVariants}
            >
              <Image
                src="/images/img-app-design.svg"
                width={619}   className='w-full xl:w-3/5 '
                height={368}
                alt=""
              />
            </motion.div>
          </motion.div>

          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <SectionHeading
              subheading="What we’ll provide"
              heading="App Design Services (Android/iOS)"
              align="text-left"
              line="mx-none"
            />
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              At Visiongroww, we specialize in creating stunning and user-friendly mobile applications for both Android and iOS platforms. Our app design services encompass everything from initial concept to final deployment, ensuring your app is not only visually appealing but also highly functional. Here’s a detailed look at the components of our app design services:
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutAppDesign
