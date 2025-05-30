
import React, { useState, useMemo, useEffect } from 'react';
import { PORTFOLIO_PROJECTS_DATA } from '../constants';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';
import { PortfolioProject, MultilingualText } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const PortfolioSection: React.FC = () => {
  const { language, t } = useLanguage();
  
  const portfolioCategories = useMemo(() => {
    const uniqueCategories: MultilingualText[] = [];
    const categorySet = new Set<string>();

    PORTFOLIO_PROJECTS_DATA.forEach(project => {
      const categoryKey = `${project.category.en}-${project.category.id}`;
      if (!categorySet.has(categoryKey)) {
        categorySet.add(categoryKey);
        uniqueCategories.push(project.category);
      }
    });
    // Ensure "All" is translated correctly when language changes
    return [{ en: t('portfolioCategoryAll'), id: t('portfolioCategoryAll') }, ...uniqueCategories];
  }, [t]); // Removed language dependency as t already handles it

  const [activeCategory, setActiveCategory] = useState<MultilingualText>(portfolioCategories[0]);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  
  const [titleRef, isTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [filterRef, isFilterVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [gridRef, isGridVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.05 });


  useEffect(() => {
    // Update "All" category translation if t (language/translations) changes
     setActiveCategory(prevActiveCategory => {
        if (prevActiveCategory.en === locales.en.portfolioCategoryAll || prevActiveCategory.id === locales.id.portfolioCategoryAll) {
             return { en: t('portfolioCategoryAll'), id: t('portfolioCategoryAll') };
        }
        return prevActiveCategory;
     });
  }, [t, portfolioCategories]);


  const filteredProjects = useMemo(() => {
    // Use the activeCategory's current language version for "All"
    const allText = t('portfolioCategoryAll');
    if (activeCategory[language] === allText) {
      return PORTFOLIO_PROJECTS_DATA;
    }
    return PORTFOLIO_PROJECTS_DATA.filter(project => project.category[language] === activeCategory[language]);
  }, [activeCategory, language, t]);

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };
  
  // Dummy locales for useEffect dependency, should be imported if used for real
  const locales = { en: { portfolioCategoryAll: "All" }, id: { portfolioCategoryAll: "Semua" } };


  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">{t('portfolioTitle')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ animationDelay: isTitleVisible ? '150ms' : '0ms'}}>
            {t('portfolioSubtitle')}
          </p>
        </div>

        <div 
          ref={filterRef}
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 transition-all duration-700 ease-out ${isFilterVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
          style={{ animationDelay: isFilterVisible ? '300ms' : '0ms'}}
        >
          {portfolioCategories.map(category => (
            <button
              key={category.en + category.id} // More unique key
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-200
                ${activeCategory[language] === category[language]
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
            >
              {category[language]}
            </button>
          ))}
        </div>
        
        <div ref={gridRef}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`animate-on-scroll ${isGridVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PortfolioCard project={project} onViewDetails={openModal} />
                </div>
              ))}
            </div>
          ) : (
            <p 
              className={`text-center text-slate-600 dark:text-slate-400 animate-on-scroll ${isGridVisible ? 'animate-fade-in' : 'opacity-0'}`}
            >
              {t('portfolioNoProjects')}
            </p>
          )}
        </div>
      </div>
      <PortfolioModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default PortfolioSection;