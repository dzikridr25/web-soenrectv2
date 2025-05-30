import React from 'react';
// No useLanguage here as it might be used outside provider. Message should be passed.

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => { // Default message
  return (
    <div 
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <div 
        className="w-12 h-12 sm:w-16 sm:h-16 border-4 sm:border-[5px] border-primary dark:border-blue-400 border-t-transparent dark:border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      ></div>
      {message && <p className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-300">{message}</p>}
      {/* If the loader is used inside the LanguageProvider context, 'loaderLoading' could be translated.
          Otherwise, this sr-only text remains static or needs message prop for it too.
          For simplicity, keeping it static English here or relying on the passed `message`.
      */}
      <p className="sr-only">Loading...</p>
    </div>
  );
};

export default Loader;
