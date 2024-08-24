'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../../common/button/Button';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function Welcome() {
  return (
    <>
      <section className='py-10 px-6 xl:px-0'>
        <div className='container mx-auto flex flex-col xl:flex-row xl:items-center'>
          <motion.div className='w-full xl:w-1/2' initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            <h1 className='text-welcome-small xl:text-welcome'>Welcome to VisionGroww</h1>
            <p className='text-default-size py-4 xl:py-6'>
              At VisionGroww, we specialize in delivering top-notch IT services to help your business thrive in the digital age. Our comprehensive offerings include Web Design, App Design, IT Training, and IT Consultancy. Let us be your partner in growth and innovation.
            </p>
            <div className='flex flex-col xl:flex-row xl:items-center'>
              <Button href="/contact-us" text="Contact Us" />
              <Button href="/web-design" text="Our Services" />
            </div>
          </motion.div>
          <motion.div className='w-full xl:w-1/2' initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            <Image
              src='/images/img-welcome.jpg'
              className='w-full mt-8 xl:mt-0'
              alt='Welcome Image'
              width={693}
              height={439}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Welcome;
