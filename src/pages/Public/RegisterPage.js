import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/register', formData);
      console.log('Registration successful:', response.data);
      navigate('/login'); // Redirect to login on success
    } catch (err) {
      console.error('Registration error:', err.response?.data?.error || err.message);
      setError(err.response?.data?.error || 'Registration failed!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-6">
        <img src="logo.png" alt="EcoTambak Logo" className="logo2 mx-auto" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-800">Daftar Akun</h1>
      <p className="text-gray-600 text-center mt-2 mb-8 max-w-md">
        Buatlah akun khusus untuk bergabung dengan kita.
      </p>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
            Nama Depan
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Masukkan nama depan anda..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-2">
            Nama Belakang
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Masukkan nama belakang anda..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
            Nama Pengguna
          </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Masukkan nama pengguna anda..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email anda..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Kata sandi (min. 8 karakter)"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Ketik ulang kata sandi"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
        >
          Daftar
        </button>
      </form>

      <p className="text-gray-600 mt-6">
        Sudah punya akun?{' '}
        <Link to="/login" className="text-blue-500 font-semibold hover:underline">
          Masuk sekarang
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
