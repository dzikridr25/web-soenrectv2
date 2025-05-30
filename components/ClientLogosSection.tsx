
import React from 'react';
import { CLIENT_LOGOS_DATA } from '../constants';
import ClientLogo from './ClientLogo';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ClientLogosSection: React.FC = () => {
  const { t } = useLanguage();
  const [titleRef, isTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [logosRef, areLogosVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.1 });


  return (
    <section id="client-logos" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
            ref={titleRef}
            className={`transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
        >
            <h2 className="text-center text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8 sm:mb-10">
              {t('clientLogosTitle')}
            </h2>
        </div>
        <div 
            ref={logosRef}
            className={`relative w-full overflow-hidden transition-opacity duration-700 ease-out ${areLogosVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: areLogosVisible ? '200ms' : '0ms' }}
        >
          <div className="flex animate-continuous-slide hover:pause-animation">
            {[...CLIENT_LOGOS_DATA, ...CLIENT_LOGOS_DATA].map((client, index) => (
              <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-6 sm:mx-8 md:mx-10" style={{ minWidth: '120px' }}>
                <ClientLogo name={client.name} logoUrl={client.logoUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;