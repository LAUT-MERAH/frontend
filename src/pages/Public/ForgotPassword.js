import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/forgot-password', { email });
      setToken(response.data.resetToken);
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong!');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">Ubah Kata Sandi</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <label className="block mb-4">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </label>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
          Dapatkan Token Ubah Kata Sandi
        </button>
        {message && <p className="text-green-500 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>

      {token && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-800 font-semibold">Your Reset Token:</p>
          <code className="block text-gray-600">{token}</code>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
