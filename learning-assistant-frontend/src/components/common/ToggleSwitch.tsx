import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative w-11 h-6 cursor-pointer">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={`absolute top-0 left-0 right-0 bottom-0 rounded-3xl transition-all duration-300 ${
          checked ? 'bg-electric' : 'bg-white/10'
        }`}
      >
        <span
          className={`absolute h-[18px] w-[18px] left-[3px] bottom-[3px] bg-soft-white rounded-full transition-transform duration-300 ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
