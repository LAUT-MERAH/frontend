import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faVideo } from "@fortawesome/free-solid-svg-icons";
import HeaderUser from "../components/HeaderUser"; // Menggunakan HeaderUser.js

const HeroUser = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    beranda: useRef(null),
    tentangKami: useRef(null),
    produk: useRef(null),
  };

  // Intersection Observer for Animations
  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleSections((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* HeaderUser */}
      <HeaderUser />
      {/* Content Sections */}
      <main className="pt-24">
        {/* Section Beranda */}
        <section
          id="beranda"
          ref={sectionRefs.beranda}
          className={`h-screen flex items-center justify-center px-8 transition-all duration-1000 ${
            visibleSections["beranda"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl font-bold text-blue-700">Mari Berinovasi Bersama</h1>
              <div className="text-green-600 text-4xl font-semibold">
                Eco<span className="text-blue-600">Tambak</span>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                Temukan teknik unggul, solusi ramah lingkungan, dan panduan menjaga ekosistem sehat.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img src="/hero1.png" alt="Hero" className="w-full max-w-md" />
            </div>
          </div>
        </section>

        {/* Section Tentang Kami */}
        <section
          id="tentangKami"
          ref={sectionRefs.tentangKami}
          className={`h-screen flex items-center justify-center bg-gray-100 px-8 transition-all duration-1000 ${
            visibleSections["tentangKami"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
            <div className="grid grid-cols-2 gap-4 md:w-1/2">
              <img src="/hero2.png" alt="Gambar 1" className="rounded-lg shadow-md" />
              <img src="/hero3.png" alt="Gambar 2" className="rounded-lg shadow-md" />
              <img src="/hero4.png" alt="Gambar 3" className="rounded-lg shadow-md col-span-2" />
            </div>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h2 className="text-3xl font-semibold text-blue-700">Tentang Kami</h2>
              <p className="mt-4 text-gray-600">
                Platform edukasi untuk petambak yang ingin memahami praktik ramah lingkungan.
              </p>
            </div>
          </div>
        </section>

{/* Section Produk */}
<section
  id="produk"
  className="h-screen flex flex-col items-center justify-center px-4 md:px-10 transition-all duration-1000"
>
  {/* Judul Section */}
  <div className="text-center mb-14">
    <h3 className="text-4xl font-bold text-blue-700 mb-6">Layanan & Produk Kami</h3>
    <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
      Kami menyediakan berbagai sumber daya dan edukasi untuk membantu Anda menjadi petambak sukses dan ramah lingkungan.
    </p>
  </div>

  {/* Kartu Produk */}
  <div className="flex flex-wrap justify-center gap-12">
    {/* Kartu 1 - Artikel Praktik */}
    <div className="p-10 bg-white rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300 w-96 md:w-[28rem]">
      <div className="flex justify-center items-center mb-6">
        <FontAwesomeIcon
          icon={faBookmark}
          className="text-blue-600 text-6xl bg-blue-100 p-6 rounded-full"
        />
      </div>
      <h4 className="text-2xl font-semibold text-gray-800 mb-4">Artikel Praktik</h4>
      <p className="text-gray-600 text-lg">
        Pelajari teknik budidaya tambak praktis yang efektif dan ramah lingkungan untuk meningkatkan produktivitas.
      </p>
      <RouterLink to="/article">
        <button className="mt-6 px-8 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition duration-300">
          Baca Artikel
        </button>
      </RouterLink>
    </div>

    {/* Kartu 2 - Modul Video */}
    <div className="p-10 bg-white rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300 w-96 md:w-[28rem]">
      <div className="flex justify-center items-center mb-6">
        <FontAwesomeIcon
          icon={faVideo}
          className="text-green-600 text-6xl bg-green-100 p-6 rounded-full"
        />
      </div>
      <h4 className="text-2xl font-semibold text-gray-800 mb-4">Modul Video</h4>
      <p className="text-gray-600 text-lg">
        Akses video edukasi interaktif yang dirancang khusus untuk meningkatkan produktivitas tambak Anda.
      </p>
      <RouterLink to="/module">
        <button className="mt-6 px-8 py-3 bg-green-600 text-white text-lg rounded-full hover:bg-green-700 transition duration-300">
          Akses Modul
        </button>
      </RouterLink>
    </div>
  </div>
</section>


      </main>
    </div>
  );
};

export default HeroUser;
