'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CarouselClients = ({ sliderData }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const updateSlideWidth = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      
      // Check if window is available before accessing it
      if (typeof window !== 'undefined') {
        const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
        setSlideWidth(carouselWidth / slidesToShow);
      }
    }
  };

  useEffect(() => {
    // Run this effect only on the client side
    if (typeof window !== 'undefined') {
      updateSlideWidth(); // Initial calculation
      window.addEventListener('resize', updateSlideWidth); // Update on resize

      return () => {
        window.removeEventListener('resize', updateSlideWidth); // Cleanup on unmount
      };
    }
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = sliderData.length - Math.ceil(typeof window !== 'undefined' ? window.innerWidth / slideWidth : 1);
      const newIndex = prevIndex === maxIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? sliderData.length - Math.ceil(typeof window !== 'undefined' ? window.innerWidth / slideWidth : 1) : prevIndex - 1;
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
            <div className='bg-white border-2 border-secondary-dark rounded-xl p-8 mx-2 flex justify-center items-center min-h-clientbox'>
              <div>
                <Image width={slide.width} height={slide.height} src={slide.img} alt={slide.title} />
              </div>
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
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>

        <button 
          onClick={goToNext}
          disabled={currentIndex >= sliderData.length - Math.ceil(typeof window !== 'undefined' ? window.innerWidth / slideWidth : 1)} 
          className={`ms-2 ${currentIndex >= sliderData.length - Math.ceil(typeof window !== 'undefined' ? window.innerWidth / slideWidth : 1) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default CarouselClients;
