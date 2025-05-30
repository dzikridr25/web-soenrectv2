
import React from 'react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { CONTACT_INFO, WhatsAppIcon } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContactForm: React.FC = () => {
  const { language, t } = useLanguage();
  const [titleRef, isTitleVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.2 });
  const [contactInfoRef, isContactInfoVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.1 });
  const [whatsappCardRef, isWhatsappCardVisible] = useIntersectionObserver({ freezeOnceVisible: true, threshold: 0.1 });


  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.defaultWhatsappMessage[language])}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">{t('contactTitle')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto" style={{ animationDelay: isTitleVisible ? '150ms' : '0ms'}}>
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div 
            ref={contactInfoRef}
            className={`md:col-span-2 animate-on-scroll ${isContactInfoVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
             <GlassCard className="p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">{t('contactInfoTitle')}</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 flex-grow">
                <p>
                  <strong>{t('contactInfoEmail')}</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary dark:hover:text-blue-400 break-all">{CONTACT_INFO.email}</a>
                </p>
                <p>
                  <strong>{t('contactInfoPhone')}</strong> <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="hover:text-primary dark:hover:text-blue-400">{CONTACT_INFO.phone}</a>
                </p>
                <p>
                  <strong>{t('contactInfoAddress')}</strong> {CONTACT_INFO.address}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-300/50 dark:border-slate-700/50">
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-3">{t('contactInfoOfficeHours')}</h4>
                <p className="text-slate-600 dark:text-slate-300">{t('contactInfoOfficeHoursDays')}</p>
                <p className="text-slate-600 dark:text-slate-300">{t('contactInfoOfficeHoursWeekend')}</p>
              </div>
            </GlassCard>
          </div>

          <div 
            ref={whatsappCardRef}
            className={`md:col-span-3 animate-on-scroll ${isWhatsappCardVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
             style={{ animationDelay: '150ms' }}
          >
            <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4 text-center">{t('contactConnectWhatsAppTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 text-center">
                {t('contactConnectWhatsAppDesc')}
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full flex items-center justify-center py-3 sm:py-4"
                onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
              >
                <WhatsAppIcon className="w-6 h-6 mr-2.5" />
                {t('contactConnectWhatsAppButton')}
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;