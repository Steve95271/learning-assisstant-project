import React from 'react';
import ToggleSwitch from '../common/ToggleSwitch';

interface AutoUpdateIndicatorProps {
  isActive: boolean;
  onToggle: (checked: boolean) => void;
}

const AutoUpdateIndicator: React.FC<AutoUpdateIndicatorProps> = ({
  isActive,
  onToggle,
}) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl mb-5">
      <div
        className={`w-2.5 h-2.5 rounded-full relative ${
          isActive
            ? 'bg-electric animate-[pulse_2s_ease_infinite]'
            : 'bg-muted-blue'
        }`}
      />
      <span className="flex-1 text-sm font-medium">Auto-update enabled</span>
      <ToggleSwitch checked={isActive} onChange={onToggle} />
    </div>
  );
};

export default AutoUpdateIndicator;
