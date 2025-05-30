
import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS_DATA, ArrowLeftIcon, ArrowRightIcon } from '../constants';
import TestimonialCard from './TestimonialCard';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleRef, isTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [carouselRef, isCarouselVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.1 });


  const nextTestimonial = useCallback(() => {
    if (TESTIMONIALS_DATA.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const prevTestimonial = () => {
    if (TESTIMONIALS_DATA.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (TESTIMONIALS_DATA.length <= 1) return; 
    const interval = setInterval(nextTestimonial, 5000); // Increased interval slightly
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  if (TESTIMONIALS_DATA.length === 0) {
    return null; 
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">{t('testimonialsTitle')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ animationDelay: isTitleVisible ? '150ms' : '0ms'}}>
            {t('testimonialsSubtitle')}
          </p>
        </div>
        
        <div 
            ref={carouselRef}
            className={`relative max-w-3xl mx-auto transition-opacity duration-700 ease-out ${isCarouselVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <TestimonialCard testimonial={testimonial} isActive={index === currentIndex} />
                </div>
              ))}
            </div>
          </div>

          {TESTIMONIALS_DATA.length > 1 && (
            <>
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 p-2 bg-white/50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-600 rounded-full shadow-md transition-colors focus:outline-none"
              aria-label={t('previous')}
            >
              <ArrowLeftIcon className="w-5 h-5 text-primary dark:text-blue-400" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 p-2 bg-white/50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-600 rounded-full shadow-md transition-colors focus:outline-none"
              aria-label={t('next')}
            >
              <ArrowRightIcon className="w-5 h-5 text-primary dark:text-blue-400" />
            </button>
            </>
          )}

          {TESTIMONIALS_DATA.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentIndex ? 'bg-primary dark:bg-blue-400 scale-125' : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'}`}
                  aria-label={t('goToSlide', { number: index + 1 })}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;