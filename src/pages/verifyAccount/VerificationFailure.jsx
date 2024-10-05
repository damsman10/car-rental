// components/VerificationFailure.jsx
import React from 'react';
import Modal from './Modal';

const VerificationFailure = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Verification Failed</h2>
            <p className="mb-4">The verification code you entered is incorrect. Please try again.</p>
            <button
                onClick={handleClose}
                className="bg-red-500 text-white p-2 rounded border-none"
            >
                Retry
            </button>
        </div>
    </div>
    </Modal>
  );
};

export default VerificationFailure;