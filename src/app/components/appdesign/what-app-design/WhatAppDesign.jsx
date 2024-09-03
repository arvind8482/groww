'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function WhatAppDesign() {
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
        <div className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6 border-b-2 border-light-black'>
          <motion.div
            className='w-full xl:w-1/2'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.div variants={imageVariants}>
              <Image
                src='/images/web-design-figma.svg'
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
              className='text-servicedubheading text-primary  mt-2 xl:mt-0'
              variants={textVariants}
            >
              Figma Design
            </motion.h2>
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              We utilize Figma, a leading collaborative design tool, to create high-fidelity wireframes and interactive prototypes for your mobile application. This process includes:
            </motion.p>
            <motion.ul
              className='text-default-size  ps-0 xl:ps-6  xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Conceptualization :</strong> Translating your ideas into visual representations.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Interactive Prototypes :</strong> Developing interactive models to demonstrate the app&apos;s flow and functionality.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Real-Time Collaboration :</strong> Working closely with you to refine designs and ensure alignment with your vision.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Detailed Specifications :</strong> Providing detailed design specifications to guide the development process.
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
              Your app&apos;s logo is a critical element of its brand identity. Our logo design process involves:
            </motion.p>
            <motion.ul
              className='text-default-size  ps-0 xl:ps-6  xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Brand Discovery :</strong> Understanding your app&apos;s purpose, target audience, and brand personality.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Concept Generation :</strong> Creating multiple logo concepts that embody your app&apos;s essence.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Feedback & Refinement :</strong> Collaborating with you to select and refine the best concept.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Final Delivery :</strong> Providing the finalized logo in various formats for use across different platforms.
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
                src='/images/web-design-logo.svg'
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
                src='/images/web-design-website.svg'
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
              UI/UX Design
            </motion.h2>
            <motion.p
              className='text-default-size'
              variants={textVariants}
            >
              User Interface (UI) and User Experience (UX) design are at the heart of our app design services. We focus on creating intuitive and engaging user experiences that keep your users coming back. This includes:
            </motion.p>
            <motion.ul
              className='text-default-size ps-0 xl:ps-6 xl:py-6'
              variants={textVariants}
            >
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>User Research :</strong> Conducting thorough research to understand your users&apos; needs and preferences.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Information Architecture :</strong> Structuring the app&apos;s information in a logical and user-friendly manner.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Wireframing :</strong> Developing wireframes to outline the app&apos;s layout and flow.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Visual Design :</strong> Crafting visually appealing interfaces that align with your brand identity.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Interaction Design :</strong> Designing interactive elements that enhance the user experience.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'>
                <strong>Usability Testing :</strong> Conducting tests to ensure the app is easy to use and navigate.
              </li>
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          className='container xl:px-6 py-5 xl:py-12 text-center xl:px-0 mx-auto'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          By leveraging our expertise in app design, Visiongroww ensures that your mobile application not only stands out in the crowded app market but also provides a seamless and enjoyable user experience. From the initial Figma designs to the final UI/UX touches, we are dedicated to delivering an app that meets your business objectives and exceeds your expectations.
        </motion.div>
      </section>
    </>
  )
}

export default WhatAppDesign
