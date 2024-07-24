import React from 'react';

interface PlaceholderCardProps {
  className?: string;
}

const PlaceholderCard: React.FC<PlaceholderCardProps> = ({ className }) => {
  return (
    <div className={`w-full md:w-44 lg:w-44 bg-gray-300 h-64 rounded-2xl ${className}`}></div>
  );
};

export default PlaceholderCard;