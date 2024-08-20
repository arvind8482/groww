'use client'; // Ensure this component is treated as a client component
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const sliderData = [
  {
    img: '/images/why-icon-1.png',
    title: 'Comprehensive Service Offerings', 
    width:97,
    height:103,
    content: `At VisionGroww, we provide a wide range of services including Web Design, App Design, IT Training, IT Consultancy, and Master Classes. Our diverse portfolio ensures that all your IT and design needs are met under one roof.`,
  },
  {
    img: '/images/why-icon-2.png',
    title: 'Expert Design Solutions', 
    width:93,
    height:95,
    content: `Our design solutions are crafted by experts who understand the nuances of user experience and aesthetic appeal.`,
  },
  {
    img: '/images/why-icon-3.png',
    title: 'Top-Notch IT Training', 
    width:101,
    height:98,
    content: `We offer advanced IT training programs that are designed to keep you ahead in the ever-evolving tech industry.`,
  },
  {
    img: '/images/why-icon-4.png',
    title: 'Professional IT Consultancy', 
    width:99,
    height:101,
    content: `Our IT consultancy services are aimed at helping businesses navigate complex technological challenges.`,
  },
  {
    img: '/images/why-icon-5.png',
    title: 'Advanced Master Classes', 
    width:99,
    height:103,
    content: `Our master classes provide in-depth knowledge and hands-on experience in various IT domains.`,
  },
  {
    img: '/images/why-icon-6.png',
    title: 'Tailored Maintenance', 
    width:100,
    height:101,
    content: `We offer customized maintenance packages that ensure your systems are always running smoothly.`,
  },
  {
    img: '/images/why-icon-7.png',
    title: 'Customer Centric Approach', 
    width:100,
    height:102,
    content: `Our customer-centric approach ensures that your needs are always our top priority.`,
  },
  {
    img: '/images/why-icon-8.png',
    title: 'Industry Expertise', 
    width:112,
    height:108,
    content: `With years of industry experience, we bring unparalleled expertise to every project.`,
  },
]; function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        setSlideWidth(carouselWidth / slidesToShow);
        setMaxIndex(sliderData.length - slidesToShow);
      }
    };

    updateSlideWidth(); // Initial calculation
    window.addEventListener('resize', updateSlideWidth); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSlideWidth); // Cleanup on unmount
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === maxIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? maxIndex : prevIndex - 1;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${slideWidth}px` }}
          >
            <div className='bg-white border-2 border-secondary-dark rounded-2xl p-8 mx-2 min-h-tabs-content'>
              <div className="py-6 text-center flex justify-center">
                <Image
                  src={slide.img} alt={slide.title}
                  width={slide.width}
                  height={slide.height}
                />
              </div>
              <div className="min-h-tabs-subheading">
                <h3 className="text-tabs font-semibold text-center">{slide.title}</h3>
              </div>
              <p className="text-default-size text-center">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-center pt-6'>
        <button 
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className={`me-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image
            src="/images/nav_prev.png" alt="Previous"
            width={33}
            height={33}
          />
        </button>

        <button 
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className={`ms-2 ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image
            src="/images/nav_next.png" alt="Next"
            width={33}
            height={33}
          />
        </button>
      </div>
    </div>
  );
}

export default Carousel;