'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const Carousel = ({ carouselData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Duplicate the data 100 times
  const infiniteCarouselData = Array(100).fill(carouselData).flat();

  const updateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const slidesToShow = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
      setSlideWidth(carouselWidth / slidesToShow);
    }
  }, [windowWidth]);

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth); // Use window.innerWidth for better accuracy
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = infiniteCarouselData.length - 1;
      const newIndex = prevIndex + 1;

      // Loop back to the first slide if we reach the end
      return newIndex > maxIndex ? 0 : newIndex;
    });
  }, [infiniteCarouselData.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = infiniteCarouselData.length - 1;
      const newIndex = prevIndex - 1;

      // Loop back to the last slide if we reach the beginning
      return newIndex < 0 ? maxIndex : newIndex;
    });
  }, [infiniteCarouselData.length]);

  const startAutoScroll = useCallback(() => {
    autoScrollIntervalRef.current = setInterval(goToNext, 3000);
  }, [goToNext]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    updateWindowWidth();
    updateSlideWidth();
    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('resize', updateSlideWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, [updateWindowWidth, updateSlideWidth]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    // Ensure the carouselElement is available before adding listeners
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoScroll);
      carouselElement.addEventListener('mouseleave', startAutoScroll);

      // Cleanup event listeners on unmount
      return () => {
        carouselElement.removeEventListener('mouseenter', stopAutoScroll);
        carouselElement.removeEventListener('mouseleave', startAutoScroll);
      };
    }
  }, [startAutoScroll, stopAutoScroll]);

  // Calculate the transform value to achieve infinite scrolling effect
  const totalSlides = infiniteCarouselData.length;
  const transformValue = -(currentIndex % totalSlides) * slideWidth;

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${transformValue}px)`,
        }}
      >
        {infiniteCarouselData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${slideWidth}px` }}
          >
            <div className="bg-white hover:bg-secondary border-2 border-secondary-dark transition ease-in-out hover:shadow-none rounded-2xl p-8 mx-1 xl:mx-2 min-h-caraousal">
              <div className="py-6 text-center flex justify-center">
                <Image src={slide.img} alt={slide.title} width={slide.width} height={slide.height} />
              </div>
              <div className="min-h-why-subheading">
                <h3 className="text-tabs font-semibold text-center">{slide.title}</h3>
              </div>
              <p className="text-default-size text-center">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button onClick={goToPrev} className="me-2">
          <Image src="/images/nav_prev.png" alt="Previous" width={33} height={33} />
        </button>

        <button onClick={goToNext} className="ms-2">
          <Image src="/images/nav_next.png" alt="Next" width={33} height={33} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
