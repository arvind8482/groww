'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function WhatItConsulting() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className='py-5 xl:py-20 bg-secondary'>
        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"  id='cloudIntegration'
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <Image
              src='/images/img-cloud-integrat.svg'
              className='w-full xl:w-3/5'
              alt=''
              width={764}
              height={716}
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0 '>Cloud Integration</h2>
            <p className='text-default-size'>
              Our Cloud Integration services focus on seamlessly connecting your on-premises systems with
              cloud-based solutions to enhance flexibility and efficiency. This includes:
            </p>
            <ul className='text-default-size  pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Integration Strategy :</strong> Develop a strategy to integrate cloud services with existing IT infrastructure.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>API Management :</strong> Implement and manage APIs to enable smooth communication between cloud applications and on-premises systems.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Data Synchronization :</strong> Ensure real-time data synchronization between cloud and on-premises systems.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Security & Compliance :</strong> Implement security measures and compliance protocols to protect data during and after integration.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Custom Solutions :</strong> Create custom integration solutions tailored to your specific business needs and technology stack.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'
          initial="hidden"  id='cloudMigration'
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2' 
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0'>Cloud Migration</h2>
            <p className='text-default-size'>
              Our Cloud Migration services assist organizations in moving their IT resources from on-premises to cloud environments, ensuring a smooth transition with minimal disruption. This includes:
            </p>
            <ul className='text-default-size  pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Migration Planning :</strong> Develop a detailed migration plan that outlines the scope, timeline, and resources required.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Assessment & Evaluation :</strong> Assess existing IT infrastructure to determine the best cloud migration strategy and target cloud environment (AWS, Azure, Google Cloud).
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Data Migration :</strong> Migrate data and applications to the cloud, ensuring data integrity and minimal downtime.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Application Refactoring :</strong> Refactor or rearchitect applications as needed to optimize performance and compatibility in the cloud environment.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Post-Migration Support :</strong> Provide support and troubleshooting after migration to ensure successful implementation and resolve any issues.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <Image
              src='/images/img-cloud-migrats.svg'
              className='w-full xl:w-3/5 xl:ms-auto'
              alt=''
              width={472}
              height={399}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"  id='devOps'
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <Image
              src='/images/img-cloudtraining.svg'
              className='w-full xl:w-3/5 xl:me-auto'
              alt=''
              width={632}
              height={632}
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2' 
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0'>DevOps</h2>
            <p className='text-default-size'>
              Our DevOps consultancy focuses on implementing and optimizing DevOps practices to improve collaboration, automation, and efficiency in software development and operations. This includes:
            </p>
            <ul className='text-default-size  pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>DevOps Strategy :</strong> Develop a DevOps strategy to align development and operations teams and processes.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>CI/CD Implementation :</strong> Set up Continuous Integration (CI) and Continuous Deployment (CD) pipelines to automate code integration and deployment.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Infrastructure as Code (IaC) :</strong> Implement IaC practices to automate infrastructure provisioning and management.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Monitoring & Logging :</strong> Set up monitoring and logging solutions to track application performance and identify issues.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Best Practices & Tools :</strong> Recommend and implement best practices and tools for effective DevOps practices, including Docker, Kubernetes, Jenkins, and more.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'
          initial="hidden"   id='webDevelopment'
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0'>Web Development</h2>
            <p className='text-default-size'>
              Our Web Development consultancy provides expert advice and solutions for building and enhancing web applications and websites. This includes:
            </p>
            <ul className='text-default-size  pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Requirements Analysis :</strong> Understand your business goals and technical requirements to design a suitable web development strategy.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Technology Stack :</strong> Recommend the best technology stack (front-end and back-end) based on your project needs.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Custom Development :</strong> Develop custom web applications or enhance existing ones to meet your business requirements.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Performance Optimization :</strong> Implement strategies to optimize website performance, including speed, scalability, and responsiveness.
              </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'>
                <strong>Security Measures :</strong> Advise on and implement security best practices to protect your web applications from vulnerabilities and attacks.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <Image
              src='/images/web-design-website.svg'
              className='w-full xl:w-3/5 xl:ms-auto'
              alt=''
              width={432}
              height={244}
            />
          </motion.div>
        </motion.div>

        <div className='container xl:px-6 py-5 xl:py-12 text-center xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
          Visiongroww’s IT consultancy services are designed to provide you with expert advice and solutions to navigate complex IT challenges, enhance your technology infrastructure, and achieve your business objectives.
        </div>
      </section>
    </>
  )
}

export default WhatItConsulting
