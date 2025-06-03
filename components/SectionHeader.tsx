import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => (
  <div className={`mb-12 text-center ${className}`}>
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-[#00897B] to-teal-600 bg-clip-text text-transparent inline-block mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader; 