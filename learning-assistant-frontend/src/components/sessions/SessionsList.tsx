import React from 'react';
import SessionCard from './SessionCard';
import type { Session } from '../../types';

interface SessionsListProps {
  sessions: Session[];
  onSessionClick?: (session: Session) => void;
}

const SessionsList: React.FC<SessionsListProps> = ({
  sessions,
  onSessionClick,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          session={session}
          onClick={() => onSessionClick?.(session)}
        />
      ))}
    </div>
  );
};

export default SessionsList;
