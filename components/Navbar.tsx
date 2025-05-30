
import React, { useState, useEffect, useRef } from 'react';
import { Theme } from '../types';
import { SunIcon, MoonIcon, NAV_LINKS_DATA, LanguageIcon } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    NAV_LINKS_DATA.forEach(link => {
      sectionRefs.current[link.id] = document.querySelector(link.href);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = 'hero';
      for (const link of NAV_LINKS_DATA) {
        const section = sectionRefs.current[link.id];
        if (section && section.offsetTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = link.id;
        } else {
          break; 
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Manually set active section on click for immediate feedback
      // The scroll listener will also pick it up, but this ensures quick UI update
      setActiveSection(sectionId); 
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero', 'hero')} className="text-2xl font-bold bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 dark:from-blue-500 dark:via-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
          {t('navSoenrect')}
        </a>
        
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {NAV_LINKS_DATA.map(link => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href, link.id)}
              className={`nav-link-animated text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === link.id ? 'active text-primary dark:text-blue-400 font-medium' : ''}`}
            >
              {link.label[language]}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors"
            aria-label={t('navToggleTheme')}
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <button
            onClick={handleLanguageToggle}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors flex items-center"
            aria-label={language === 'en' ? t('navSwitchToIndonesian') : t('navSwitchToEnglish')}
          >
            <LanguageIcon className="w-5 h-5 mr-1" />
            <span className="text-xs font-medium">{language === 'en' ? 'ID' : 'EN'}</span>
          </button>
        </div>

        <div className="md:hidden flex items-center">
           <button
            onClick={toggleTheme}
            className="p-2 mr-1 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors"
            aria-label={t('navToggleTheme')}
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          <button
            onClick={handleLanguageToggle}
            className="p-2 mr-1 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors flex items-center"
            aria-label={language === 'en' ? t('navSwitchToIndonesian') : t('navSwitchToEnglish')}
          >
            <LanguageIcon className="w-5 h-5 mr-0.5" />
            <span className="text-xs font-medium">{language === 'en' ? 'ID' : 'EN'}</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            aria-label={t('navOpenMenu')}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sky-50/95 dark:bg-slate-800/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS_DATA.map(link => (
              <a 
                key={link.id} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.id)} 
                className={`block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 hover:text-primary dark:hover:text-blue-400 transition-colors ${activeSection === link.id ? 'text-primary dark:text-blue-400 bg-slate-200/50 dark:bg-slate-700/50' : ''}`}
              >
                {link.label[language]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;