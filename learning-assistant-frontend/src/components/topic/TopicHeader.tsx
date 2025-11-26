import React from 'react';
import TopicIcon from './TopicIcon';
import TopicStats from './TopicStats';
import type { Topic } from '../../types';

interface TopicHeaderProps {
  topic: Topic;
}

const TopicHeader: React.FC<TopicHeaderProps> = ({ topic }) => {
  return (
    <div className="relative overflow-hidden bg-deep-blue/60 backdrop-blur-[40px] border border-white/[0.06] rounded-3xl p-12 mb-8 animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-electric before:to-accent-orange">
      <TopicIcon icon={topic.icon} />
      <h1 className="font-[var(--font-heading)] text-[42px] font-bold mb-4 tracking-tight">
        {topic.title}
      </h1>
      <p className="text-lg text-muted-blue leading-[1.7] mb-8 max-w-[800px]">
        {topic.description}
      </p>
      <TopicStats stats={topic.stats} />
    </div>
  );
};

export default TopicHeader;
