
import React from 'react';
import NetworkAnimation from './NetworkAnimation';
import Button from './ui/Button';
import { HERO_VIDEO_URL } from '../constants';
import { Theme } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface HeroSectionProps {
  theme: Theme;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const { t } = useLanguage();
  const [heroContentRef, isHeroContentVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.3 });

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20 dark:opacity-40"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" /> 
        {t('heroVideoNotSupported')}
      </video>
      
      <div className="absolute inset-0 z-10 flex items-center justify-center">
         <NetworkAnimation width={window.innerWidth} height={window.innerHeight} nodeCount={75} theme={theme}/>
      </div>

      <div className="absolute inset-0 bg-slate-100/70 dark:bg-slate-900/70 z-20"></div>
      
      <div 
        ref={heroContentRef}
        className={`relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${isHeroContentVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-sky-300 dark:via-sky-400 dark:to-blue-400 text-transparent bg-clip-text">
          {t('heroTitlePart1')}{t('heroTitleHighlight')}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto" style={{ animationDelay: isHeroContentVisible ? '150ms' : '0ms'}}>
          {t('heroSubtitle')}
        </p>
        <div className="space-x-4" style={{ animationDelay: isHeroContentVisible ? '300ms' : '0ms'}}>
          <Button onClick={scrollToContact} size="lg" variant="primary">
            {t('heroBtnGetInTouch')}
          </Button>
          <Button 
            onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
            size="lg" 
            variant="outline"
            className="border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary/10 dark:hover:bg-blue-400/10"
          >
            {t('heroBtnViewWork')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;