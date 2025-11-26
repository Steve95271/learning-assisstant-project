import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="flex flex-col gap-6 animate-[fadeInUp_0.8s_ease_0.4s_forwards] opacity-0">
      {children}
    </aside>
  );
};

export default Sidebar;
