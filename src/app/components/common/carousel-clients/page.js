'use client'; // Ensure this component is treated as a client component
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CarouselClients = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const updateSlideWidth = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      
      // Check if window is available before accessing it
      if (typeof window !== 'undefined') {
        const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
        setSlideWidth(carouselWidth / slidesToShow);
      }
    }
  };

  useEffect(() => {
    // Run this effect only on the client side
    if (typeof window !== 'undefined') {
      updateSlideWidth(); // Initial calculation
      window.addEventListener('resize', updateSlideWidth); // Update on resize

      return () => {
        window.removeEventListener('resize', updateSlideWidth); // Cleanup on unmount
      };
    }
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = sliderData.length - Math.ceil(typeof window !== 'undefined' ? window.innerWidth / slideWidth : 1);
      const newIndex = prevIndex === maxIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? sliderData.length - Math.ceil(typeof window !== 'undefined' ? window.innerWidth / slideWidth : 1) : prevIndex - 1;
      return newIndex;
    });
  };

  return (
 <>ZxZZ</>
  );
};

export default CarouselClients;
