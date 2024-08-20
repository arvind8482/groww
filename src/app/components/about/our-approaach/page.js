import React from 'react'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/page'
function OurApproach() {
  return (
     <>
           <section className='py-20 bg-secondary'>
            <div className='container px-6 xl:px-0 mx-auto flex flex-col xl:flex-row xl:items-center'>
                <div className='w-full xl:w-1/2'>
                    <SectionHeadingTwoLine align="text-start" line="text-start" heading="Our Approach" />
                    <p className='text-default-size '>
                    At VisionGroww, our client-centered approach ensures we thoroughly understand your needs and objectives from the very beginning. We work collaboratively with you throughout the project, involving you at every step to ensure the final product aligns with your vision. Our proven process includes:
                      </p>
                      <ul className='text-default-size   ps-6 py-6 '>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Initial Consultation & Requirement Gathering :</strong>We listen to your needs and provide a tailored proposal for web and app design, IT training, or consultancy services.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Planning & Design :</strong> We develop detailed plans and create initial design concepts, ensuring stunning visuals and intuitive user experiences.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Development & Implementation :</strong>  We build responsive websites, mobile applications, and implement IT solutions using the latest technologies.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Testing & Quality Assurance :</strong> We ensure all products are polished and free of issues, delivering exceptional quality.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Launch & Deployment :</strong> We make your project live, ensuring seamless performance across platforms.</li>
                         <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6'><strong>Maintenance & Support : </strong> We provide ongoing maintenance and support, including three months of complimentary services, to ensure your project remains optimized and functional.</li>
                  </ul>
                </div>
                <div className='w-full xl:w-1/2'>
                    <img src='images/img-ourapproach.png' className='w-full' alt='' />
                </div>
            </div>
        </section>
    </>
  )
}

export default OurApproach