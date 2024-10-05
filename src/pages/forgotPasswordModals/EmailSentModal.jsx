import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmailSentModal = ({ email, onResend }) => {
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();


  const handleResend = async () => {
    setIsResending(true);
    await onResend(); // Call the parent function to trigger resend logic
    setIsResending(false);
  };
  // Handle the "Continue" button click to navigate to the /login-placeholder
  const handleSignIn = () => {
    // Or you can navigate to any other page, like the login page or home
    navigate('/login'); // Navigate to the dashboard route after successful password reset
  }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center z-50 text-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">

        {/* Top Icon: Two circles, outer with lighter purple, inner with darker */}
        <div className="flex justify-center mb-6">
          {/* Outer Circle */}
          <div className="relative">
            <div className="absolute inset-0 w-12 h-12 bg-yellow-100 rounded-full opacity-50"></div>

            {/* Inner Circle */}
            <div className="relative w-8 h-8 top-2 left-2 bg-yellow-100 rounded-full flex items-center justify-center ">
              <svg className="h-4 w-4 text-yellow-500" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="88.855px" viewBox="0 0 122.879 88.855" enable-background="new 0 0 122.879 88.855" xml:space="preserve">
                <g><path fill="none" stroke="currentColor" stroke-width="4" d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z" /></g>
              </svg>
            </div>
          </div>
        </div>
        {/* Main heading */}
        <h2 className="text-2xl font-semibold mb-4">Check your email</h2>
        <p className="text-sm text-gray-500 mb-4">
          We've sent a password reset link to <strong>{email}</strong>. <br />
          Please check your email to proceed.
        </p>


        {/* Continue to next step */}
        <button onClick={handleSignIn} className="mb-2 w-full bg-yellow-500 py-2 rounded-lg">
          Sign In
        </button>

        {/* Didn't receive the email section */}
        <p className="mt-4 text-sm text-gray-500">
          Didn’t receive the email?{' '}
          <span
            className="text-yellow-500 hover:underline cursor-pointer"
            onClick={handleResend} // Trigger the resend logic
            disabled={isResending}
          >
            {isResending ? 'Resending...' : 'Click to resend'}
          </span>
        </p>


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

export default EmailSentModal;