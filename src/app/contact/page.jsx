'use client';  
import React from 'react';
import Link from 'next/link'
import Image from 'next/image' 
import SectionHeading from '../components/common/section-heading/SectionHeading'
import SectionHeadingTwoLine from '../components/common/section-heading-twoline/SectionHeadingTwoLine'
import ContactForm from '../components/contact/contact-form/ContactForm' 
import { motion } from 'framer-motion'

function Page() {
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
      <section className='py-5 xl:py-20 px-8 xl:px-0 bg-white'>
        <motion.div
          className='container mx-auto'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionHeading subheading="Contact Us" heading="What We Offer" align="text-center" line="mx-auto" /> 
          <div className='flex flex-col xl:flex-row xl:space-x-6'>
            <motion.div
              className='w-full xl:w-9/12 mb-6 xl:mb-0'
              variants={itemVariants}
            >
              <div className='shadow-md rounded-2xl p-6 mb-6'>
                <SectionHeadingTwoLine heading="Get in Touch" line="me-auto" />
                <p className='text-default text-primary mb-6'>
                  Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours. 
                </p>
                <ContactForm />
              </div>
            </motion.div>
            <motion.div
              className='w-full xl:w-3/12'
              variants={itemVariants}
            >
              <div className='shadow-md rounded-2xl p-6 mb-6 flex space-x-6 items-center'>
                <div>
                  <Image
                    src="/images/contact-map.png"
                    width={46}
                    height={60}
                    alt="Contact Map"
                  />
                </div>
                <div className='text-default text-primary font-semibold'>Rambagh Agra 282006</div>
              </div>
              <div className='shadow-md rounded-2xl p-6 mb-6 flex space-x-6 items-center'>
                <div>
                  <Image
                    src="/images/contact-call.png"
                    width={48}
                    height={48}
                    alt="Contact Call"
                  />
                </div>
                <div className='text-default text-primary font-semibold'>
                  <Link href="tel:+911234567890">+91 1234567890</Link>
                </div>
              </div>
              <div className='shadow-md rounded-2xl p-6 mb-6 flex space-x-6 items-center'>
                <div>
                  <Image
                    src="/images/contact-mail.png"
                    width={57}
                    height={46}
                    alt="Contact Mail"
                  />
                </div>
                <div className='text-default text-primary font-semibold'>
                  <Link href="mailto:info@visiongroww.com">info@visiongroww.com</Link>
                </div>
              </div>
              <Image
                src="/images/contact-img.png"
                width={402}
                height={285}
                alt="Contact Image"
                className='img-full rounded-xl'
              />
            </motion.div>
          </div>
          <motion.div
            className='mt-8'
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14193.619771897558!2d78.03680536545787!3d27.206433357370376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747096a4ed7593%3A0x47f7f8807dd3bb4d!2sRambagh%2C%20Trans%20Yamuna%20Colony%2C%20Agra%2C%20Uttar%20Pradesh%20282006!5e0!3m2!1sen!2sin!4v1724227124715!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Page;
