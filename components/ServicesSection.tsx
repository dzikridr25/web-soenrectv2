
import React, { useState, useEffect, useCallback } from 'react';
import { SERVICES_DATA, ArrowLeftIcon, ArrowRightIcon } from '../constants';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ServicesSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideInterval = 7000;

  const [titleRef, isTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [carouselRef, isCarouselVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.1 });


  const nextService = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES_DATA.length);
  }, []);

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  };

  const goToService = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered || SERVICES_DATA.length <= 1) return; 
    const interval = setInterval(nextService, autoSlideInterval);
    return () => clearInterval(interval);
  }, [nextService, isHovered]);

  const serviceTitles = SERVICES_DATA.map(service => service.title[language]).join(' • ');
  const runningTextContent = `${serviceTitles} • ${serviceTitles}`;

  return (
    <section 
      id="services" 
      className="py-16 sm:py-24 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">{t('servicesTitle')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ animationDelay: isTitleVisible ? '150ms' : '0ms'}}>
            {t('servicesSubtitle')}
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className={`relative max-w-4xl mx-auto transition-opacity duration-700 ease-out ${isCarouselVisible ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {SERVICES_DATA.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`w-full flex-shrink-0 px-2 sm:px-4 animate-on-scroll ${isCarouselVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ServiceCard 
                    service={service} 
                    className="max-w-md mx-auto h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {SERVICES_DATA.length > 1 && (
            <>
              <button 
                onClick={prevService}
                className="absolute top-1/2 -left-3 sm:-left-6 md:-left-10 transform -translate-y-1/2 p-2 bg-white/60 dark:bg-slate-700/60 hover:bg-white dark:hover:bg-slate-600 rounded-full shadow-md transition-colors focus:outline-none z-10"
                aria-label={t('previous')}
              >
                <ArrowLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-blue-400" />
              </button>
              <button 
                onClick={nextService}
                className="absolute top-1/2 -right-3 sm:-right-6 md:-right-10 transform -translate-y-1/2 p-2 bg-white/60 dark:bg-slate-700/60 hover:bg-white dark:hover:bg-slate-600 rounded-full shadow-md transition-colors focus:outline-none z-10"
                aria-label={t('next')}
              >
                <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-blue-400" />
              </button>
            </>
          )}

          {SERVICES_DATA.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {SERVICES_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToService(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none
                    ${index === currentIndex ? 'bg-primary dark:bg-blue-400 scale-125' : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'}`}
                  aria-label={t('goToSlide', { number: index + 1 })}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>
          )}
        </div>

        {SERVICES_DATA.length > 0 && (
          <div className={`mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-700/30 animate-on-scroll ${isCarouselVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <div className="relative w-full overflow-hidden">
              <div className="whitespace-nowrap animate-running-text-services hover:pause-animation">
                <span className="text-sm text-slate-500 dark:text-slate-400 py-2 inline-block">
                  {runningTextContent}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;