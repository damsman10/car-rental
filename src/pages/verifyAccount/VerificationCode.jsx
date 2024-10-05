import React, { useState } from 'react';
import VerificationSuccess from './VerificationSuccess';
import VerificationFailure from './VerificationFailure';

function VerificationCode({ email }) {
  const [code, setCode] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  // const [backendCode, setBackendCode] = useState('');
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setFailureModalOpen] = useState(false);

  // Fetch the verification code from the backend
  // useEffect(() => {
  //   const fetchVerificationCode = async () => {
  //     // Simulate fetching code from backend
  //     const fetchedCode = '123456'; // To be replaced with actual API call from backend  to get the code
  //     setBackendCode(fetchedCode);
  //   };

  //   fetchVerificationCode();
  // }, []);

  const handleChange = (e, index) => {
    const newCode = [...code];
    if (/^[0-9]$/.test(e.target.value) || e.target.value === '') {
      newCode[index] = e.target.value.slice(-1);  // Ensure only the last input character is taken
      setCode(newCode);
      // Auto-focus next input
      if (e.target.value && index < 5) {
        document.getElementById(`verification-code-input-${index + 1}`).focus();
      }
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    await axios.post('https://api.example.com/request-reset', { email: email });
    setIsResending(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await verifyCode(code);
    if (response.status === 200) {
      setSuccessModalOpen(true);
    } else if (response.status === 404) {
      setFailureModalOpen(true);
      setError('Invalid code');
    };

    // const enteredCode = code.join('');
    // Compare the entered code with the backend-provided code
    // if (enteredCode === backendCode) {
      // onVerificationSuccess();
    // } else {
    //   setError('Invalid code');
    // }
  };

  const handleKeyDown = (e) => {
    // Allow only numeric keys
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  };

  
  

  const handleCloseSuccess = () => {
    setSuccessModalOpen(false);
    // Redirect to login or desired route
  };

  const handleCloseFailure = () => {
    setFailureModalOpen(false);
  };

return (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
    <div className="relative bg-gradient-to-r from-white to-yellow-300 px-8 py-16 rounded-lg shadow-lg w-full max-w-lg text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className='flex items-center justify-center pb-2'>
          <svg className="h-8 w-8 text-yellow-400" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="88.855px" viewBox="0 0 122.879 88.855" enableBackground="new 0 0 122.879 88.855" xmlSpace="preserve">
            <g><path fill="currentColor" stroke="none" strokeWidth="2" d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z" /></g>
          </svg>
        </div>
        {/* Main heading */}
        <h2 className="text-2xl font-semibold mb-2">Please Verify Account</h2>
        <p className="text-gray-600 mb-6">
          Enter the six digit code we sent to <strong>{email}</strong> to verify your new account:
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`verification-code-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="border border-gray-300 text-center p-2 mx-1 w-12 h-12 text-lg rounded"
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-white font-semibold py-2 px-4 rounded w-full border-none"
          >
            Verify & Continue
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
        </form>

        <VerificationSuccess
          isOpen={isSuccessModalOpen}
          handleClose={handleCloseSuccess}
        />
        <VerificationFailure
          isOpen={isFailureModalOpen}
          handleClose={handleCloseFailure}
        />
      </div>
    </div>
  </div>
);
}

export default VerificationCode;