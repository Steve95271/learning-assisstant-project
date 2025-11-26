import React from 'react';

interface UploadAreaProps {
  onUpload?: (files: FileList) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload?.(e.target.files);
    }
  };

  return (
    <label className="block p-8 border-2 border-dashed border-white/10 rounded-[14px] text-center cursor-pointer transition-all duration-300 mt-4 hover:border-electric hover:bg-electric/[0.03]">
      <input
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="text-[32px] mb-3 opacity-50">📎</div>
      <div className="text-sm text-muted-blue">
        Drop files or click to upload
      </div>
    </label>
  );
};

export default UploadArea;
