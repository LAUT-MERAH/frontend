import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const ArticleReading = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center bg-gray-100 py-10 px-4 flex-grow">
        <div className="flex max-w-7xl w-full">
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-blue-700">Strategi Terbaik Dalam Perawatan Udang</h2>
              <p className="text-gray-600 mt-2">by <span className="font-semibold text-gray-700">Nama Penulis</span> | <span>Tanggal Dibuat</span></p>
            </div>
            
            <img src="/udang.png" alt="article-thumbnail" className="w-full h-auto rounded-lg mb-6" />

            <div className="text-gray-700 space-y-6 leading-relaxed">
              <h3 className="text-2xl font-semibold">Mencapai Perawatan Udang yang Optimal</h3>
            <p>             Perawatan udang yang optimal mencakup serangkaian langkah strategis, mulai dari pemilihan benih udang yang sesuai dengan kondisi lingkungan, manajemen kolam yang efisien, penggunaan teknologi perikanan modern, pemilihan waktu panen yang tepat, hingga strategi pemasaran yang efektif untuk meningkatkan nilai jual hasil panen. 
                Kami menawarkan pendekatan holistik untuk perawatan udang yang dapat memberikan hasil panen yang optimal bagi petani udang dan pemangku kepentingan di sektor perikanan, yang mencakup pemilihan benih berkualitas, manajemen kolam yang baik, penerapan teknologi terbaru dalam perikanan, waktu panen yang tepat, dan strategi pemasaran yang efektif.</p>
            <h4 className="text-xl font-semibold mt-6">1. Pemilihan Benih Berkualitas</h4>
            <p>     Pemilihan benih udang yang berkualitas adalah langkah penting untuk mencapai kesuksesan dalam budidaya udang. Langkah ini mencakup penelitian mendalam terhadap spesies udang, kondisi air, dan ketahanan terhadap penyakit. Dengan memilih benih yang sesuai dengan faktor-faktor tersebut, petani udang dapat meningkatkan peluang untuk mendapatkan hasil panen yang menguntungkan.</p>
            
            <h4 className="text-xl font-semibold mt-6">2. Manajemen Kolam yang Efisien</h4>
            <p>Manajemen kolam yang efisien mencakup pemeliharaan kualitas air, pengelolaan pemberian pakan, serta pemantauan kesehatan udang secara berkala. Pengendalian kualitas air yang optimal dan pemberian pakan yang seimbang dapat meningkatkan produktivitas, kualitas, dan keuntungan dari budidaya udang.</p>
            
            <h4 className="text-xl font-semibold mt-6">3. Penggunaan Teknologi Perikanan</h4>
            <p>Penggunaan teknologi perikanan modern melibatkan berbagai perangkat seperti sensor kualitas air, sistem aerasi otomatis, dan perangkat lunak manajemen budidaya. Dengan teknologi ini, petani udang dapat memantau dan mengontrol kondisi kolam secara efisien, meningkatkan efektivitas penggunaan sumber daya, serta mengoptimalkan produktivitas dan kualitas hasil panen.</p>
            
            <h4 className="text-xl font-semibold mt-6">4. Pemilihan Waktu Panen yang Tepat</h4>
            <p>Pemilihan waktu panen yang tepat penting dalam memastikan udang mencapai ukuran optimal sebelum dipanen. Faktor seperti tingkat pertumbuhan, kondisi lingkungan, dan permintaan pasar dapat mempengaruhi waktu panen yang ideal. Dengan memilih waktu yang tepat, petani udang dapat memastikan kualitas dan harga jual yang optimal.</p>

            <p>Dengan menerapkan strategi-strategi ini, petani udang dapat menciptakan lingkungan budidaya yang berkelanjutan dan menguntungkan, serta meningkatkan kualitas dan kuantitas hasil panen.</p>

            </div>
          </div>

          <aside className="hidden lg:block w-1/3 ml-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Artikel Terkait</h3>
              <div className="space-y-4">
                <Link to="/articles/2" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/hero2.png" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Tips Perawatan Kolam</h4>
                    <p className="text-gray-500 text-sm">Pendekatan terbaik untuk menjaga kualitas air kolam...</p>
                  </div>
                </Link>

                <Link to="/articles/3" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/hero3.png" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Penggunaan Teknologi Perikanan</h4>
                    <p className="text-gray-500 text-sm">Inovasi terbaru dalam teknologi untuk perikanan yang efisien...</p>
                  </div>
                </Link>

                <Link to="/articles/4" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/hero4.png" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Penggunaan Teknologi Tambak</h4>
                    <p className="text-gray-500 text-sm">Teknologi tambak yang mumpuni membuat petambak sangat terbantu...</p>
                  </div>
                </Link>
                <Link to="/article" className="text-blue-600 font-semibold mt-2 block">Baca Selengkapnya →</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-whtie text-white rounded-full shadow-lg hover:bg-gray-50"
          aria-label="Scroll to top"
        >
          ⬆️
        </button>
      )}
      <Footer />
    </div>
  );
};

export default ArticleReading;
