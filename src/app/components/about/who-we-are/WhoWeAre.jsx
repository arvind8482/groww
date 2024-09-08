'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/SectionHeadingTwoLine'
import { motion } from 'framer-motion'

const WhoWeAre = () => {
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
      <section className='py-5 xl:py-20 px-8 xl:px-0  bg-secondary'>
        <div className='container xl:px-6 xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <SectionHeadingTwoLine align="text-start" line="text-start" heading="Who We Are" />
            <p className='text-default-size'>
              VisionGroww is a premier digital solutions provider committed to helping businesses achieve their goals through innovative and customized solutions. With a focus on quality and customer satisfaction, we bring together a team of highly skilled professionals with extensive experience in various technologies. Our mission is to empower your business with cutting-edge digital solutions that drive growth and success.
            </p>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
          >
            <Image
              src="/images/img-whoweare.svg"
              className='w-full'
              alt=''
              width={603}
              height={412}
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre;
