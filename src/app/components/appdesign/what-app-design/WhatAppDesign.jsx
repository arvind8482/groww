'use client';
import React from 'react'
import Image from 'next/image' 

function WhatAppDesign() {
  return (
     <>
           <section className='py-20 bg-secondary'>
                <div className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
                <div className='w-full xl:w-1/2'>
                <Image
src='/images/web-design-figma.png' className='w-full xl:w-4/5' alt=''
      width={432}
      height={244} 
    /> 
                </div>
                <div className='w-full xl:w-1/2'>
                     <h2 className='text-servicedubheading text-primary '>Figma Design</h2>
                    <p className='text-default-size '>
                    We utilize Figma, a leading collaborative design tool, to create high-fidelity wireframes and interactive prototypes for your mobile application. This process includes:

                       </p>
                      <ul className='text-default-size   ps-6 py-6 '>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Conceptualization :</strong> Translating your ideas into visual representations.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Interactive Prototypes :</strong> Developing interactive models to demonstrate the app&apos;s flow
and functionality.
</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Real-Time Collaboration :</strong> Working closely with you to refine designs and ensure
alignment with your vision.
</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Detailed Specifications :</strong> Providing detailed design specifications to guide the
development process.
</li> 
                     </ul>
                </div>
               
                </div>
                <div className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
               
                <div className='w-full xl:w-1/2'>
                     <h2 className='text-servicedubheading text-primary '>Logo Design</h2>
                    <p className='text-default-size '>
                    Your app&apos;s logo is a critical element of its brand identity. Our logo design process involves:
                       </p>
                       <ul className='text-default-size   ps-6 py-6 '>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Brand Discovery :</strong> Understanding your app&apos;s purpose, target audience, and brand
                         personality</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Concept Generation :</strong> Creating multiple logo concepts that embody your app&apos;s essence.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Feedback & Refinement :</strong> Collaborating with you to select and refine the best concept.
                         </li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Final Delivery :</strong>  Providing the finalized logo in various formats for use across different
platforms.
</li> 
                     </ul>
                </div>
                <div className='w-full xl:w-1/2'>
                <Image
src='/images/web-design-logo.png' className='w-full xl:w-4/5 xl:ms-auto' alt=''
      width={317}
      height={329} 
    /> 
                </div>
               
                </div>
                <div className='container px-6 py-12 border-b-2 border-light-black xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
                <div className='w-full xl:w-1/2'>
               <Image
src='/images/web-design-website.png' className='w-full xl:w-3/5  xl:me-auto' alt=''
     width={432}
     height={244} 
   /> 
               </div>
               <div className='w-full xl:w-1/2'>
                    <h2 className='text-servicedubheading text-primary '>UI/UX Design</h2>
                   <p className='text-default-size '>
                   User Interface (UI) and User Experience (UX) design are at the heart of our app design
services. We focus on creating intuitive and engaging user experiences that keep your users
coming back. This includes:
                   </p>
                   <ul className='text-default-size   ps-6 py-6 '>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>User Research :</strong>Conducting thorough research to understand your users&apos; needs and
preferences.
</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Information Architecture :</strong> Structuring the app&apos;s information in a logical and
user-friendly manner.
 </li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Wireframing :</strong>Developing wireframes to outline the app&apos;s layout and flow.
                         </li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Visual Design : </strong>Crafting visually appealing interfaces that align with your brand identity.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Interaction Design :</strong> : Designing interactive elements that enhance the user experience.
                         </li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Usability Testing : </strong>Conducting tests to ensure the app is easy to use and navigate.
                         </li> 
                     </ul>
               </div>
           
              
               </div>
               <div className='container px-6 py-12 text-center  xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
               
               By leveraging our expertise in app design, Visiongroww ensures that your mobile application not only stands out in the crowded app market but also provides a seamless and enjoyable user experience. From the initial Figma designs to the final UI/UX touches, we are dedicated to delivering an app that meets your business objectives and exceeds your expectations.

              
               </div> 
           </section>
     </>
  )
}

export default WhatAppDesign