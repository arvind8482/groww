import React from 'react'
import Button from '../../common/button/page'
function Welcome() {
  return (
     <>
        <section className='py-10 px-6 xl:px-0 '>
                <div className='container mx-auto flex flex-col xl:flex-row xl:items-center'>
                        <div className='w-full xl:w-1/2'> 
                            <h1 className='text-welcome-small xl:text-welcome'>Welcome to VisionGroww</h1>
                            <p className='text-default-size  py-4 xl:py-6'>
                                  At VisionGroww, we specialize in delivering top-notch IT services to help your business thrive in the digital age. Our comprehensive offerings include Web Design, App Design, IT Training, and IT Consultancy. Let us be your partner in growth and innovation.
                            </p>
                            <div className=' flex flex-row xl:items-center'>
                            <Button href="/contact-us" text="Contact Us" /> 
                            <Button href="/web-design" text="Our Services" /> 
                              
                            </div>
                        </div>
                        <div className='w-full xl:w-1/2'>
                            <img src='images/img-welcome.jpg' className='w-full mt-8 xl:mt-0' alt='' />
                        </div>
                </div>
        </section>
     </>
  )
}

export default Welcome