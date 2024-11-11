import React from 'react';
import '@fontsource/inter';


const Footer = () => {

  console.log('Footer is rendering');

  return (
    <footer className="font-inter bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">

        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-3">
            <img src="/logo.png" alt="EcoTambak Logo" className="logo2" />
          </div>

          <nav className="flex space-x-8 font-medium text-gray-700 text-lg">
            <a href="#" className="hover:underline">Layanan Kami</a>
            <a href="#" className="hover:underline">Informasi</a>
            <a href="#" className="hover:underline">Hubungi Kami</a>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter (lupa udah ga ada twitter)" className="hover:text-blue-500">
              <i className="fab fa- text-xl"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6 w-full"></div>

        <p className="text-center text-gray-500 text-sm">
          ©Hak cipta 2024, semua hak dilindungi oleh EcoTambak
        </p>
      </div>
    </footer>
  );
};

export default Footer;
