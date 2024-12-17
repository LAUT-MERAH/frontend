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
              <h2 className="text-3xl font-bold text-blue-700">Mengatasi Tantangan Tambak Air Tawar: Solusi untuk Budidaya Air Tawar yang Sukses</h2>
              <p className="text-gray-600 mt-2">oleh <span className="font-semibold text-gray-700">Devisto Christian Pradana</span> | <span>7 Desember 2024</span></p>
            </div>
            
            <img src="/article-3.jpg" alt="article-thumbnail" className="w-full h-auto rounded-lg mb-6" />

            <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>Budidaya tambak air tawar memang tidak lepas dari berbagai tantangan. Fluktuasi kualitas air, serangan penyakit, dan masalah lain bisa menjadi hambatan serius bagi petambak. Namun, dengan pendekatan yang tepat, tantangan ini bisa diatasi dan tambak air tawar bisa berkembang dengan baik. Berikut adalah beberapa langkah praktis yang dapat Anda terapkan untuk mengelola tantangan tersebut.</p>
            <h4 className="text-xl font-semibold mt-6">Menjaga Kualitas Air yang Stabil</h4>
            <p>Kualitas air adalah faktor kunci dalam keberhasilan tambak air tawar. Untuk itu, penting untuk memastikan kebersihan dan kestabilan air di kolam. Salah satu cara yang efektif adalah dengan menggunakan sistem resirkulasi atau filter untuk menjaga kualitas air tetap bersih. Tanaman air seperti eceng gondok juga bisa berfungsi sebagai penyerap zat beracun yang ada di dalam air. Jangan lupa untuk memastikan kadar oksigen terlarut selalu terjaga, karena oksigen yang cukup sangat penting bagi kesehatan ikan. Aerasi yang baik akan membantu mencapainya.</p>
            
            <h4 className="text-xl font-semibold mt-6">Pengendalian Hama Secara Alami</h4>
            <p>Mengendalikan hama tanpa bahan kimia bisa menjadi cara yang lebih ramah lingkungan dan efektif. Salah satunya adalah dengan memanfaatkan predator alami atau perangkap untuk mengontrol populasi hama seperti keong dan serangga. Selain lebih aman bagi lingkungan, metode biologis ini juga lebih hemat biaya dan tidak menambah polusi di kolam.</p>
            
            <h4 className="text-xl font-semibold mt-6">Mengatur Padat Tebar dengan Tepat</h4>
            <p>Kepadatan tebar yang terlalu tinggi bisa menyebabkan stres pada ikan dan meningkatkan risiko penyakit. Oleh karena itu, penting untuk mengatur jumlah ikan yang ditebar sesuai kapasitas kolam. Dengan perhitungan yang tepat, ikan akan tumbuh dalam kondisi yang ideal, mengurangi kemungkinan masalah kesehatan dan memastikan pertumbuhan yang optimal.</p>
            
            <h4 className="text-xl font-semibold mt-6">Pemanfaatan Lahan Marginal</h4>
            <p>Tambak air tawar tidak hanya bisa dibangun di lahan yang subur, tetapi juga di lahan yang kurang cocok untuk pertanian. Lahan marginal ini bisa diubah menjadi tambak produktif, memberikan keuntungan tambahan bagi petambak dan meningkatkan efisiensi penggunaan lahan. Ini juga membuka peluang untuk meningkatkan pendapatan masyarakat lokal dengan memanfaatkan lahan yang sebelumnya terbengkalai.</p>

            <h4 className="text-xl font-semibold mt-6">Diversifikasi Spesies Budidaya</h4>
            <p>Menerapkan diversifikasi dalam budidaya ikan juga bisa mengurangi risiko kerugian. Cobalah untuk menggabungkan berbagai spesies ikan seperti nila, lele, dan patin dalam satu kolam. Setiap spesies memiliki kebutuhan dan pasar yang berbeda, sehingga Anda dapat memanfaatkan potensi kolam secara maksimal. Diversifikasi juga membantu mengurangi dampak jika ada fluktuasi harga atau permintaan di pasar.</p>
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

                <Link to="/articles/4" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/article-4.jpg" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Meningkatkan Pendapatan melalui Diversifikasi Usaha Tambak</h4>
                    <p className="text-gray-500 text-sm">Diversifikasi usaha tambak merupakan strategi yang efektif untuk meningkatkan pendapatan...</p>
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