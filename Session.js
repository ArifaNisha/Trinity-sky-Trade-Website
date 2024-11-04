
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const SESSION_TIMEOUT = 25*60*1000; // 1 minute

const SessionTimeout = () => {
  const [timeoutId, setTimeoutId] = useState(null);
  const [showTimeoutModal, setShowTimeoutModal] = useState(false); // State to show modal
  const navigate = useNavigate();

  // Memoized function to handle session timeout
  const handleSessionTimeout = useCallback(() => {
    setShowTimeoutModal(true); // Show timeout modal before redirect
    setTimeout(() => {
      localStorage.removeItem('token'); // Clear the session token
      navigate('/admin'); // Redirect to the login page after showing the message
    }, 5000); // Redirect after 5 seconds, giving time for modal to show
  }, [navigate]);

  // Function to reset the session timeout
  const resetTimeout = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      handleSessionTimeout(); // Call session timeout handler
    }, SESSION_TIMEOUT);

    setTimeoutId(newTimeoutId);
  }, [timeoutId, handleSessionTimeout]);

  const handleUserActivity = useCallback(() => {
    resetTimeout(); // Reset the timeout on user activity
  }, [resetTimeout]);

  useEffect(() => {
    resetTimeout(); // Start the initial session timeout

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      clearTimeout(timeoutId); // Cleanup on unmount
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [timeoutId, handleUserActivity, resetTimeout]);

  return (
    <>
      {showTimeoutModal && (
        <div className="timeout-modal" style={modalStyles}>
          <p>Session timed out! You will be redirected to login shortly.</p>
        </div>
      )}
    </>
  );
};

// Example inline modal styles
const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  border: '1px solid #ccc',
  zIndex: 1000,
};

export default SessionTimeout;