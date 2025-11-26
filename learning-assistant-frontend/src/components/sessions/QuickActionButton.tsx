import React from 'react';
import type { QuickAction } from '../../types';

interface QuickActionButtonProps {
  action: QuickAction;
  onClick?: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  action,
  onClick,
}) => {
  const gradientStyles = {
    primary: 'bg-gradient-to-br from-electric to-electric-dark',
    orange: 'bg-gradient-to-br from-accent-orange to-accent-orange-light',
    blue: 'bg-gradient-to-br from-accent-blue to-accent-blue-light',
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3.5 p-5 px-6 bg-deep-blue/60 backdrop-blur-[40px] border border-white/[0.06] rounded-2xl cursor-pointer transition-all duration-300 ease-out text-left hover:bg-deep-blue/80 hover:border-electric hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
    >
      <span
        className={`w-11 h-11 rounded-xl ${gradientStyles[action.gradient]} flex items-center justify-center text-[22px] flex-shrink-0`}
      >
        {action.icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-semibold mb-1 text-soft-white">
          {action.label}
        </div>
        <div className="text-xs text-muted-blue">{action.hint}</div>
      </div>
    </button>
  );
};

export default QuickActionButton;
