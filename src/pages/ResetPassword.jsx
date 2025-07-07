import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const [step, setStep] = useState(1); // 1 for code, 2 for passwords
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    if (!code) {
      setError('Please enter the reset code');
      return;
    }
    try {
      const response = await axios.post('/api/users/verify-reset-code', { code });
      setMessage(response.data.message);
      setError('');
      setStep(2); // Move to password input step
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/users/reset-password', {
        code,
        password,
      });
      setMessage(response.data.message);
      setError('');
      setCode('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login'); // Redirect to login after successful reset
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {step === 1 ? (
          <form onSubmit={handleCodeSubmit}>
            <div className="mb-4">
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Reset Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter the code from your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Verify Code
            </button>
          </form>
        ) : (
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Confirm new password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;