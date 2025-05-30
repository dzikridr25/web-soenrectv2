import React from 'react';

interface ClientLogoProps {
  name: string;
  logoUrl: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name, logoUrl }) => {
  return (
    <div className="flex items-center justify-center p-2" title={name}>
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transform hover:scale-105 transition-all duration-300 ease-in-out"
        loading="lazy"
      />
    </div>
  );
};

export default ClientLogo;
