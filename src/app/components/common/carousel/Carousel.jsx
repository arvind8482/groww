'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image'; 

const Carousel = ({ carouselData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.outerWidth);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => {
      const maxIndex = windowWidth > 1023 ? 5 : Math.max(0, carouselData.length - Math.ceil(windowWidth / slideWidth));
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [windowWidth, carouselData.length, slideWidth]);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => {
      const slidesToShow = Math.ceil(windowWidth / slideWidth);
      const maxIndex = Math.max(0, carouselData.length - slidesToShow);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  useEffect(() => {
    updateWindowWidth();
    updateSlideWidth();
    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('resize', updateSlideWidth);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, [updateWindowWidth, updateSlideWidth]);

  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(goToNext, 3000);
    return () => {
      clearInterval(autoScrollIntervalRef.current);
    };
  }, [goToNext]);

  const slidesToShow = Math.ceil(windowWidth / slideWidth);
  const maxIndex = Math.max(0, carouselData.length - slidesToShow);

  const isNextDisabled = windowWidth > 1023 ? currentIndex >= 5 : currentIndex >= maxIndex;
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
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
            <div className='bg-white hover:bg-secondary hover:border-2 hover:border-secondary-dark transition ease-in-out hover:shadow-none shadow-md rounded-2xl p-8 mx-2 min-h-tabs-content'>
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
