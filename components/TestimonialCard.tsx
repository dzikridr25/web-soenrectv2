import React from 'react';
import { Testimonial } from '../types';
import GlassCard from './ui/GlassCard';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  const { language } = useLanguage();
  
  return (
    <GlassCard 
      className={`mx-auto transition-all duration-500 ease-in-out transform text-center
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-90'}`}
    >
      <img 
        src={testimonial.avatarUrl} 
        alt={testimonial.name} 
        className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary dark:border-blue-400"
      />
      <p className="text-slate-600 dark:text-slate-300 italic mb-4 text-sm sm:text-base">"{testimonial.quote[language]}"</p>
      <h4 className="text-md font-semibold text-slate-800 dark:text-white">{testimonial.name}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {testimonial.role[language]}
        {testimonial.company && `, ${testimonial.company}`}
      </p>
    </GlassCard>
  );
};

export default TestimonialCard;
