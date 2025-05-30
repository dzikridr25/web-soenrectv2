import React, { useState, useEffect } from 'react';
import { PortfolioProject } from '../types';
import { CloseIcon } from '../constants';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();
  const [selectedDocumentationImage, setSelectedDocumentationImage] = useState<string | null>(null);

  useEffect(() => {
    if (project && project.documentationImageUrls && project.documentationImageUrls.length > 0) {
      setSelectedDocumentationImage(project.documentationImageUrls[0]);
    } else {
      setSelectedDocumentationImage(null);
    }
  }, [project]);

  if (!project) return null;

  const hasDocumentationImages = project.documentationImageUrls && project.documentationImageUrls.length > 0;
  const modalTitleId = `portfolio-modal-title-${project.id}`;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
    >
      <GlassCard 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors z-10"
          aria-label={t('portfolioModalClose')}
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <div className="aspect-video mb-6 overflow-hidden rounded-lg">
          {project.videoUrl ? (
            <video 
              src={project.videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted 
              playsInline
            />
          ) : (
            <img src={project.imageUrl || 'https://picsum.photos/800/450'} alt={project.title[language]} className="w-full h-full object-cover" />
          )}
        </div>
        
        <div className="px-2 pb-6">
          <h2 id={modalTitleId} className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{project.title[language]}</h2>
          <p className="text-md text-primary dark:text-blue-400 mb-4">{project.category[language]}</p>
          
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">{project.longDescription[language]}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('portfolioModalTechUsed')}</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary dark:bg-blue-400/20 dark:text-blue-300 text-xs font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {hasDocumentationImages && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">{t('portfolioModalGallery')}</h4>
              {selectedDocumentationImage && (
                <div className="mb-4 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700">
                  <img 
                    src={selectedDocumentationImage} 
                    alt={`${t('portfolioModalGallery')} - ${project.title[language]}`} 
                    className="w-full h-auto max-h-[400px] object-contain" 
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {project.documentationImageUrls?.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDocumentationImage(imgUrl)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all
                                ${selectedDocumentationImage === imgUrl ? 'border-primary dark:border-blue-400 scale-105' : 'border-transparent hover:border-slate-400 dark:hover:border-slate-500'}`}
                     aria-label={`${t('viewDetails')} ${index + 1}`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${t('portfolioModalGallery')} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4">
            {project.liveLink && (
              <Button 
                variant="primary" 
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                {t('portfolioModalViewSite')}
              </Button>
            )}
            {project.caseStudyLink && (
               <Button 
                variant="outline"
                onClick={() => window.open(project.caseStudyLink, '_blank')}
              >
                {t('portfolioModalViewCaseStudy')}
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default PortfolioModal;
