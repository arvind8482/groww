'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image'; 

const Carousel = ({ carouselData  = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  // Function to update the slide width based on window size
  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  // Function to update the window width state
  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Initial updates
    updateWindowWidth();
    updateSlideWidth();

    // Event listeners
    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('resize', updateSlideWidth);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, [updateWindowWidth, updateSlideWidth]); // Include both updateWindowWidth and updateSlideWidth

  const goToNext = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = carouselData.length - Math.ceil(windowWidth / slideWidth);
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex === 0 ? carouselData.length - Math.ceil(windowWidth / slideWidth) : prevIndex - 1;
      return newIndex;
    });
  };

  const isNextDisabled = currentIndex >= carouselData.length - Math.ceil(windowWidth / slideWidth);
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
        }}
      >
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${slideWidth}px` }}
          >
            <div className='bg-white border-2 border-secondary-dark rounded-2xl p-8 mx-2 min-h-tabs-content'>
              <div className="py-6 text-center flex justify-center">
                <Image src={slide.img} alt={slide.title} width={slide.width} height={slide.height} /> 
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
          disabled={isPrevDisabled} 
          className={`me-2 ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>

        <button 
          onClick={goToNext}
          disabled={isNextDisabled} 
          className={`ms-2 ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
