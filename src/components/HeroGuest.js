// src/components/HeroSection.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faVideo } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleModuleClick = () => {
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <header className="bg-white shadow-lg py-4 fixed top-0 w-full z-50">
  <div className="container mx-auto flex justify-between items-center">
    <div className="logo-wrapper">
      <img src="logo.png" alt="EcoTambak Logo" className="logo mr-2" />
      <div className="font-montserrat text-green-600 text-2xl font-semibold">
        Eco<span className="text-blue-600">Tambak</span>
      </div>
          </div>

          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <ScrollLink to="beranda" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">Beranda</ScrollLink>
            <ScrollLink to="tentangKami" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">Tentang Kami</ScrollLink>
            <ScrollLink to="produk" smooth={true} duration={500} className="hover:text-blue-500 cursor-pointer">Produk</ScrollLink>
            <Link to="/contact" className="hover:text-blue-500">Kontak</Link>
            </nav>

          <RouterLink to="/login" className="border border-gray-400 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-200">
            Login
          </RouterLink>
        </div>
      </header>

      {/* Content Sections */}
      <section id="beranda" className="h-screen flex items-center justify-center px-8 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-700">Mari Berinovasi Bersama</h1>
            <div className="font-montserrat text-green-600 text-4xl font-semibold">
              Eco<span className="text-blue-600">Tambak</span>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              Temukan teknik unggul, solusi ramah lingkungan, dan panduan menjaga ekosistem sehat. 
              Semua yang Anda butuhkan untuk sukses dalam budidaya tambak ada di sini!
            </p>
            <RouterLink to="/register">
              <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Daftar Sekarang
              </button>
            </RouterLink>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img src="/hero1.png" alt="Hero" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      <section id="tentangKami" className="h-screen flex items-center justify-center bg-gray-100 px-8">
        <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
          <div className="grid grid-cols-2 gap-4 md:w-1/2 mb-8 md:mb-0">
            <img src="/hero2.png" alt="Tentang Kami 1" className="rounded-lg shadow-md" />
            <img src="/hero3.png" alt="Tentang Kami 2" className="rounded-lg shadow-md" />
            <img src="/hero4.png" alt="Tentang Kami 3" className="rounded-lg shadow-md col-span-2" />
          </div>
          <div className="md:w-1/2 md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700">Tentang Kami</h2>
            <p className="mt-4 text-gray-600">
              Platform edukasi untuk petambak yang ingin memahami praktik ramah lingkungan.
              Pelajari teknik terbaru, dan tingkatkan produktivitas tambak Anda dengan mudah.
            </p>
          </div>
        </div>
      </section>

      <section id="produk" className="h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-700">Layanan & Produk Kami</h3>
          <p className="mt-4 text-gray-600">
            Kami menawarkan berbagai sumber daya untuk membantu Anda menjadi petambak yang sukses dan berwawasan lingkungan.
          </p>
        </div>
        <div className="flex space-x-8">
          <div className="p-6 bg-blue-800 text-white rounded-xl shadow-lg w-72 text-center">
            <FontAwesomeIcon icon={faBookmark} className="text-white text-2xl mb-4" />
            <h4 className="text-lg font-semibold">Artikel Praktik Berkelanjutan</h4>
            <p className="mt-2 text-sm">
              Temukan berbagai artikel tentang praktik budidaya berkelanjutan, dari teknik inovatif hingga wawasan lingkungan mendalam.
            </p>
            <RouterLink to="/article">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">Baca Artikel</button>
            </RouterLink>
          </div>
          <div 
            className="p-6 bg-blue-800 text-white rounded-xl shadow-lg w-72 text-center cursor-pointer"
            onClick={handleModuleClick}
          >
            <FontAwesomeIcon icon={faVideo} className="text-white text-2xl mb-4" />
            <h4 className="text-lg font-semibold">Modul Video Produktivitas</h4>
            <p className="mt-2 text-sm">
              Dapatkan akses ke modul video yang dirancang khusus untuk membantu anda dalam meningkatkan produktivitas tambak.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">Akses Modul</button>
          </div>
        </div>

        {showNotification && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
              <h3 className="text-lg font-semibold text-blue-700">Akses Ditolak</h3>
              <p className="mt-4 text-gray-600">Anda belum mendaftarkan diri, daftar dan bergabunglah dengan kita untuk mengakses fitur ini.</p>
              <button 
                onClick={closeNotification}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HeroSection;
