'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const RoadmapItTraining = ({ roaadmapData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [infiniteRoadmapData, setInfiniteRoadmapData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Set up infinite roadmap data whenever roaadmapData changes
  useEffect(() => {
    if (roaadmapData.length) {
      setInfiniteRoadmapData(Array(100).fill(roaadmapData).flat());
      setCurrentIndex(0); // Reset current index when data changes
      setIsLoading(false); // Data is ready
    } else {
      setIsLoading(true); // Data is being fetched or not available
    }
  }, [roaadmapData]);

  // Update slide width based on window width
  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateSlideWidth();
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateSlideWidth]);

  // Set up auto-scrolling
  useEffect(() => {
    if (isAutoScrolling && !isLoading) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const maxIndex = infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth) - 1;
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => clearInterval(autoScrollIntervalRef.current); // Cleanup interval on unmount
  }, [isAutoScrolling, windowWidth, slideWidth, infiniteRoadmapData.length, isLoading]);

  // Navigate to next slide
  const goToNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(prevIndex => {
      const maxIndex = infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth) - 1;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  // Navigate to previous slide
  const goToPrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(prevIndex => {
      const maxIndex = infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth) - 1;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Pause auto-scrolling on mouse enter and resume on mouse leave
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  // Calculate the transform value for slide movement
  const transformValue = -currentIndex * slideWidth;

  return (
    <div
      className="relative w-full overflow-hidden"
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="loader">
            {/* Add your loader styles here */}
            <Image src="/images/loader.gif" alt="Loading..." width={50} height={50} />
          </div>
        </div>
      ) : (
        <>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${transformValue}px)`,
              width: `${slideWidth * infiniteRoadmapData.length}px`,
            }}
          >
            {infiniteRoadmapData.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
         <div className='bg-white hover:bg-secondary border-2 border-secondary-dark transition ease-in-out hover:shadow-none rounded-2xl p-3 mx-1 xl:mx-2 min-h-roadmap-app-small xl:min-h-roadmap-app'>
         <div className="flex flex-col p-3 justify-center">
                    <div className='min-h-roadmapheading-area'>
                      <h4 className='text-primary text-roadmap-subheading'>{slide.subtitle}</h4>
                      <h3 className='text-primary text-roadmap-heading'>{slide.title}</h3>
                    </div>
                    <Image
                      src={slide.img} alt={slide.title}
                      width={122}
                      height={122}
                    />
                  </div>
                  <div className='py-2 px-1 xl:px-6'>
                    <strong>{slide.percentage}% Completed</strong>  
                  </div> 
                  <div>
                    <ul className='text-default-size ps-6 pt-2'>
                      {slide.content.map((item, idx) => (
                        <li className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-1' key={idx}>
                          <strong>{item.strong}:</strong> {item.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-center pt-2'>
            <button 
              onClick={goToPrev}
              disabled={currentIndex === 0} 
              className={`me-2`}
            >
              <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
            </button>

            <button 
              onClick={goToNext}
              disabled={currentIndex >= infiniteRoadmapData.length - Math.ceil(windowWidth / slideWidth) - 1} 
              className={`ms-2`}
            >
              <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RoadmapItTraining;
