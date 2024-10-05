import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // React Router hook for programmatic navigation

const SuccessModal = () => {
  const navigate = useNavigate();

  // Handle the "Continue" button click to navigate to the /login-placeholder
  const handleContinue = () => {
    // Or you can navigate to any other page, like the login page or home
    navigate('/login-placeholder'); // Navigate to the dashboard route after successful password reset
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center z-50">
       <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="w-full max-w-md mx-auto text-center">

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

                {/* Heading */}
                <h2 className="text-2xl font-semibold mb-2">Password reset</h2>

                {/* Message */}
                <p className="text-sm text-gray-500 mb-6">
                    Your password has been successfully reset. <br />
                    Click below to log in magically.
                </p>

                {/* Continue Button */}
                <button
                    onClick={handleContinue}
                    className="w-full bg-yellow-500 text-white py-2 rounded-lg transition duration-200 hover:bg-yellow-400 focus:outline-none"
                >
                    Continue
                </button>

                {/* Back to log in Link */}
                <div className="mt-6">
                    <Link to="/login" className="text-sm text-gray-600 inline-flex items-center">

                        <span className="mr-2 hover:no-underline">&larr;</span>


                        <span className="hover:underline">Back to log in</span>
                    </Link>
                </div>
            </div>
        </div>
    );
    </div>
  );
};

export default SuccessModal;