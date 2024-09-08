'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const CarouselClients = ({ carousalData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(300);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Create an infinite loop by duplicating the data
  const infiniteCarouselData = [...carousalData, ...carousalData, ...carousalData];

  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 4;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateSlideWidth();
    };

    handleResize(); // Initial update

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateSlideWidth]);

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = infiniteCarouselData.length - Math.ceil(windowWidth / slideWidth) - 1;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(autoScrollIntervalRef.current);
  }, [isAutoScrolling, currentIndex, windowWidth, slideWidth, infiniteCarouselData.length]);

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = infiniteCarouselData.length - Math.ceil(windowWidth / slideWidth);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = infiniteCarouselData.length - Math.ceil(windowWidth / slideWidth);
      return prevIndex === 0 ? maxIndex - 1 : prevIndex - 1;
    });
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  // Ensure the carousel continuously loops infinitely
  const transformValue = -(currentIndex * slideWidth);

  return (
    <div
      className="relative w-full overflow-hidden"
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${transformValue}px)`,
          width: `${slideWidth * infiniteCarouselData.length}px`, // Ensure width accommodates all slides
        }}
      >
        {infiniteCarouselData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${slideWidth}px` }}
          >
            <div className='bg-white border-2 border-secondary-dark rounded-xl p-8 mx-1 xl:mx-2 flex justify-center hover:scale-90 transition ease-in-out items-center min-h-clientbox'>
              <Image src={slide.img} alt={slide.title} width={slide.width} height={slide.height} />
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center pt-6'>
        <button 
          onClick={goToPrev}
          className={`me-2`}
          disabled={currentIndex === 0}
        >
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>

        <button 
          onClick={goToNext}
          className={`ms-2 `}
          disabled={currentIndex >= infiniteCarouselData.length - Math.ceil(windowWidth / slideWidth)}
        >
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

CarouselClients.propTypes = {
  carousalData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CarouselClients;
