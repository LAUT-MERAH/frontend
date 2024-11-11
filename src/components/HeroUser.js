import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faVideo } from '@fortawesome/free-solid-svg-icons';

const HeroUser = () => {
  return (
    <div>
      <section id="beranda" className="h-screen flex items-center justify-center px-8">
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
            <Link to="/article">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">Baca Artikel</button>
            </Link>
          </div>

          <div className="p-6 bg-blue-800 text-white rounded-xl shadow-lg w-72 text-center">
            <FontAwesomeIcon icon={faVideo} className="text-white text-2xl mb-4" />
            <h4 className="text-lg font-semibold">Modul Video Produktivitas</h4>
            <p className="mt-2 text-sm">
              Dapatkan akses ke modul video yang dirancang khusus untuk membantu anda dalam meningkatkan produktivitas tambak.
            </p>
            <Link to="/module">
              <button className="mt-4 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">Akses Modul</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroUser;
