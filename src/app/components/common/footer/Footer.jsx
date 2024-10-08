'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <>
        <footer className='bg-primary py-8 px-6 text-secondary'>
            <div className='container mx-auto flex flex-col xl:flex-row xl:items-center xl:items-stretch'>
                   <div className='w-full xl:w-1/3 border-0 xl:border-e xl:border-light xl:p-6'>
                   <Image
  src='/images/logo-footer.svg'  className='w-[200px] xl:w-[312px] mb-4'  alt='' width={312} height={69}  
    /> 
                           <div className='border-t border-light border-solid py-4 xl:pb-10 text-default-size'>
                            VisionGroww is a dynamic and innovative IT solutions provider dedicated to delivering top-notch services in web and app design, IT training, consultancy, and master classes
                           </div>
                   </div>
                   <div className='w-full xl:w-1/3 border-0  xl:border-e xl:border-light xl:p-6'>
                            <diiv className="flex justify-center space-x-12 xl:space-x-6 xl:justify-between items-top border-b border-t xl:border-0 border-light py-6 xl:p-0">
                                        <div className='flex flex-col text-xl'>
                                            <Link href="/web-design" className='mb-4'>Web Design</Link>
                                            <Link href="/app-design" className='mb-4'>App Design</Link>
                                            <Link href="/it-consulting" className='mb-4'>IT Consulting</Link>
                                            <Link href="/it-training" className='mb-4'>IT Training</Link>
                                            <Link href="/master-classes" className='mb-4'>Master Classes</Link>
                                        </div>
                                        <div className='flex flex-col  text-xl'>
                                           <Link href="/" className='mb-4'>Home</Link> 
                                            <Link href="/about" className='mb-4'>About Us</Link> 
                                        <Link  href="https://medium.com/@ratanshakya999/how-to-create-a-vpc-virtual-private-cloud-in-aws-cloud-9776b55829cc"  target='_blank' className='mb-4'>Blog</Link>
                                        <Link href="/contact" className='mb-4'>Contact Us</Link> 
                                        </div>
                            </diiv>
                   </div>
                   <div className='w-full xl:w-1/3 p-6 self-center'>
                        <div className='flex justify-center items-center'>
                        <Link href='#' className='me-4'>
                        <Image
   src='/images/si-facebook.svg' alt='' width={45} height={45}
    />
                         </Link>
                        <Link href='#' className='me-4'>
                        <Image
   src='/images/si-linkedin.svg' alt='' width={45} height={45}
    /> </Link>
                        <Link href='#' className='me-4'>
                        <Image
    src='/images/si-x.svg' alt='' width={45} height={45}
    /> </Link>
                      <Link href='#'>
                        <Image
    src='/images/si-insta.svg' alt='' width={45} height={45}
    /> </Link>
            
                        </div>
                   </div>
            </div>
            <div className='container mx-auto  text-center border-t border-light mt-4 pt-6'>
            Copyright © visiongroww.com 2024
            </div>
            <Link href='https://wa.me/919193924595' target='_blank' className='fixed right-[25px] bottom-[25px]'>
                        <Image
    src='/images/icon-whatsapp.svg'   alt='' width={60} height={60}
    /> </Link>
 </footer>
    </>
  )
}

export default Footer