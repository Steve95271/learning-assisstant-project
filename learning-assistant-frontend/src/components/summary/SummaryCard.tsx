import React from 'react';
import SummaryPreview from './SummaryPreview';
import AutoUpdateIndicator from './AutoUpdateIndicator';
import type { SummaryNote } from '../../types';

interface SummaryCardProps {
  summary: SummaryNote;
  onToggleAutoUpdate: (checked: boolean) => void;
  onViewSummary: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  summary,
  onToggleAutoUpdate,
  onViewSummary,
}) => {
  return (
    <div className="bg-deep-blue/60 backdrop-blur-[40px] border border-white/[0.06] rounded-[20px] p-7">
      <h3 className="text-lg font-semibold mb-5 tracking-tight">
        Summary Note
      </h3>
      <SummaryPreview
        title={summary.title}
        conversationCount={summary.conversationCount}
      />
      <AutoUpdateIndicator
        isActive={summary.autoUpdate}
        onToggle={onToggleAutoUpdate}
      />
      <button
        onClick={onViewSummary}
        className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-br from-electric to-electric-dark text-midnight rounded-[14px] font-semibold text-[15px] transition-all duration-300 ease-out mb-4 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,255,136,0.3)]"
      >
        <span>View Full Summary</span>
        <span>→</span>
      </button>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5 text-[13px] text-muted-blue">
          <span className="text-base">◷</span>
          <span>Updated {summary.lastUpdated}</span>
        </div>
        <div className="flex items-center gap-2.5 text-[13px] text-muted-blue">
          <span className="text-base">📝</span>
          <span>{summary.wordCount.toLocaleString()} words</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
