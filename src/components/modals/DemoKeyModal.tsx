import React from 'react';

interface DemoKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const DemoKeyModal = ({ isOpen, onClose, onSuccess }: DemoKeyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Demo Key</h2>
        <p>Enter your demo key to continue</p>
        <button onClick={onSuccess}>Continue</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default DemoKeyModal; 