'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function FooterTopBox() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className='px-6 py-8'>
        <motion.div
          className='container mx-auto rounded-2xl bg-gradient-to-r from-gradient-top to-gradient-bottom'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className='flex flex-col xl:flex-row items-center justify-center'>
            <motion.div
              className='flex flex-col xl:flex-row items-center w-full xl:w-5/12 border-0 xl:border-e xl:border-light-black py-8 xl:py-0 xl:p-8'
              variants={containerVariants}
            >
              <Image
                src='/images/icon-call.svg' 
                alt='' 
                className='mx-6'  
                width={63} 
                height={63}
              />
              <div>
                <span className='text-xl'> Call/Whatsapp</span>
                <h2 className='text-contact-box-footer-small xl:text-contact-box-footer font-bold'>+91 9193924595</h2>
              </div>
            </motion.div>
            <motion.div
              className='w-full xl:w-7/12 flex flex-col justify-center p-8 pt-0 xl:p-8'
              variants={containerVariants}
            >
              <h2 className='text-contact-box-footer-small xl:text-contact-box-footer font-medium mb-4 text-center'>
                Let’s Request a Schedule For Free Consultation
              </h2>
              <div className='text-center'>
                <Link 
                  href="/contact"  
                  className="text-xl text-center rounded-full w-3/12 font-semibold px-7 border border-2 border-primary py-2 text-primary hover:bg-primary hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default FooterTopBox;
