// components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, handleClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-1/3">
        <div className="relative">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 m-2 p-2 bg-gray-200 rounded-full"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;