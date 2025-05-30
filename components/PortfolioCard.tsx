import React from 'react';
import { PortfolioProject } from '../types';
import GlassCard from './ui/GlassCard';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioCardProps {
  project: PortfolioProject;
  onViewDetails: (project: PortfolioProject) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onViewDetails }) => {
  const { language, t } = useLanguage();

  return (
    <GlassCard className="overflow-hidden group cursor-pointer" onClick={() => onViewDetails(project)}>
      <div className="relative aspect-video overflow-hidden">
        {project.videoUrl ? (
          <video 
            src={project.videoUrl}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loop
            muted
            playsInline
            autoPlay
          />
        ) : (
          <img 
            src={project.imageUrl || 'https://picsum.photos/600/400'} 
            alt={project.title[language]} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white text-lg font-semibold">{t('portfolioViewDetails')}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">{project.title[language]}</h3>
        <p className="text-sm text-primary dark:text-blue-400">{project.category[language]}</p>
      </div>
    </GlassCard>
  );
};

export default PortfolioCard;
