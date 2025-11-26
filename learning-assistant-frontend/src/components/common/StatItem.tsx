import React from 'react';
import type { StatItemProps } from '../../types';

const StatItem: React.FC<StatItemProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2.5 text-[15px] text-warm-gray">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default StatItem;
