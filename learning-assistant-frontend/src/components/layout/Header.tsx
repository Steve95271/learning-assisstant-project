import React from 'react';
import BackButton from './BackButton';
import HeaderActions from './HeaderActions';

interface HeaderProps {
  onBack?: () => void;
  onSettings?: () => void;
  onNewConversation?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onBack,
  onSettings,
  onNewConversation,
}) => {
  return (
    <header className="flex justify-between items-center mb-10 animate-[slideDown_0.8s_ease_forwards] opacity-0">
      <BackButton onClick={onBack} />
      <HeaderActions
        onSettings={onSettings}
        onNewConversation={onNewConversation}
      />
    </header>
  );
};

export default Header;
