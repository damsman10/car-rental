import React, { useState } from 'react';
import RequestResetModal from './RequestResetModal';
import EmailSentModal from './EmailSentModal';
import ResetPasswordModal from './ResetPasswordModal';
import SuccessModal from './SuccessModal';

const PasswordResetFlow = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);  // Tracks current modal step
  const [email, setEmail] = useState('');  // Stores the user's email

  // Handle moving to the next modal when successful
  const handleNext = () => {
    setCurrentStep(currentStep + 1); 
  };

  // Store the email and proceed to the next modal
  const handleEmailSubmitSuccess = (userEmail) => {
    setEmail(userEmail); // Store the email so it can be used in future steps
    handleNext();  // Proceed to the next step in the flow
  };

  // Function to handle resending the reset email
  const handleResendEmail = async () => {
    console.log('Resending email to:', email);
    // You would add the actual backend call for resending here
    await axios.post('https://api.example.com/request-reset', { email: email });
  };

  return (
    <div>
      {/* Request Reset Password Modal */}
      {currentStep === 1 && (
        <RequestResetModal onSubmitSuccess={handleEmailSubmitSuccess} onClose={onClose} />
      )}

      {/* Email Sent Confirmation Modal */}
      {currentStep === 2 && (
        <EmailSentModal email={email} onResend={handleResendEmail} />
      )}

      {/* Reset Password Modal */}
      {currentStep === 3 && (
        <ResetPasswordModal onNext={handleNext} />
      )}

      {/* Success Modal */}
      {currentStep === 4 && (
        <SuccessModal />
      )}
    </div>
  );
};

export default PasswordResetFlow;