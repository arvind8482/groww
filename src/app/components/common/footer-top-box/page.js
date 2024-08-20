import React from 'react'

function FooterTopBox() {
  return (
     <>
         <section className='px-6 py-8'>
                <div className='container mx-auto rounded-2xl bg-gradient-to-r from-gradient-top to-gradient-bottom'>
                       <div className='flex flex-col xl:flex-row items-center justify-center'>
                                <div className='flex items-center w-full xl:w-5/12 border-0 xl:border-e xl:border-light-black p-8'>
                                    <img src='images/icon-call.png' alt='' className='mx-6' />
                                    <div>
                                    <span className='text-xl'> Call For More Info</span>
                                    <h2 className='text-contact-box-footer-small xl:text-contact-box-footer font-bold'>+91 1234567890</h2>
                                    </div>
                                </div>
                                <div className=' w-full xl:w-7/12 flex flex-col justify-center  p-8'>
                                     <h2 className='text-contact-box-footer-small xl:text-contact-box-footer font-medium mb-4 text-center'>Let’s Request a Schedule For Free Consultation</h2>
                                    <div className='text-center'>
                                    <a href="#" className="text-xl text-center rounded-full w-3/12 font-semibold px-7 border border-2 border-primary py-2 text-primary hover:bg-primary hover:text-white">
            Contact Us 
          </a>
                                    </div>
                                </div>
                       </div>
                </div>
         </section>
     </>
  )
}

export default FooterTopBox