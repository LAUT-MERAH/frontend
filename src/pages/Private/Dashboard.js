import React, { useState, useEffect } from 'react';
import { fetchModuleCount, fetchInProgressModules } from '../../api/moduleAPI';
import Footer from '../../components/Footer';

const Dashboard = () => {
  const [moduleCount, setModuleCount] = useState(0); // Untuk "Belum Dimulai"
  const [inProgressModules, setInProgressModules] = useState([]); // Untuk "Sedang Dipelajari"
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Fetch data dari backend
        const totalModules = await fetchModuleCount(); // Menghitung jumlah modul
        const inProgress = await fetchInProgressModules(); // Modul yang sedang dipelajari

        // Set state untuk dashboard
        setModuleCount(totalModules);
        setInProgressModules(inProgress);
      } catch (error) {
        console.error('Error loading dashboard data:', error.message);
      } finally {
        setLoading(false); // Menghilangkan loading state
      }
    };

    loadDashboardData();
  }, []);

  if (loading) return <p className="text-center mt-8 text-lg">Loading dashboard...</p>;

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Header Dashboard */}
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Dashboard</h1>
        <p className="text-lg mb-8">Selamat datang, <span className="font-semibold">[Nama User]</span></p>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card Belum Dimulai */}
          <div
          onClick={() => alert('Card ditekan!')} // Ganti dengan logika navigasi yang diinginkan
          className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <p className="text-4xl font-bold text-blue-700">{moduleCount}</p>
          <p className="text-gray-600 mt-2">Belum Dimulai</p>
        </div>

          {/* Card Sedang Dipelajari */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-yellow-600">{inProgressModules.length}</p>
            <p className="text-gray-600 mt-2">Sedang Dipelajari</p>
          </div>

          {/* Card Selesai */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-green-500">0</p>
            <p className="text-gray-600 mt-2">Selesai</p>
          </div>
        </div>

        {/* List Sedang Dipelajari */}
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Sedang Dipelajari</h2>
        {inProgressModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressModules.map((module, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={module.image || 'https://via.placeholder.com/300'}
                  alt={module.title}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <p className="text-gray-500 mb-2">Level: {module.level}</p>
                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-2 text-blue-600">{module.progress}% Selesai</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Belum ada modul yang sedang dipelajari.</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
