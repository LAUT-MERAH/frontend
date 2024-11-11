// src/pages/Private/ModuleWatching.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const ModuleWatching = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const handleBackToModules = () => {
    navigate('/module');
  };

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto p-8 flex-grow">
        <div className="mb-4">
          <button
            onClick={handleBackToModules}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Kembali ke Modul
          </button>
        </div>
        
        <div className="flex">
          <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Judul Modul</h2>
            <ul>
              <li className="mb-2 bg-blue-100 p-2 rounded">Perawatan Tanah Tambak Udang : ...</li>
              <li className="mb-2">Phasellus pharetra lobortis ligula</li>
              <li className="mb-2">ac interdum nulla scelerisque a</li>
              <li className="mb-2">Etiam nec nunc leo</li>
              <li className="mb-2">Donec congue vitae risus vitae gravida</li>
            </ul>
          </aside>
          <main className="w-3/4 ml-8">
            <img src="/persiapan.png" alt="Video" className="w-full h-96 object-cover rounded-md mb-4" />
            <h1 className="text-2xl font-bold mb-4">Persiapan Tambak Udang: Tips Menjaga Kualitas dan Kesuburan Lahan Tambak</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non orci vel mauris tincidunt sodales.
              Maecenas non nisi dolor. Nam sit amet vestibulum quam. Nulla vel dolor id tellus commodo fringilla. Integer
              enim massa, venenatis vel vehicula vitae, viverra id lectus.
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModuleWatching;
