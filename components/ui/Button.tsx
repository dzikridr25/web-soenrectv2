
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const gradientButtonStyles = "text-blue-700 dark:text-white bg-gradient-to-br from-sky-100 via-sky-200 to-blue-300 dark:from-blue-950 dark:via-blue-800 dark:to-blue-700 hover:from-sky-200 hover:via-blue-300 hover:to-blue-400 dark:hover:from-blue-900 dark:hover:via-blue-700 dark:hover:to-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400 hover:shadow-lg";

  const variantStyles = {
    primary: gradientButtonStyles,
    secondary: gradientButtonStyles, 
    outline: "bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 text-primary dark:text-blue-400 border border-primary dark:border-blue-400 focus:ring-primary/50 hover:shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;