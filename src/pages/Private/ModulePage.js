import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchModules } from '../../api/moduleAPI';
import Footer from '../../components/Footer';

const ModulePage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadModules = async () => {
      try {
        const data = await fetchModules();
        const repeatedModules = Array.from({ length: 12 }, (_, i) => data[i % data.length]);
        setModules(repeatedModules);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    loadModules();
  }, []);
  

  if (loading) return <p className="text-center mt-8">Loading modules...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  if (loading)
    return (
      <div className="container mx-auto p-8 mt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Modul</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg shadow-lg p-6 animate-pulse">
              <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
              <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded-md mb-4 w-5/6"></div>
              <div className="h-10 bg-gray-400 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-8 mt-20 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Modul</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
            key={module.ulid}
            className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={module.thumbnail_url || '/persiapan.png'}
              alt={module.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{module.title}</h2>
            <p className="text-gray-600 mb-4">{module.description}</p>
            <Link to={`/module-watching/${module.ulid}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Tonton Sekarang
              </button>
            </Link>
          </div>

          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModulePage;
