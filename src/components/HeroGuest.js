import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faVideo } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  const sectionRefs = {
    beranda: useRef(null),
    tentangKami: useRef(null),
    produk: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleSections((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleModuleClick = () => setShowNotification(true);
  const closeNotification = () => setShowNotification(false);

  return (
    <div>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white/90 shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="EcoTambak Logo" className="w-16 h-16 object-contain" />
            <h1 className="text-green-600 text-2xl font-semibold">
              Eco<span className="text-blue-600">Tambak</span>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <ScrollLink to="beranda" smooth duration={500} className="hover:text-blue-500">
              Beranda
            </ScrollLink>
            <ScrollLink to="tentangKami" smooth duration={500} className="hover:text-blue-500">
              Tentang Kami
            </ScrollLink>
            <ScrollLink to="produk" smooth duration={500} className="hover:text-blue-500">
              Produk
            </ScrollLink>
            <RouterLink to="/contact" className="hover:text-blue-500">
              Kontak
            </RouterLink>
          </nav>
          <RouterLink to="/login" className="border border-gray-400 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100">
            Login
          </RouterLink>
        </div>
      </header>

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
              <RouterLink to="/register">
                <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Daftar Sekarang
                </button>
              </RouterLink>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
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
  ref={sectionRefs.produk}
  className={`h-screen flex flex-col items-center justify-center px-4 md:px-10 transition-all duration-1000 ${
    visibleSections["produk"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
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
      <p className="text-gray-600 mb-4">
        Akses video edukasi interaktif yang dirancang khusus untuk meningkatkan produktivitas tambak Anda.
      </p>
      <button
        onClick={() => setShowNotification(true)}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
        Akses Modul
      </button>
    </div>
  </div>

  {/* Notifikasi Akses Ditolak */}
  {showNotification && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-lg">
        <h3 className="text-2xl font-semibold text-blue-700">Akses Ditolak</h3>
        <p className="mt-4 text-gray-600 text-lg">
          Anda belum mendaftarkan diri. Daftar sekarang untuk mengakses fitur ini.
        </p>
        <button
          onClick={() => setShowNotification(false)}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          Tutup
        </button>
      </div>
    </div>
  )}
</section>


      </main>
    </div>
  );
};

export default HeroSection;
