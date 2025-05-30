import React, { useState } from 'react';
import { Service } from '../types';
import GlassCard from './ui/GlassCard';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  const { language, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GlassCard 
      className={`flex flex-col items-center text-center cursor-pointer h-full ${className || ''}`} 
      onClick={() => service.details && setIsExpanded(!isExpanded)} // Only expand if details exist
      aria-label={`${service.title[language]}: ${isExpanded ? t('servicesShowLess') : t('servicesLearnMore')}`}
    >
      <div className="p-4 bg-primary/10 dark:bg-blue-400/10 rounded-full mb-6 inline-block">
        {React.isValidElement<{ className?: string }>(service.icon) && service.icon.props.className ? 
          service.icon : 
          React.isValidElement<{ className?: string }>(service.icon) ? 
          React.cloneElement(service.icon, { className: "w-10 h-10 sm:w-12 sm:h-12 text-primary dark:text-blue-400" }) : 
          null
        }
      </div>
      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{service.title[language]}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-grow">{service.description[language]}</p>
      {service.details && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
            className="text-sm text-primary dark:text-blue-400 hover:underline mb-2"
            aria-expanded={isExpanded}
          >
            {isExpanded ? t('servicesShowLess') : t('servicesLearnMore')}
          </button>
          {isExpanded && (
            <p className="text-xs text-slate-500 dark:text-slate-400 animate-fade-in">
              {service.details[language]}
            </p>
          )}
        </>
      )}
    </GlassCard>
  );
};

export default ServiceCard;
