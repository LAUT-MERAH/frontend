import React from 'react';

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Link reset password telah dikirim ke email Anda.');
  };
 //test
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-6">
        <img src="logo.png" alt="EcoTambak Logo" className="logo2 mx-auto" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-800">Lupa Kata Sandi</h1>
      <p className="text-gray-600 text-center mt-2 mb-8 max-w-md">
        Masukkan email Anda untuk menerima tautan reset kata sandi.
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="mb-6">
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

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Kirim Tautan Reset
        </button>
      </form>

      <p className="text-gray-600 mt-6">
        <a href="/login" className="text-blue-500 font-semibold hover:underline">
          Kembali ke Halaman Login
        </a>
      </p>
    </div>
  );
};

export default ForgotPassword;
