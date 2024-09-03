'use client';
import React from 'react';
import Image from 'next/image';
import SectionHeading from '../../common/section-heading/SectionHeading';
import Button from '../../common/button/Button';
import { motion } from 'framer-motion';

const fadeInRight = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function AboutUs() {
  return (
    <>
      <section className='py-20 px-8 xl:px-0 bg-secondary overflow-hidden'>
        <div className='container mx-auto flex flex-col xl:flex-row xl:space-x-6'>
          <motion.div className='w-full xl:w-1/2' initial="hidden" whileInView="visible" variants={fadeInRight} viewport={{ once: true }}>
            <Image
              src="/images/img-about.svg"
              className='w-full mb-6 xl:mb-0'
              width={619}
              height={368}
              alt=" VisionGroww is a dynamic and innovative IT solutions provider dedicated to delivering top-notch services in web and app design"
            />
          </motion.div>
          <motion.div className='w-full xl:w-1/2' initial="hidden" whileInView="visible" variants={fadeInLeft} viewport={{ once: true }}>
            <SectionHeading subheading="About Us" heading="What We Offer" align="text-left" line="mx-none" />
            <p className='text-default-size'>
              VisionGroww is a dynamic and innovative IT solutions provider dedicated to delivering top-notch services in web and app design, IT training, consultancy, and master classes. Our expert team is committed to helping businesses thrive in the digital age by offering comprehensive and customized solutions. At VisionGroww, we combine creativity, technology, and expertise to drive growth and success for our clients.
            </p>
            <div className='pt-10'>
              <Button href="/about" text="More about us!" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
