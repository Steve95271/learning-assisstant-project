import React from 'react';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 text-warm-gray text-[15px] font-medium transition-colors duration-300 hover:text-electric"
    >
      <span>←</span>
      <span>Back to Topics</span>
    </button>
  );
};

export default BackButton;
