'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function WhatMasterClasses() {
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
      <section className='py-20 bg-secondary'>
        <motion.div
          className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
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
              src='/images/img-softwaredevelopment.png'
              className='w-full xl:w-4/5'
              alt=''
              width={580}
              height={469}
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary'>Tools Master Class</h2>
            <p className='text-default-size'>
              Our Tools Master Class provides comprehensive training on essential tools used in modern
              development and operations. This includes:
            </p>
            <ul className='text-default-size ps-6 py-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Docker:</strong> Learn containerization concepts, creating and managing containers, and using Docker for development and deployment.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Kubernetes:</strong> Understand container orchestration, deploying and managing containerized applications with Kubernetes.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Jenkins:</strong> Explore continuous integration and continuous delivery (CI/CD) pipelines, automating build and deployment processes with Jenkins.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Terraform:</strong> Master infrastructure as code (IaC) with Terraform, including provisioning and managing cloud resources.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Grafana:</strong> Learn to create dashboards and visualizations for monitoring and analyzing metrics with Grafana.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Prometheus:</strong> Understand metrics collection and monitoring with Prometheus, and integrate it with Grafana for advanced data visualization.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>GitHub:</strong> Gain skills in version control, collaboration, and code management using GitHub.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>GitLab:</strong> Explore version control, CI/CD pipelines, and project management features in GitLab.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Bitbucket:</strong> Learn version control and repository management with Bitbucket, and integrate it with other development tools.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary'>Cloud Certification Master Class</h2>
            <p className='text-default-size'>
              Our Cloud Certification Master Class prepares participants for certification exams and provides
              hands-on experience with major cloud platforms. This includes:
            </p>
            <ul className='text-default-size ps-6 py-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>AWS (Amazon Web Services):</strong> Comprehensive training on AWS services, architecture, and best practices, preparing for AWS certification exams.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Azure:</strong> Learn about Microsoft Azure services, solutions, and architecture, with preparation for Azure certification exams.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>GCP (Google Cloud Platform):</strong> Understand Google Cloud services, tools, and best practices, preparing for GCP certification exams.</li>
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <Image
              src='/images/img-cloud-migrats.png'
              className='w-full xl:w-4/5 xl:ms-auto'
              alt=''
              width={472}
              height={399}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
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
              src='/images/web-design-hosting.png'
              className='w-full xl:w-3/5 xl:me-auto'
              alt=''
              width={406}
              height={511}
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary'>Database Master Class</h2>
            <p className='text-default-size'>
              Our Database Master Class covers key database technologies and their applications. This
              includes:
            </p>
            <ul className='text-default-size ps-6 py-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>MySQL:</strong> Learn relational database management with MySQL, including design, queries, and optimization.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>PostgreSQL:</strong> Gain expertise in PostgreSQL, an advanced relational database with support for complex queries and data types.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>MongoDB:</strong> Understand NoSQL databases with MongoDB, including schema design, data modeling, and query operations.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>MariaDB:</strong> Explore MariaDB as an alternative to MySQL, focusing on features, performance, and replication.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <h2 className='text-servicedubheading text-primary'>Full Stack Master Class</h2>
            <p className='text-default-size'>
              Our Full Stack Master Class provides training on building end-to-end web applications using
              popular technology stacks. This includes:
            </p>
            <ul className='text-default-size ps-6 py-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>MERN Stack:</strong> Master the MERN stack (MongoDB, Express.js, React, Node.js) for developing modern web applications with a JavaScript-based stack.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>MEAN Stack:</strong> Explore the MEAN stack (MongoDB, Express.js, Angular, Node.js) for building scalable web applications with a focus on Angular.</li>
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={itemVariants}
          >
            <Image
              src='/images/img-fullstack.png'
              className='w-full xl:w-4/5 xl:ms-auto'
              alt=''
              width={566}
              height={548}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className='container px-6 py-12 text-center xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <p>
            Each master class is designed to provide participants with practical, hands-on experience and
            expert knowledge, equipping them with the skills needed to excel in their respective fields.
            Visiongroww is dedicated to delivering high-quality training that meets the needs of today’s
            technology professionals.
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default WhatMasterClasses
