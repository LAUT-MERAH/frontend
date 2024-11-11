import React from 'react';
import Footer from '../../components/Footer';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center bg-gray-100 py-16 px-6">
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-700">Hubungi Kami</h2>
            <p className="text-gray-600 mt-2">
              Ada yang ingin ditanyakan? Jangan ragu, kami siap mendengarkan dan membantu!
            </p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="text-gray-700 font-semibold">Nama Pengguna</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama anda..."
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukkan email anda..."
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-gray-700 font-semibold">Judul</label>
              <input
                type="text"
                id="subject"
                placeholder="Judul Utama..."
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-gray-700 font-semibold">Pesan</label>
              <textarea
                id="message"
                placeholder="Pesan anda di sini..."
                rows="6"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
