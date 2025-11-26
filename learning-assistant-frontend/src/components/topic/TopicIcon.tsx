import React from 'react';

interface TopicIconProps {
  icon: string;
}

const TopicIcon: React.FC<TopicIconProps> = ({ icon }) => {
  return (
    <div className="w-[72px] h-[72px] rounded-[20px] bg-gradient-to-br from-electric to-electric-dark flex items-center justify-center text-[36px] mb-6">
      {icon}
    </div>
  );
};

export default TopicIcon;
