import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/common/header/page'
import Footer from './components/common/footer/page'
function NotFound() {
  return (
     <>
         <Header />  
         <section className='py-6'>
             <div className='container mx-auto text-center'>
             <Image
   src='/images/img-404.png' className='w-full xl:w-1/3 mx-auto' alt='Page Not Found' width={1002} height={992}
    /> 
                   <h2 className='my-5 text-3xl'> Page Not Found</h2> goto home page   <Link href="/" className="text-xl rounded-full font-semibold px-7 border border-2 border-primary py-2 text-primary hover:border-btn-hover hover:bg-btn-hover hover:text-white">Home</Link>
             </div>
         </section>
         <Footer />  
     </>
  )
}

export default NotFound