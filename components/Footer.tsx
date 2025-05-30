
import React from 'react';
import { NAV_LINKS_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { nameKey: 'footerSocialFacebook', href: '#', iconPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { nameKey: 'footerSocialTwitter', href: '#', iconPath: "M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07C18.29 4.41 17.03 4 15.64 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C7.38 9.09 4.26 7.38 2.19 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.53v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.96 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.54 21 7.81 21c7.81 0 12.07-6.47 12.07-12.07 0-.18 0-.36-.01-.54.83-.6 1.56-1.36 2.13-2.23z" },
    { nameKey: 'footerSocialLinkedIn', href: '#', iconPath: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v9h3V9zm-1.5-2.25A1.75 1.75 0 0 0 5 8.5a1.75 1.75 0 0 0 3.5 0A1.75 1.75 0 0 0 6.5 6.75zM18 9h-2.5c-1.5 0-2.5 1-2.5 2.5V18h3v-5.09c0-.91.39-1.41 1.41-1.41H18V9z" },
    { nameKey: 'footerSocialInstagram', href: '#', iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 1.272.058 2.163.305 2.914.837.751.532 1.277 1.277 1.81 2.028.532.751.78 1.642.837 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.272-.305 2.163-.837 2.914-.532.751-1.277 1.277-2.028 1.81-.751.532-1.642.78-2.914.837-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.272-.058-2.163-.305-2.914-.837-.751-.532-1.277-1.277-1.81-2.028-.532-.751-.78-1.642-.837-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.272.305 2.163.837 2.914.532-.751 1.277-1.277 2.028-1.81.751-.532 1.642-.78 2.914-.837C8.416 2.175 8.796 2.163 12 2.163m0-1.625C8.71 0.538 8.33.526 7.052.468 5.776.41 4.703.655 3.81 1.15c-.894.495-1.616 1.105-2.25 1.992C1.055 4.01.59 4.985.532 6.26c-.058 1.277-.07 1.657-.07 4.888s.012 3.61.07 4.888c.058 1.276.304 2.25.837 3.145.532.894 1.277 1.616 2.028 2.25.893.495 1.868.74 3.145.837 1.277.058 1.657.07 4.888.07s3.61-.012 4.888-.07c1.276-.058 2.25-.304 3.145-.837.894-.532 1.616-1.277 2.25-2.028.495-.893.74-1.868.837-3.145.058-1.277.07-1.657.07-4.888s-.012-3.61-.07-4.888c-.058-1.276-.304-2.25-.837-3.145-.532-.894-1.277-1.616-2.028-2.25-.893-.495-1.868-.74-3.145-.837C15.67 0.526 15.29 0.538 12 0.538zM12 6.873c-2.76 0-5.002 2.242-5.002 5.002s2.242 5.002 5.002 5.002 5.002-2.242 5.002-5.002S14.76 6.873 12 6.873zm0 8.378c-1.894 0-3.426-1.532-3.426-3.426s1.532-3.426 3.426 3.426 3.426 1.532 3.426 3.426-1.532 3.426-3.426 3.426zm5.845-8.993c-.893 0-1.616.723-1.616 1.616s.723 1.616 1.616 1.616 1.616-.723 1.616-1.616-.723-1.616-1.616-1.616z" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-sky-100 via-sky-200 to-blue-300 dark:from-blue-950 dark:via-blue-800 dark:to-blue-700 text-slate-600 dark:text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-bold text-primary dark:text-blue-400 mb-3">{t('navSoenrect')}</h5>
            <p className="text-sm">{t('footerTagline')}</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('footerQuickLinks')}</h5>
            <ul className="space-y-2">
              {NAV_LINKS_DATA.slice(0, 4).map(link => (
                <li key={`footer-${link.id}`}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="hover:text-primary dark:hover:text-blue-400 transition-colors text-sm">
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('footerConnectWithUs')}</h5>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.nameKey} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors p-2 bg-slate-300/70 dark:bg-slate-700/70 rounded-full"
                  aria-label={t(social.nameKey as keyof import('../i18n/locales').Translations)} // Cast for type safety
                >
                  <span className="sr-only">{t(social.nameKey as keyof import('../i18n/locales').Translations)}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.iconPath}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-300/70 dark:border-slate-700/70 text-center text-sm">
          <p>&copy; {currentYear} Soenrect. {t('footerRightsReserved')} {t('footerDesignedWithPassion')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;