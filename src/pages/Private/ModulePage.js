import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const ModulePage = () => {
  const navigate = useNavigate();

  const modules = Array.from({ length: 8 }, (_, index) => ({
    title: "Persiapan Tambak Udang.",
    description: "(deskripsi singkat mengenai modul ini, membantu pengguna untuk mengetahui isi dari modul ini.)",
    id: index,
  }));

  const handleSaveModule = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Modul</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start">
              <img src="/persiapan.png" alt={module.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{module.title}</h2>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="flex space-x-4 mt-auto">
                <button
                  onClick={handleSaveModule}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
                >
                  Simpan Modul
                </button>
                <Link to={`/module-watching/${module.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Tonton Sekarang
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModulePage;
