// src/pages/Private/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import CertificateModal from '../../components/CertificateModal';

const Dashboard = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSection = params.get('section') === 'modul-tersimpan' ? 'saved' : null;

  const [activeCard, setActiveCard] = useState(initialSection);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modules = {
    saved: [
      { title: 'Persiapan Tambak Udang', level: 'Pemula', image: '/persiapan.png' },
      { title: 'Cara Meningkatkan Kualitas Panen', level: 'Menengah', image: '/panenUdang.png' },
      { title: 'Teknik Efisien Budidaya', level: 'Menengah', image: '/budidaya.png' },
      { title: 'Pengelolaan Air Kolam', level: 'Pemula', image: '/air.png' },
      { title: 'Penggunaan Pakan Organik', level: 'Lanjutan', image: '/pakan.png' },
    ],
    inProgress: [
      { title: 'Pengendalian Hama Udang', level: 'Pemula', progress: 70, image: '/hama.png' },
      { title: 'Teknik Peningkatan Produksi', level: 'Menengah', progress: 45, image: '/teknik.png' },
    ],
    completed: [
      {
        title: 'Pemasaran Produk Tambak',
        level: 'Lanjutan',
        image: '/pemasaran.png',
        completionDate: '2024-11-01',
      },
      {
        title: 'Pembersihan Lingkungan Tambak',
        level: 'Lanjutan',
        image: '/pembersihan.png',
        completionDate: '2024-06-25',
      },
    ],
  };

  const handleCardClick = (type) => {
    setActiveCard(activeCard === type ? null : type);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    // Scroll to top when component is mounted
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const renderModules = (type) => {
    if (type === 'saved') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.saved.map((module, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
              <img src={module.image} alt={module.title} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
              <div className="text-sm text-gray-500 mt-2">Level: {module.level}</div>
            </div>
          ))}
        </div>
      );
    } else if (type === 'inProgress') {
      return modules.inProgress.map((module, index) => (
        <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg mb-4">
          <img src={module.image} alt={module.title} className="w-20 h-20 rounded-lg mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
            <div className="text-sm text-gray-500">Level: {module.level}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
          </div>
          <span className="text-gray-700 font-medium ml-4">{module.progress}%</span>
        </div>
      ));
    } else if (type === 'completed') {
      return modules.completed.map((module, index) => (
        <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg mb-4">
          <img src={module.image} alt={module.title} className="w-20 h-20 rounded-lg mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
            <div className="text-sm text-gray-500">Level: {module.level}</div>
            <div className="text-sm text-gray-500 mt-2">Tanggal Penyelesaian: {module.completionDate}</div>
          </div>
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Lihat Sertifikat
          </button>
        </div>
      ));
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="flex flex-col items-center bg-gray-100 py-10 px-6 flex-grow">
        <div className="max-w-5xl w-full">
          <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md mb-8">
            <div>
              <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
              <p className="text-gray-600">Selamat datang, [Nama User]</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[{ label: 'Modul Tersimpan', count: 5, icon: '📚', type: 'saved' },
              { label: 'Sedang Dipelajari', count: 2, icon: '📖', type: 'inProgress' },
              { label: 'Selesai', count: 2, icon: '✅', type: 'completed' },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(item.type)}
                className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer transition-transform transform ${
                  activeCard && activeCard !== item.type ? 'opacity-50' : 'opacity-100 hover:scale-105'
                }`}
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-3xl font-bold my-2">{item.count}</h3>
                <p className="text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          {activeCard && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                {activeCard === 'saved'
                  ? 'Modul Tersimpan'
                  : activeCard === 'inProgress'
                  ? 'Sedang Dipelajari'
                  : 'Selesai'}
              </h2>
              {renderModules(activeCard)}
            </div>
          )}
        </div>
      </div>

      <Footer className="w-full" />
      <CertificateModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Dashboard;
