import React from 'react';
import QuickActionsBar from './QuickActionsBar';
import SessionsList from './SessionsList';
import type { QuickAction, Session } from '../../types';

interface SessionsSectionProps {
  quickActions: QuickAction[];
  sessions: Session[];
  onActionClick?: (action: QuickAction) => void;
  onSessionClick?: (session: Session) => void;
}

const SessionsSection: React.FC<SessionsSectionProps> = ({
  quickActions,
  sessions,
  onActionClick,
  onSessionClick,
}) => {
  return (
    <div className="animate-[fadeInUp_0.8s_ease_0.3s_forwards] opacity-0">
      <QuickActionsBar actions={quickActions} onActionClick={onActionClick} />
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Conversations</h2>
      </div>
      <SessionsList sessions={sessions} onSessionClick={onSessionClick} />
    </div>
  );
};

export default SessionsSection;
