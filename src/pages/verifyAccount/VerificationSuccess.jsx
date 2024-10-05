import React from 'react';
import Modal from './Modal';

function VerificationSuccess({ isOpen, handleClose  }) {
    return (

        <Modal isOpen={isOpen} handleClose={handleClose} >
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
                    {/* Top Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            {/* Outer circle */}
                            <div className="absolute w-12 h-12 bg-green-100 rounded-full opacity-50"></div>
                            {/* Inner circle */}
                            <div className="relative w-8 h-8 top-2 left-2 bg-green-200 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 text-green-600" /* Set color to green and size larger */
                                    fill="none"
                                >
                                    <path
                                        d="M20.94,11A8.26,8.26,0,0,1,21,12a9,9,0,1,1-9-9,8.83,8.83,0,0,1,4,1"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                    <polyline
                                        points="21 5 12 14 8 10"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Account Verified</h2>
                    <p className="mb-4">Your account has been successfully verified.</p>
                    <button
                        onClick={handleClose}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white p-2 rounded w-full border-none"
                    >
                        Proceed to Login
                    </button>
                </div>
            </div>
        </Modal> 
    );
}

export default VerificationSuccess;