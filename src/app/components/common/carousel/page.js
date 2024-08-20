'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Carousel = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(null); // Set initial state to null

  const updateSlideWidth = () => {
    if (carouselRef.current && typeof window !== 'undefined') {
      const carouselWidth = carouselRef.current.offsetWidth; 
      const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  };

  useEffect(() => {
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
      const maxIndex = sliderData.length - Math.ceil(window.innerWidth / slideWidth);
      const newIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? sliderData.length - Math.ceil(window.innerWidth / slideWidth) : prevIndex - 1;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {slideWidth && ( // Only render the carousel content when slideWidth is calculated
        <>
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
                      src={slide.img} 
                      alt={slide.title} 
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

          <div className='flex justify-center pt-6'>
            <button 
              onClick={goToPrev}
              disabled={currentIndex === 0} 
              className={`me-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Image
                src="/images/nav_prev.png" 
                alt="Previous" 
                width={33} 
                height={33}
              /> 
            </button>

            <button 
  onClick={goToNext}
  disabled={currentIndex >= sliderData.length - (slideWidth ? Math.ceil(window.innerWidth / slideWidth) : 0)} 
  className={`ms-2 ${currentIndex >= sliderData.length - (slideWidth ? Math.ceil(window.innerWidth / slideWidth) : 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
>
              <Image
                src="/images/nav_next.png" 
                alt="Next"  
                width={33} 
                height={33}
              />  
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
