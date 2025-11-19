import React from "react";

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <div className="text-center py-[120px] px-10 animate-[fadeInUp_0.8s_ease_0.3s_forwards] opacity-0">
      <div className="text-[80px] mb-6 opacity-30">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-base text-muted-blue mb-8 max-w-[400px] mx-auto">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-8 py-4 bg-gradient-to-br from-electric to-electric-dark text-midnight rounded-2xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,255,136,0.3)]"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
