import React from 'react';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-6">
        <img src="logo.png" alt="EcoTambak Logo" className="logo2 mx-auto" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-800">Daftar Akun</h1>
      <p className="text-gray-600 text-center mt-2 mb-8 max-w-md">
      Buatlah akun khusus untuk bergabung dengan kita.
      </p>

      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
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
            placeholder="Kata sandi (min. 8 karakter)"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Konfirmasi Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ketik ulang kata sandi"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <Link to="/login">
            <button 
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Daftar
            </button>
        </Link>
      </form>

      <p className="text-gray-600 mt-6 mb-10">
  Sudah punya akun?{' '}
  <a href="/login" className="text-blue-500 font-semibold hover:underline">
    Masuk sekarang
  </a>.
</p>

    </div>
  );
};

export default LoginPage;
