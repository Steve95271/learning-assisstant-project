import React from "react";
import Button from "../common/Button";

interface PageHeaderProps {
  onNewTopic: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onNewTopic }) => {
  return (
    <div className="flex justify-between items-end mb-12 animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0">
      <div>
        <h1 className="font-[var(--font-heading)] text-5xl font-bold mb-3 tracking-tight">
          Topics
        </h1>
        <p className="text-lg text-muted-blue">
          Organize your learning by topic with conversations and files
        </p>
      </div>
      <Button variant="primary" onClick={onNewTopic}>
        <span>+</span>
        <span>New Topic</span>
      </Button>
    </div>
  );
};

export default PageHeader;
