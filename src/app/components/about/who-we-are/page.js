import React from 'react'
import SectionHeadingTwoLine from '../../common/section-heading-twoline/page'

function WhoWeAre() {
  return (
     <>
        <section className='py-20 bg-secondary'>
            <div className='container px-6 xl:px-0  mx-auto flex flex-col xl:flex-row xl:items-center'>
                <div className='w-full xl:w-1/2'>
                    <SectionHeadingTwoLine align="text-start" line="text-start" heading="Who We Are" />
                    <p className='text-default-size '>
                    VisionGroww is a premier digital solutions provider committed to helping businesses achieve their goals through innovative and customized solutions. With a focus on quality and customer satisfaction, we bring together a team of highly skilled professionals with extensive experience in various technologies. Our mission is to empower your business with cutting-edge digital solutions that drive growth and success.
                      </p>
                </div>
                <div className='w-full xl:w-1/2'>
                    <img src='images/img-whoweare.png' className='w-full'  alt='' />
                </div>
            </div>
        </section>
     </>
  )
}

export default WhoWeAre