'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function WhatItTraining() {
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
        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'  id='cloudDevOpsTraining'
            variants={imageVariants}
          >
            <Image
              src='/images/img-cloudtraining.svg'
              className='w-full xl:w-3/5'
              alt=''
              width={632}
              height={632}
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2' 
            variants={textVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0'>Cloud & DevOps Training</h2>
            <p className='text-default-size'>
              Our Cloud & DevOps training focuses on modern practices and tools used to streamline
              development and operations processes in cloud environments. This includes:
            </p>
            <ul className='text-default-size ps-0 pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Cloud Computing Fundamentals:</strong> Understand cloud computing concepts, architecture, and service models (IaaS, PaaS, SaaS).</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Major Cloud Platforms:</strong> Gain hands-on experience with major cloud providers like AWS, Azure, and Google Cloud Platform.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>DevOps Principles:</strong> Learn about continuous integration and continuous deployment (CI/CD), infrastructure as code (IaC), and automation tools.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Containerization & Orchestration:</strong> Explore tools like Docker and Kubernetes for container management and orchestration.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Monitoring & Logging:</strong> Implement monitoring and logging solutions to ensure application reliability and performance.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'
          initial="hidden"  id='webDevelopmentTraining'
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div
            className='w-full xl:w-1/2' 
            variants={textVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0'>Web Development Training</h2>
            <p className='text-default-size'>
              Our Web Development training provides comprehensive instruction on creating and managing websites and web applications. This includes:
            </p>
            <ul className='text-default-size ps-0 pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Front-End Development:</strong> Learn HTML, CSS, and JavaScript to build responsive and interactive user interfaces.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Back-End Development:</strong> Understand server-side programming with languages like Node.js, Python, Ruby, or PHP.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Full-Stack Development:</strong> Gain skills in both front-end and back-end development, and learn to build complete web applications.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Frameworks & Libraries:</strong> Get hands-on experience with popular frameworks and libraries like React, Angular, Vue.js, and Express.js.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Database Management:</strong> Learn to work with databases, including SQL (MySQL, PostgreSQL) and NoSQL (MongoDB).</li>
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={imageVariants}
          >
            <Image
              src='/images/img-webdevelopment.svg'
              className='w-full xl:w-3/5 xl:ms-auto'
              alt=''
              width={317}
              height={329}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"
          whileInView="visible"   id='AIMLTraining'
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={imageVariants}
          >
            <Image
              src='/images/img-ai.svg'
              className='w-full xl:w-3/5 xl:me-auto'
              alt=''
              width={860}
              height={836}
            />
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={textVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0 '>AI/ML Training</h2>
            <p className='text-default-size'>
              Our AI/ML training is designed to introduce participants to artificial intelligence and machine learning concepts and techniques. This includes:
            </p>
            <ul className='text-default-size pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Introduction to AI/ML:</strong> Understand the fundamentals of artificial intelligence and machine learning.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Machine Learning Algorithms:</strong> Learn about supervised and unsupervised learning, including algorithms like linear regression, decision trees, and clustering.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Deep Learning:</strong> Explore neural networks, deep learning architectures, and frameworks like TensorFlow and PyTorch.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Data Preparation & Analysis:</strong> Gain skills in data preprocessing, feature engineering, and data visualization.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Real-World Applications:</strong> Apply AI/ML techniques to real-world problems and use cases.</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className='container xl:px-6 py-5 xl:py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col-reverse xl:flex-row xl:items-center'
          initial="hidden"   id='IotTraining'
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.div
            className='w-full xl:w-1/2'
            variants={textVariants}
          >
            <h2 className='text-servicedubheading text-primary mt-2 xl:mt-0'>IoT (Internet of Things) Training</h2>
            <p className='text-default-size'>
            Our IoT training focuses on the development and implementation of interconnected devices and systems. This includes:
            </p>
            <ul className='text-default-size ps-0 pt-2 pb-6'>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>IoT Fundamentals :</strong> Understand the basics of IoT, including sensors, actuators, and
              communication protocols</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>IoT Architecture :</strong> Learn about the architecture and components of IoT systems,
including edge computing and cloud integration.
 </li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Device Connectivity : </strong> Explore various connectivity options such as MQTT, CoAP, and
              HTTP.</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Data Collection & Analysis </strong>  Learn to collect, store, and analyze data generated by IoT
devices.
</li>
              <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1'><strong>Security & Privacy :</strong> Understand best practices for securing IoT devices and ensuring
              data privacy.</li>  
            </ul>
          </motion.div>
          <motion.div
            className='w-full xl:w-1/2'
            variants={imageVariants}
          >
            <Image
              src='/images/img-iot.svg'
              className='w-full xl:w-3/5 xl:ms-auto'
              alt=''
              width={317}
              height={329}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className='container xl:px-6 py-5 xl:py-12 text-center xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <p>
          Each of our training programs is designed to be practical, hands-on, and tailored to meet the
specific needs of our clients. By providing comprehensive and up-to-date training, Visiongroww
helps individuals and organizations stay ahead in the dynamic world of IT.
            </p>
        </motion.div>
      </section>
    </>
  )
}

export default WhatItTraining
