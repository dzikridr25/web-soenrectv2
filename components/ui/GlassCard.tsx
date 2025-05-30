
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`bg-glass-light dark:bg-glass-dark backdrop-blur-lg border border-glassborder-light dark:border-glassborder-dark rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-blue-500/30 hover:-translate-y-1.5 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;