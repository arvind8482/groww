'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const RoadmapAppDesign = ({ roaadmapData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Create an infinite loop by duplicating the data
  const infiniteRoadmapData = Array(100).fill(roaadmapData).flat(); 

  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateSlideWidth();
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateSlideWidth]);

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const maxIndex = infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth) - 1;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(autoScrollIntervalRef.current);
  }, [isAutoScrolling, windowWidth, slideWidth, infiniteRoadmapData.length]);

  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(prevIndex => {
      const maxIndex = infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(prevIndex => {
      const maxIndex = infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth);
      return prevIndex === 0 ? maxIndex - 1 : prevIndex - 1;
    });
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  // Calculate the transform value for infinite scroll
  const transformValue = -currentIndex * slideWidth;

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
          width: `${slideWidth * infiniteRoadmapData.length}px`, // Ensure width accommodates all slides
        }}
      >
        {infiniteRoadmapData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${slideWidth}px` }}
          >
            <div className='bg-white hover:bg-secondary border-2 border-secondary-dark transition ease-in-out hover:shadow-none rounded-2xl p-6 xl:p-8 mx-1 xl:mx-2 min-h-roadmap-app'>
              <div className="flex flex-col xl:p-6 justify-center">
                <div className='min-h-roadmapheading-area'>
                  <h4 className='text-primary text-roadmap-subheading'>{slide.subtitle}</h4>
                  <h3 className='text-primary text-roadmap-heading'>{slide.title}</h3>
                </div>
                <Image
                  src={slide.img} alt={slide.title}
                  width={122}
                  height={2}
                />
              </div>
              <div className='py-2 px-6'>
                <strong>{slide.percentage}% Completed</strong>  
              </div> 
              <div>
                <ul className='text-default-size ps-6 py-6'>
                  {slide.content.map((item, index) => (
                    <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6' key={index}>
                      <strong>{item.strong}:</strong> {item.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center pt-6'>
        <button 
          onClick={goToPrev}
          disabled={currentIndex === 0} 
          className={`me-2`}
        >
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>

        <button 
          onClick={goToNext}
          disabled={currentIndex >= infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth)} 
          className={`ms-2`}
        >
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default RoadmapAppDesign;
