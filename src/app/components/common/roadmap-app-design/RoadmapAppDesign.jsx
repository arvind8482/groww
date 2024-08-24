import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const RoadmapAppDesign = ({ roaadmapData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  // Function to update slide width based on the current window width
  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  // Effect to handle window resizing and initial setup
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateSlideWidth();
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateSlideWidth]);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex(prevIndex => { 
      const maxIndex = Math.max(0, roaadmapData.length - 2);
      console.log(maxIndex)
      // Move to the next index, or wrap around if at the end
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = roaadmapData.length - Math.ceil(windowWidth / slideWidth);
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Calculate if the next button should be disabled
  
  const isNextDisabled = windowWidth > 1023 ? currentIndex >= 3 : currentIndex >= roaadmapData.length - Math.ceil(windowWidth / slideWidth);
  // Calculate if the previous button should be disabled
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Carousel Content */}
      <div
        className="flex xl:space-x-6 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
        }}
      >
        {roaadmapData.length > 0 ? (
          roaadmapData.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full xl:w-[32%]"
            >
              <div className='bg-white  hover:bg-secondary hover:border-2 hover:border-secondary-dark transition ease-in-out hover:shadow-none shadow-md rounded-2xl p-3 xl:p-8  xl:mx-2  min-h-roadmap xl:min-h-roadmapApp'>
              <div className="flex flex-col xl:p-6  justify-center">
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
                <div className='py-2 px-1 xl:px-6'>
                  <strong>{slide.percentage}% Completed</strong>  
                </div> 
                <div>
                <ul className='text-default-size xl:ps-6 py-6'>
                    {slide.content.map((item, index) => (
                      <li  className='bg-list bg-[left_5px] bg-no-repeat ps-8 pb-6' key={index}>
                        <strong>{item.strong}:</strong> {item.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
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

export default RoadmapAppDesign;
