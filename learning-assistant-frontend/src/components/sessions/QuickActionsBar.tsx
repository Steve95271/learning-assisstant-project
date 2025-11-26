import React from 'react';
import QuickActionButton from './QuickActionButton';
import type { QuickAction } from '../../types';

interface QuickActionsBarProps {
  actions: QuickAction[];
  onActionClick?: (action: QuickAction) => void;
}

const QuickActionsBar: React.FC<QuickActionsBarProps> = ({
  actions,
  onActionClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-[fadeInUp_0.8s_ease_0.4s_forwards] opacity-0">
      {actions.map((action, index) => (
        <QuickActionButton
          key={index}
          action={action}
          onClick={() => onActionClick?.(action)}
        />
      ))}
    </div>
  );
};

export default QuickActionsBar;
