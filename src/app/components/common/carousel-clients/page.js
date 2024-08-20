'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define the slider data directly in the component file
const sliderData = [
  {
    img: '/images/client-1.png',
    title: 'Client Data',
    width:207,
    height:70
    },
  {
    img: '/images/client-2.jpg',
    title: 'Client Data',
    width:207,
    height:70
  },
  {
    img: '/images/client-3.png',
    title: 'Client Data',
    width:219,
    height:45
  },
  {
    img: '/images/client-4.png',
    title: 'Client Data',
    width:147,
    height:70
    },
    {
      img: '/images/client-1.png',
      title: 'Client Data',
      width:207,
      height:70
      },
    {
      img: '/images/client-2.jpg',
      title: 'Client Data',
      width:207,
      height:70
    },
    {
      img: '/images/client-3.png',
      title: 'Client Data',
      width:219,
      height:45
    },
    {
      img: '/images/client-4.png',
      title: 'Client Data',
      width:147,
      height:70
      },
      {
        img: '/images/client-1.png',
        title: 'Client Data',
        width:207,
        height:70
        },
      {
        img: '/images/client-2.jpg',
        title: 'Client Data',
        width:207,
        height:70
      },
      {
        img: '/images/client-3.png',
        title: 'Client Data',
        width:219,
        height:45
      },
      {
        img: '/images/client-4.png',
        title: 'Client Data',
        width:147,
        height:70
        },
];

function CarouselClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.offsetWidth;
        const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
        setSlideWidth(carouselWidth / slidesToShow);
      }
    };

    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);

    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = sliderData.length - Math.ceil(window.innerWidth / slideWidth);
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
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
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
      >
        {sliderData.map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: `${slideWidth}px` }}>
            <div className="bg-white border-2 border-secondary-dark rounded-xl p-8 mx-2 flex justify-center items-center min-h-clientbox">
              <Image src={slide.img} alt={slide.title} width={slide.width} height={slide.height} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <button onClick={goToPrev}   className={`me-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>
        <button onClick={goToNext}   className={`ms-2 ${currentIndex >= sliderData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default CarouselClients;