import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-midnight/80 backdrop-blur-[8px] z-[1000] flex items-center justify-center animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <div
        className="bg-deep-blue/95 backdrop-blur-[40px] border border-white/10 rounded-[28px] p-12 max-w-[560px] w-full animate-[modalSlide_0.4s_cubic-bezier(0.4,0,0.2,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[28px] font-bold tracking-tight">{title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center cursor-pointer text-xl transition-all duration-300 hover:bg-white/[0.08]"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
