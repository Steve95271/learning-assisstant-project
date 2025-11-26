import React from 'react';
import type { Session } from '../../types';

interface SessionCardProps {
  session: Session;
  onClick?: () => void;
}

const SessionCard: React.FC<SessionCardProps> = ({ session, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-deep-blue/60 backdrop-blur-[40px] border border-white/[0.06] rounded-[20px] p-7 cursor-pointer transition-all duration-300 ease-out flex gap-5 hover:bg-deep-blue/80 hover:translate-x-2 hover:border-white/[0.12]"
    >
      <div className="w-12 h-12 rounded-[14px] bg-electric/10 border border-electric/20 flex items-center justify-center text-2xl flex-shrink-0">
        {session.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {session.title}
        </h3>
        <p className="text-sm text-muted-blue leading-relaxed mb-3 line-clamp-2">
          {session.preview}
        </p>
        <div className="flex gap-4 text-[13px] text-muted-blue">
          <div className="flex items-center gap-1.5">
            <span>◷</span>
            <span>{session.meta.timestamp}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>💬</span>
            <span>{session.meta.messageCount} messages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
