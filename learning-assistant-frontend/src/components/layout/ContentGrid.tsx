import React from 'react';

interface ContentGridProps {
  children: React.ReactNode;
}

const ContentGrid: React.FC<ContentGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
      {children}
    </div>
  );
};

export default ContentGrid;
