'use client';  
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image' 
import SectionHeading from '../components/common/section-heading/SectionHeading'
import SectionHeadingTwoLine from '../components/common/section-heading-twoline/SectionHeadingTwoLine'
import ContactForm from '../components/contact/contact-form/ContactForm' 

function Page() { 
 
  return (
    <>  
               <section className='py-20 px-8 xl:px-0 bg-white'>
                 <SectionHeading subheading="About Us" heading="What We Offer" align="text-center" line="mx-auto" /> 
                 <div className='container mx-auto flex flex-col xl:flex-row xl:space-x-6'>
                      <div className='w-full xl:w-9/12  mb-6 xl:mb-0'>
                            <div className='shadow-md rounded-2xl p-6 mb-6 '>
                              <SectionHeadingTwoLine heading="Get in Touch" line="me-auto" />
                              <p className='text-default text-primary mb-6'>
                              Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours. 
                              </p>
                            <ContactForm />
                            
                            </div>
                      </div>
                      <div className='w-full xl:w-3/12'>
                      <div className='shadow-md rounded-2xl p-6 mb-6 flex space-x-6 items-center'>
                            <div>
                            <Image
      src="/images/contact-map.png"
      width={46}
      height={60}
      alt="Picture of the author"
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
      alt="Picture of the author"
    />
                            </div>
                            <div className='text-default text-primary font-semibold'><Link href="tel:+911234567890" >+91 1234567890</Link></div>
                      </div>
                      <div className='shadow-md rounded-2xl p-6 mb-6 flex space-x-6 items-center'>
                            <div>
                            <Image
      src="/images/contact-mail.png"
      width={57}
      height={46}
      alt="Picture of the author"
    />
                            </div>
                            <div className='text-default text-primary font-semibold'><Link href="mailto:info@visiongroww.com" >info@visiongroww.com</Link></div>
                      </div>
                      <Image
      src="/images/contact-img.png"
      width={402}
      height={285}
      alt="Picture of the author" className='img-full rounded-xl'
    />
                      </div>
                 </div>
                 <div className='container mx-auto mt-8'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14193.619771897558!2d78.03680536545787!3d27.206433357370376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747096a4ed7593%3A0x47f7f8807dd3bb4d!2sRambagh%2C%20Trans%20Yamuna%20Colony%2C%20Agra%2C%20Uttar%20Pradesh%20282006!5e0!3m2!1sen!2sin!4v1724227124715!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
              </section> 
    </>
  )
}

export default Page