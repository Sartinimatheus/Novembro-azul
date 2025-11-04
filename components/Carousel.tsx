import React, { useState, useCallback, useRef, useEffect } from 'react';
import { type Slide } from '../types';

interface CarouselProps {
  slides: Slide[];
  ariaLabel?: string;
}

const Carousel: React.FC<CarouselProps> = ({ slides, ariaLabel = "Carrossel de informações" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current[currentIndex]?.focus();
  }, [currentIndex]);

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

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % slides.length;
      setCurrentIndex(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + slides.length) % slides.length;
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="relative h-full w-full max-w-4xl mx-auto" role="region" aria-roledescription="carousel" aria-label={ariaLabel}>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <button onClick={goToPrevious} aria-label="Slide anterior" className="bg-white/50 hover:bg-white text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
        <button onClick={goToNext} aria-label="Próximo slide" className="bg-white/50 hover:bg-white text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="relative h-[24rem] md:h-[22rem] overflow-hidden rounded-2xl bg-white shadow-xl">
        <div
          className="flex transition-transform ease-in-out duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              id={`slide-panel-${index}`}
              role="tabpanel"
              aria-labelledby={`slide-tab-${index}`}
              aria-hidden={currentIndex !== index}
              className="w-full flex-shrink-0 h-full p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="mb-4">{slide.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{slide.title}</h3>
              <p className="text-gray-600 max-w-md">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2" role="tablist" aria-label="Navegação dos slides">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            id={`slide-tab-${slideIndex}`}
            // Fix: The ref callback should not return a value. Using a block body `{}` ensures a void return type, satisfying the 'Ref<HTMLButtonElement>' type.
            ref={el => { tabRefs.current[slideIndex] = el; }}
            role="tab"
            aria-selected={currentIndex === slideIndex}
            aria-controls={`slide-panel-${slideIndex}`}
            tabIndex={currentIndex === slideIndex ? 0 : -1}
            onClick={() => goToSlide(slideIndex)}
            onKeyDown={(e) => handleTabKeyDown(e, slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${currentIndex === slideIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Slide ${slideIndex + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;