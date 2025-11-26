import React from 'react';

interface SummaryPreviewProps {
  title: string;
  conversationCount: number;
}

const SummaryPreview: React.FC<SummaryPreviewProps> = ({
  title,
  conversationCount,
}) => {
  return (
    <div className="flex items-center gap-4 p-5 bg-electric/5 border border-electric/15 rounded-2xl mb-5">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric to-electric-dark flex items-center justify-center text-2xl flex-shrink-0">
        📑
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold mb-1">{title}</div>
        <div className="text-[13px] text-muted-blue">
          Auto-generated from {conversationCount} conversations
        </div>
      </div>
    </div>
  );
};

export default SummaryPreview;
