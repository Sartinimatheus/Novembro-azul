
import React, { useState, useCallback } from 'react';
import { type Slide } from '../types';

interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-full w-full max-w-4xl mx-auto">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button onClick={goToPrevious} className="bg-white/50 hover:bg-white text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button onClick={goToNext} className="bg-white/50 hover:bg-white text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="relative h-[24rem] md:h-[22rem] overflow-hidden rounded-2xl bg-white shadow-xl">
        <div
          className="flex transition-transform ease-in-out duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="mb-4">{slide.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{slide.title}</h3>
              <p className="text-gray-600 max-w-md">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
