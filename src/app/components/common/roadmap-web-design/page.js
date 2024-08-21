'use client'; // Ensure this component is treated as a client component
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const RoadmapWebDesign = ({ roaadmapData }) => { // Destructure roaadmapData from props
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const updateSlideWidth = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth; 
      const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  };

  useEffect(() => {
    updateSlideWidth(); // Initial calculation
    window.addEventListener('resize', updateSlideWidth); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSlideWidth); // Cleanup on unmount
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = roaadmapData.length - Math.ceil(window.innerWidth / slideWidth);
      const newIndex = prevIndex === maxIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? roaadmapData.length - Math.ceil(window.innerWidth / slideWidth) : prevIndex - 1;
      return newIndex;
    });
  };

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Carousel Content */}
      <div
        className="flex space-x-6 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * slideWidth}px)`,
        }}
      >
        {roaadmapData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${32}%` }}
          >
          <div className='bg-white shadow-md rounded-2xl p-8 mx-2 min-h-tabs-content'>
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
          disabled={currentIndex === 0} 
          className={`me-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>

        <button 
          onClick={goToNext}
          disabled={currentIndex >= roaadmapData.length - Math.ceil(window.innerWidth / slideWidth)} 
          className={`ms-2 ${currentIndex >= roaadmapData.length - Math.ceil(window.innerWidth / slideWidth) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default RoadmapWebDesign;
