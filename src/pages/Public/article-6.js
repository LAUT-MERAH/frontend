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
              <h2 className="text-3xl font-bold text-blue-700">Larva BSF (Black Soldier Fly): Pakan Alternatif yang Menjanjikan untuk Petambakan</h2>
              <p className="text-gray-600 mt-2">oleh <span className="font-semibold text-gray-700">Eric Cantona </span> | <span>2 Desember 2024</span></p>
            </div>
            
            <img src="/article-6.jpg" alt="article-thumbnail" className="w-full h-auto rounded-lg mb-6" />

            <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>Larva Black Soldier Fly (BSF) atau Hermetia illucens merupakan salah satu inovasi pakan alternatif yang semakin populer di dunia petambakan. Larva BSF adalah larva dari lalat Black Soldier Fly yang memiliki siklus hidup yang sangat efisien. Lalat betina dewasa akan bertelur di sampah organik atau bahan organik yang membusuk. Setelah telur menetas, larva akan berkembang biak dengan memakan bahan organik tersebut, seperti sisa makanan, limbah pertanian, atau limbah rumah tangga. 

            Larva ini dikenal karena kemampuannya untuk mengubah sampah organik menjadi sumber pakan yang kaya protein dan lemak, serta memiliki potensi besar dalam mendukung keberlanjutan industri petambakan.
            </p>
            <h4 className="text-xl font-semibold mt-6">Mengapa Larva BSF Menjadi Pakan Alternatif yang Ideal?</h4>
            <p>Larva BSF memiliki banyak keunggulan dibandingkan dengan bahan pakan tradisional, seperti tepung ikan atau kedelai. Berikut adalah alasan mengapa larva BSF menjadi pakan alternatif yang menarik untuk petambak:

                
            •	Kandungan Nutrisi yang Tinggi: Larva BSF mengandung protein yang sangat tinggi, sekitar 30-40% dari berat keringnya, serta lemak yang kaya akan asam lemak esensial. Selain itu, larva BSF juga mengandung kalsium, yang penting untuk perkembangan tulang dan cangkang udang atau ikan.
            •	Pertumbuhan Cepat: Larva BSF tumbuh dengan sangat cepat dalam kondisi yang tepat. Dalam waktu kurang dari dua minggu, larva dapat mencapai ukuran yang cukup besar dan siap untuk dipanen sebagai pakan.
            •	Ramah Lingkungan: Proses pemeliharaan larva BSF dapat mengurangi limbah organik, karena larva ini dapat mengonsumsi bahan-bahan yang biasanya terbuang seperti sisa makanan dan sampah organik. Ini menjadikan larva BSF sebagai solusi pakan yang ramah lingkungan dan mendukung ekonomi sirkular.
            •	Ekonomis dan Efisien: Penggunaan BSF dalam budidaya pakan dapat mengurangi biaya pakan petambak. Larva BSF tidak memerlukan banyak ruang atau sumber daya untuk dibudidayakan dan bisa diberi makan dengan limbah organik yang banyak tersedia, mengurangi biaya produksi pakan secara signifikan. </p>
            
            <h4 className="text-xl font-semibold mt-6">Potensi Larva BSF dalam Petambakan</h4>
            <p>Larva BSF tidak hanya menawarkan manfaat dari segi nutrisi dan biaya, tetapi juga membuka peluang bagi petambak untuk menciptakan sistem petambakan yang lebih efisien dan berkelanjutan. Dalam industri yang semakin menuntut keberlanjutan, larva BSF bisa menjadi pilihan yang cerdas dan ramah lingkungan.

            Namun, untuk mengimplementasikan penggunaan larva BSF secara efektif, ada beberapa aspek teknis yang perlu dipahami lebih dalam. Pemahaman tentang cara mengelola budidaya BSF dan memaksimalkan potensi pakan ini dapat menjadi kunci untuk sukses dalam jangka panjang.

            Dengan pendekatan yang tepat, larva BSF dapat menjadi pakan utama yang mendukung keberhasilan dan keberlanjutan industri petambakan di masa depan.
            </p>
            </div>
          </div>

          <aside className="hidden lg:block w-1/3 ml-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Artikel Terbaru</h3>
              <div className="space-y-4">
                <Link to="/articles/1" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/article-1.jpg" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Strategi Terbaik Dalam Perawatan Udang</h4>
                    <p className="text-gray-500 text-sm">Perawatan udang yang optimal mencakup serangkaian langkah strategis,...</p>
                  </div>
                </Link>

                <Link to="/articles/2" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/article-2.jpg" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Panduan Dasar untuk Petambak Pemula: Membangun Tambak yang Sukses</h4>
                    <p className="text-gray-500 text-sm">Memulai usaha tambak bisa terasa menantang, terutama bagi yang baru pertama...</p>
                  </div>
                </Link>

                <Link to="/articles/3" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/article-3.jpg" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Mengatasi Tantangan Tambak Air Tawar: Solusi untuk Budidaya Air Tawar yang Sukses</h4>
                    <p className="text-gray-500 text-sm">Budidaya tambak air tawar memang tidak lepas dari berbagai tantangan. Fluktuasi kualitas...</p>
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