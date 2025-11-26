import React from 'react';
import StatItem from '../common/StatItem';
import type { TopicStats as TopicStatsType } from '../../types';

interface TopicStatsProps {
  stats: TopicStatsType;
}

const TopicStats: React.FC<TopicStatsProps> = ({ stats }) => {
  return (
    <div className="flex gap-10">
      <StatItem icon="💬" label={`${stats.conversations} conversations`} />
      <StatItem icon="📄" label={`${stats.files} files`} />
      <StatItem icon="◷" label={`Updated ${stats.lastUpdated}`} />
    </div>
  );
};

export default TopicStats;
