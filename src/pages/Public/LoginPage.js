import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/Hero');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-6">
        <img src="logo.png" alt="EcoTambak Logo" className="logo2 mx-auto" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-800">Masuk</h1>
      <p className="text-gray-600 text-center mt-2 mb-8 max-w-md">
        Akses informasi dan solusi terkini untuk sukses di dunia budidaya tambak. Login untuk mulai menjelajah lebih lanjut!
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan Email anda..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
            Nama Pengguna
          </label>
          <input
            type="text"
            id="username"
            placeholder="Masukkan nama anda..."
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Masuk
        </button>
      </form>

      <p className="text-gray-600 mt-6 mb-10">
        Belum punya akun?{' '}
        <Link to="/register" className="text-blue-500 font-semibold hover:underline">
          Registrasi sekarang
        </Link>.
      </p>
    </div>
  );
};

export default LoginPage;
