'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CarouselClients = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Function to update the slide width based on the carousel and window size
  const updateSlideWidth = () => {
    if (carouselRef.current && typeof window !== 'undefined') {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  };

  // Use useEffect to ensure this code runs only in the client (browser)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateSlideWidth(); // Initial calculation on mount
      window.addEventListener('resize', updateSlideWidth); // Update on resize

      return () => {
        window.removeEventListener('resize', updateSlideWidth); // Cleanup on unmount
      };
    }
  }, []); // Empty dependency array ensures this effect runs only on mount

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = sliderData.length - Math.ceil(slideWidth && window.innerWidth / slideWidth);
      const newIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? sliderData.length - Math.ceil(slideWidth && window.innerWidth / slideWidth) : prevIndex - 1;
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
          disabled={currentIndex >= sliderData.length - Math.ceil(slideWidth && window.innerWidth / slideWidth)} 
          className={`ms-2 ${currentIndex >= sliderData.length - Math.ceil(slideWidth && window.innerWidth / slideWidth) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default CarouselClients;
