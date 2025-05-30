import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientLogosSection from './components/ClientLogosSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Loader from './components/ui/Loader';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
// import useIntersectionObserver from './hooks/useIntersectionObserver'; // Not directly used here but good to acknowledge its existence in the project

const AppContent: React.FC = () => {
  const { t } = useLanguage(); 
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) return storedTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    // Slightly shorter loader time as page animations will make it feel more responsive
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1200); 
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (isAppLoading) {
    return <Loader message={t('loaderMessage')} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <HeroSection theme={theme} />
        <ClientLogosSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AboutUsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;