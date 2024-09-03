'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/SectionHeadingTwoLine'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const listVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <>
      <section className='py-5 xl:py-20 bg-white'>
        <div className='container xl:px-6 xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2 xl:me-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <Image
              src="/images/img-whatwedo.svg"
              className='w-full'
              alt=''
              width={618}
              height={644}
            />
          </motion.div>

          <motion.div
            className='w-full xl:w-1/2 pt-2 xl:pt-0 '
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <SectionHeadingTwoLine align="text-start" line="text-start" heading="Why Choose Us" />
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }}}
              className='text-default-size xl:py-6'
            >
              <motion.li variants={listVariants} className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Expert Team : </strong>Our team comprises highly skilled professionals with extensive experience in various technologies.
              </motion.li>
              <motion.li variants={listVariants} className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Comprehensive Services :</strong>We offer a full suite of services to meet all your digital needs.
              </motion.li>
              <motion.li variants={listVariants} className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Quality Assurance : </strong> We adhere to best practices and industry standards to deliver high-quality products.
              </motion.li>
              <motion.li variants={listVariants} className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Client-Centered Approach :</strong> We value your feedback and work collaboratively to ensure your satisfaction.
              </motion.li>
              <motion.li variants={listVariants} className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Proven Process : </strong> Our well-defined process ensures timely and successful project delivery.
              </motion.li>
              <motion.li variants={listVariants} className='bg-list bg-[left_5px] bg-no-repeat ps-8 xl:pb-6'>
                <strong>Customer Satisfaction : </strong>Our ultimate goal is your satisfaction, and we go the extra mile to ensure your success.
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        <p className='container mx-auto text-default-size pt-8 xl:px-6 text-center'>
          At VisionGroww, we are dedicated to helping your vision grow. Partner with us to transform your ideas into reality with our expertise, creativity, and commitment to excellence. Let’s build something amazing together!
        </p>
      </section>
    </>
  )
}

export default WhyChooseUs
  