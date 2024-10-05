import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordResetFlow from "./PasswordResetFlow";  // The modal flow component

const LoginPlaceholder = () => {
  const [showPasswordReset, setShowPasswordReset] = useState(false);  // Tracks if the modal should show

  const handleForgotPasswordClick = () => {
    setShowPasswordReset(true);  // Show the reset password modal
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {/* Login form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors">
            Sign In
          </button>
        </form>
        
        {/* Forgot Password Link */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 mt-4">
            Forgot your password?
            {" "}
            <Link
              to=""  /* Keep the Link, but don't let it navigate */
              className="text-yellow-500 hover:underline"
              onClick={handleForgotPasswordClick}  /* Open modal on click, not change page */
            >
              Reset it here
            </Link>
          </p>
        </div>
      </div>
      {/* Password Reset Flow (Modal) */}
      {/* Show the modal when `showPasswordReset` is true */}
      {showPasswordReset && (
        <PasswordResetFlow onClose={() => setShowPasswordReset(false)} />
      )}
    </div>
  );
};

export default LoginPlaceholder;