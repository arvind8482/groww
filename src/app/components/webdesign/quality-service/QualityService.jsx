'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function QualityService() {
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
      <section className='py-5 xl:py-20 bg-secondary'>
        <div className='container xl:px-6 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div variants={imageVariants}>
              <Image
                src='/images/web-design-figma.png'
                className='w-full xl:w-4/5'
                alt=''
                width={432}
                height={244}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2
              className='text-servicedubheading text-primary mt-2 xl:mt-0'
              variants={textVariants}
            >
              Figma Design
            </motion.h2>
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              We use Figma, a leading design tool, to create high-fidelity wireframes and prototypes for your website. This allows us to:
            </motion.p>
            <motion.ul
              className='text-default-size ps-0 xl:ps-6  xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Visualize and Plan : </strong>Map out the entire user experience before any code is written.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Collaborate in Real-Time : </strong>Work closely with you to make real-time adjustments and ensure your vision is accurately represented.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Ensure Consistency : </strong>Maintain design consistency across all pages and elements, ensuring a cohesive look and feel.
              </li>
            </motion.ul>
          </motion.div>
        </div>

        <div className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2
              className='text-servicedubheading text-primary  mt-2 xl:mt-0'
              variants={textVariants}
            >
              Logo Design
            </motion.h2>
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              Your logo is the face of your brand, and we take its design seriously. Our logo design services include:
            </motion.p>
            <motion.ul
              className='text-default-size ps-0 xl:ps-6  xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Brand Analysis :</strong> Understand your brand&apos;s personality, values, and target audience
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Concept Development : </strong>Create multiple logo concepts that reflect your brand identity.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Refinement :</strong>Fine-tune the selected concept based on your feedback to ensure it perfectly represents your brand.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Versatility :</strong>Deliver the final logo in various formats suitable for both digital and print use.
              </li>
            </motion.ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div variants={imageVariants}>
              <Image
                src='/images/web-design-logo.png'
                className='w-full xl:w-4/5 xl:ms-auto'
                alt=''
                width={317}
                height={329}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div variants={imageVariants}>
              <Image
                src='/images/web-design-website.png'
                className='w-full xl:w-3/5 xl:me-auto'
                alt=''
                width={432}
                height={244}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2
              className='text-servicedubheading text-primary  mt-2 xl:mt-0'
              variants={textVariants}
            >
              Website Design
            </motion.h2>
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              Our website design services encompass the entire process of creating a website, from initial concept to final launch. This includes:
            </motion.p>
            <motion.ul
              className='text-default-size ps-0 xl:ps-6 xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Custom Design :</strong> Craft unique, tailored website designs that align with your brand and goals.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Responsive Design :</strong> Ensure your website looks great and functions well on all devices, including desktops, tablets, and smartphones.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>User Experience (UX) :</strong> Focus on creating intuitive and engaging user experiences that encourage visitors to stay and interact with your content.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>User Interface (UI) :</strong> Design visually appealing interfaces that are easy to navigate and aesthetically pleasing.
              </li>
            </motion.ul>
          </motion.div>
        </div>

        <div className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2
              className='text-servicedubheading text-primary  mt-2 xl:mt-0'
              variants={textVariants}
            >
              Secure Hosting & 3 Months of Free Maintenance
            </motion.h2>
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              To ensure your website is always online and performing at its best, we offer secure hosting and ongoing maintenance services:
            </motion.p>
            <motion.ul
              className='text-default-size ps-0 xl:ps-6  xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Secure Hosting : </strong> Provide reliable, secure, and fast hosting solutions that protect your website from cyber threats and ensure optimal performance
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Regular Updates :</strong> Keep your website up-to-date with the latest security patches and feature enhancements.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Performance Monitoring : </strong> Continuously monitor your website&apos;s performance to identify and resolve any issues promptly.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Support & Maintenance :</strong> Offer three months of free maintenance, including technical support and minor updates, to ensure your website remains in top condition post-launch.
              </li>
            </motion.ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div variants={imageVariants}>
              <Image
                src='/images/web-design-hosting.png'
                className='w-full xl:w-3/5 xl:ms-auto'
                alt=''
                width={406}
                height={511}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className='container xl:px-6 py-5 xl:py-12 text-center xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            With Visiongroww&apos;s web design services, you can be confident that your online presence will be professionally crafted, secure, and maintained to the highest standards. Let us help you create a website that not only meets but exceeds your expectations.
          </motion.p>
        </div>
      </section>
    </>
  )
}

export default QualityService
