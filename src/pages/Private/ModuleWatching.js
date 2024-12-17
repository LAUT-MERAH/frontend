import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchModuleDetails } from '../../api/moduleAPI';
import Footer from '../../components/Footer';

const ModuleWatching = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [moduleDetails, setModuleDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeLesson, setActiveLesson] = useState(null);
  const [doneLessons, setDoneLessons] = useState({});

  const handleLessonClick = (ulid) => {
    setActiveLesson(ulid);
  };

  const toggleMarkAsDone = (ulid) => {
    setDoneLessons((prev) => ({
      ...prev,
      [ulid]: !prev[ulid], // Toggle status done
    }));
  };

  const handleWatchNext = () => {
    const currentIndex = moduleDetails.lessons.findIndex(
      (lesson) => lesson.ulid === activeLesson
    );
    if (currentIndex < moduleDetails.lessons.length - 1) {
      const nextLesson = moduleDetails.lessons[currentIndex + 1];
      setActiveLesson(nextLesson.ulid);
    }
  };
  
  


  useEffect(() => {
    const loadModuleDetails = async () => {
      try {
        const data = await fetchModuleDetails(moduleId);
        setModuleDetails(data);
      } catch (error) {
        console.error('Error fetching module details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    loadModuleDetails();
  }, [moduleId]);

  const handleBackToModules = () => navigate('/module');

  if (loading) return <p className="text-center mt-8">Loading module details...</p>;

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto p-8 flex-grow">
        <button
          onClick={handleBackToModules}
          className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4"
        >
          Kembali ke Modul
        </button>

        {moduleDetails ? (
          <div className="flex">
            <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Daftar Materi</h2>
              {moduleDetails.lessons?.length > 0 ? (
                <ul>
                  {moduleDetails.lessons.map((lesson) => (
                    <li key={lesson.ulid} className="mb-2">
                      <button
                        onClick={() => setActiveLesson(lesson.ulid)}
                        className={`w-full text-left p-3 rounded-lg shadow-md ${
                          activeLesson === lesson.ulid
                            ? 'bg-blue-500 text-white border-2 border-blue-700'
                            : doneLessons[lesson.ulid]
                            ? 'bg-green-400 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {lesson.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Belum ada materi.</p>
              )}
            </aside>
            
            <main className="w-3/4 ml-8">
              {moduleDetails.lessons.map(
                (lesson) =>
                  activeLesson === lesson.ulid && (
                    <div key={lesson.ulid}>
                      <h3 className="text-lg font-semibold">{lesson.title}</h3>
                      <video
                        src={lesson.video_url || ''}
                        controls
                        className="w-full rounded-lg mb-4 bg-gray-300"
                      >
                        {lesson.video_url ? null : (
                          <p className="text-center p-4">Video tidak tersedia</p>
                        )}
                      </video>
                      <div className="flex gap-4">
                        <button
                          onClick={() => toggleMarkAsDone(lesson.ulid)}
                          className={`px-4 py-2 rounded-lg ${
                            doneLessons[lesson.ulid]
                              ? 'bg-red-500 text-white'
                              : 'bg-green-500 text-white'
                          }`}
                        >
                          {doneLessons[lesson.ulid] ? 'Belum Selesai' : 'Selesai'}
                        </button>
                        <button
                          onClick={handleWatchNext}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                          Tonton Selanjutnya →
                        </button>
                      </div>
                    </div>
                  )
              )}
            </main>
          </div>
        ) : (
          <p className="text-center mt-8 text-red-500">Modul tidak ditemukan.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ModuleWatching;
