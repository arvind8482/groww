'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const RoadmapWebDesign = ({ roaadmapData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Function to update the slide width
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
        setSlideWidth(carouselWidth / slidesToShow);
      }
    };

    // Initial setup
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateSlideWidth();
    };

    handleResize(); // Initial calculation

    window.addEventListener('resize', handleResize); // Update on resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, [windowWidth]); // Dependency on windowWidth to recalculate on resize

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex(prevIndex => { 
      const maxIndex = windowWidth > 1023 ?  Math.max(0, roaadmapData.length - 2) : roaadmapData.length
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
  const isNextDisabled = windowWidth > 1023 ? currentIndex >= 3 : currentIndex >= 5;  
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
        {roaadmapData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full xl:w-[32%]"
          
          >
            <div className='bg-white shadow-md rounded-2xl p-8 mx-2 min-h-roadmap xlmin-h-tabs-content'>
              <div className="p-6 flex flex-col justify-center">
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

export default RoadmapWebDesign;
