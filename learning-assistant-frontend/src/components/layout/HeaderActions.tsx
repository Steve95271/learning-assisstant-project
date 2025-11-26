import React from 'react';
import Button from '../common/Button';

interface HeaderActionsProps {
  onSettings?: () => void;
  onNewConversation?: () => void;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({
  onSettings,
  onNewConversation,
}) => {
  return (
    <div className="flex gap-3">
      <Button variant="secondary" onClick={onSettings}>
        ⚙️ Settings
      </Button>
      <Button variant="primary" onClick={onNewConversation}>
        <span>+</span>
        <span>New Conversation</span>
      </Button>
    </div>
  );
};

export default HeaderActions;
