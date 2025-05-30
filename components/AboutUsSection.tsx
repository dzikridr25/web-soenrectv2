
import React from 'react';
import { ABOUT_US_TEXT } from '../constants';
import GlassCard from './ui/GlassCard';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AboutUsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [titleRef, isTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [paragraphsRef, areParagraphsVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.1 });
  const [teamTitleRef, isTeamTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [teamGridRef, isTeamGridVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.05 });

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">{ABOUT_US_TEXT.title[language]}</h2>
        </div>
        
        <div 
          ref={paragraphsRef}
          className={`max-w-3xl mx-auto space-y-6 text-slate-600 dark:text-slate-300 text-center sm:text-left text-base sm:text-lg leading-relaxed`}
        >
          {ABOUT_US_TEXT.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className={`animate-on-scroll ${areParagraphsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {paragraph[language]}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <div 
            ref={teamTitleRef}
            className={`transition-all duration-700 ease-out ${isTeamTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-center text-slate-800 dark:text-white mb-10">{t('aboutUsTeamTitle')}</h3>
          </div>
          <div ref={teamGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ABOUT_US_TEXT.team.map((member, index) => (
              <div 
                key={member.name}
                className={`animate-on-scroll ${isTeamGridVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <GlassCard className="text-center p-6 h-full">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/50 dark:border-blue-400/50 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-white">{member.name}</h4>
                  <p className="text-primary dark:text-blue-400">{member.role[language]}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;