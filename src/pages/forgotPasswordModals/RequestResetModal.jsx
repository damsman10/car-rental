import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RequestResetModal = ({ onSubmitSuccess }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Backend request to send the reset email
      const response = await axios.post('https://api.example.com/request-reset', { email });

      if (response.status === 200) {
        onSubmitSuccess(email);  // Pass the email back to the parent
      }
    } catch (err) {
      setError('Failed to send reset link, please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur flex justify-center items-center z-50">

      {/* Modal Content */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">

        {/* Top Icon with Two Circles */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute rounded-full bg-yellow-100 opacity-50 w-12 h-12"></div> {/* outer circle */}

            <div className="relative flex items-center justify-center w-8 h-8 top-2 left-2 bg-yellow-100 rounded-full">
              {/* Key Icon */}
              <svg className="h-4 w-4 text-yellow-300" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision"
                textRendering="geometricPrecision" imageRendering="optimizeQuality"
                fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.939">

                <path fill="currentColor" d="M467.741 267.225c-29.508 29.507-68.357 44.26-107.168 44.26-27.525 0-55.065-7.421-79.28-22.259L60.581 509.939 2.067 451.424l29.258-29.258L0 390.842l37.804-37.806 31.326 31.325 9.609-9.609-46.357-46.357 41.01-41.01 46.357 46.357 103.056-103.056c-14.744-24.161-22.12-51.694-22.121-79.255h-.168c0-38.81 14.752-77.657 44.258-107.163C274.29 14.756 313.135 0 351.946 0c38.81 0 77.66 14.756 107.167 44.263l8.631 8.632C497.249 82.4 512 121.247 512 160.057h-.167c-.002 38.919-14.704 77.779-44.092 107.168zm-60.198-60.185c12.993-12.995 19.489-30.023 19.489-46.983h-.168c0-17.062-6.438-34.096-19.312-46.97l-8.632-8.631c-12.877-12.878-29.911-19.32-46.974-19.32-17.064 0-34.097 6.442-46.975 19.32-12.881 12.881-19.319 29.912-19.319 46.975h-.168c0 16.96 6.498 33.988 19.485 46.975l8.632 8.632c12.874 12.872 29.906 19.31 46.972 19.31 17.064 0 34.098-6.438 46.97-19.308z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-2xl font-semibold mb-2">Forgot password?</h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          No worries, we’ll send you reset instructions.
        </p>

        {/* Form (Email Input and Submit Button) */}
        <form onSubmit={handleRequestReset} className="space-y-6">
          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Display error message if available */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg transition duration-200 hover:bg-yellow-400 focus:outline-none"
          >
            Reset password
          </button>
        </form>

        {/* Back to login */}
        <div className="mt-6">
          <Link to="/login" className="text-sm text-gray-600 inline-flex items-center">
            {/* Arrow with no underline on hover */}
            <span className="mr-2 hover:no-underline">&larr;</span>

            {/* Only "Back to log in" text gets underlined on hover */}
            <span className="hover:underline">Back to log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestResetModal;