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
  <div className="flex justify-center bg-gray-100 py-10 px-4 flex-grow mt-20">
    <div className="flex max-w-7xl w-full">
      <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-blue-700">Panduan Dasar untuk Petambak Pemula: Membangun Tambak yang Sukses</h2>
              <p className="text-gray-600 mt-2">oleh <span className="font-semibold text-gray-700">Carissa Sumatri</span> | <span>8 Desember 2024</span></p>
            </div>
            
            <img src="/article-2.jpg" alt="article-thumbnail" className="w-full h-auto rounded-lg mb-6" />

            <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>Memulai usaha tambak bisa terasa menantang, terutama bagi yang baru pertama kali terjun ke dunia budidaya. Namun, jangan khawatir! Dengan langkah-langkah yang tepat dan sedikit pemahaman, kesuksesan dalam budidaya tambak bisa diraih. Panduan ini akan membantu Anda memahami dasar-dasar yang perlu diperhatikan mulai dari memilih lokasi yang tepat hingga strategi pemasaran yang efektif—semuanya disampaikan dengan cara yang mudah diikuti dan praktis.</p>

            <h4 className="text-xl font-semibold mt-6">Pemilihan Lokasi yang Tepat: Faktor Utama Kesuksesan</h4>
            <p>Langkah pertama dalam memulai tambak adalah memilih lokasi yang tepat. Pilihlah lokasi yang memiliki akses air yang baik dan bebas dari polusi. Tidak hanya itu, keberadaan infrastruktur seperti jalan yang mudah diakses dan kedekatan dengan pasar akan memudahkan distribusi produk. Lokasi yang ideal akan menjadi pondasi yang kokoh bagi keberhasilan usaha Anda.</p>
            
            <h4 className="text-xl font-semibold mt-6">Persiapan Kolam yang Efisien: Menyiapkan Lingkungan yang Ideal</h4>
            <p>Kolam yang baik adalah kunci dari budidaya yang sukses. Pastikan desain kolam sesuai dengan jenis budidaya yang Anda pilih, apakah itu tambak intensif, semi-intensif, atau tradisional. Proses pengolahan tanah yang tepat juga sangat penting, seperti membajak tanah, memberi kapur untuk menstabilkan pH, dan mengeringkan tanah sebelum mengisi air. Jangan lupakan kualitas air—salinitas, pH, dan suhu air harus selalu dipantau untuk menjaga keseimbangan yang ideal.</p>
            
            <h4 className="text-xl font-semibold mt-6">Pemilihan Bibit Berkualitas: Langkah Awal Menuju Keberhasilan</h4>
            <p>Bibit yang baik adalah langkah pertama menuju tambak yang sukses. Pilih bibit yang sehat, aktif, dan berasal dari hatchery yang terpercaya. Melakukan karantina sebelum menebarkan bibit di kolam adalah langkah pencegahan yang penting untuk menghindari penyebaran penyakit yang dapat merugikan. Bibit unggul akan tumbuh lebih cepat dan lebih sehat, sehingga hasil panen Anda akan lebih optimal.</p>
            
            <h4 className="text-xl font-semibold mt-6">Manajemen Pakan dan Nutrisi: Kunci Pertumbuhan Optimal</h4>
            <p>Pakan berkualitas adalah kunci untuk mendukung pertumbuhan hewan tambak yang sehat. Berikan pakan dengan kandungan nutrisi yang tepat, seperti pelet berkandungan protein tinggi, dan jangan ragu untuk menambahkan pakan alami seperti plankton. Variasi pakan tidak hanya menambah gizi, tetapi juga dapat mengurangi biaya produksi. Pemberian pakan yang tepat akan mempercepat pertumbuhan dan menjaga kesehatan tambak Anda.</p>

            <h4 className="text-xl font-semibold mt-6">Pengendalian Hama dan Penyakit: Menjaga Kesehatan Tambak</h4>
            <p>Pengendalian hama dan penyakit adalah bagian tak terpisahkan dari keberhasilan budidaya tambak. Lakukan pemeriksaan kesehatan secara rutin dan terapkan teknik biosekuriti untuk mengurangi risiko penyakit. Penggunaan probiotik juga bisa menjadi cara yang efektif untuk meningkatkan imunitas hewan tambak. Mengontrol kesehatan sejak dini akan menghindarkan Anda dari kerugian besar di kemudian hari.</p>

            <h4 className="text-xl font-semibold mt-6">Strategi Pemasaran: Memaksimalkan Potensi Pasar</h4>
            <p>Setelah hasil tambak siap dipanen, penting untuk memiliki strategi pemasaran yang tepat. Menjual produk melalui pasar lokal, restoran, atau bahkan platform online bisa membantu memperluas jangkauan pasar Anda. Jangan lupa untuk mempertimbangkan diversifikasi produk—misalnya dengan menjual produk olahan seperti udang atau ikan kemasan—untuk meningkatkan nilai tambah dan menarik lebih banyak konsumen.</p>
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

                <Link to="/articles/3" className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100">
                  <img src="/article-3.jpg" alt="related-thumbnail" className="w-12 h-12 rounded mr-4" />
                  <div>
                    <h4 className="text-blue-600 font-semibold">Mengatasi Tantangan Tambak Air Tawar: Solusi untuk Budidaya Air Tawar yang Sukses</h4>
                    <p className="text-gray-500 text-sm">Budidaya tambak air tawar memang tidak lepas dari berbagai tantangan. Fluktuasi kualitas...</p>
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