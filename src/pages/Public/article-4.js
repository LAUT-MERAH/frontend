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
              <h2 className="text-3xl font-bold text-blue-700">Meningkatkan Pendapatan melalui Diversifikasi Usaha Tambak</h2>
              <p className="text-gray-600 mt-2">oleh <span className="font-semibold text-gray-700">Skina Adonai </span> | <span>6 Desember 2024</span></p>
            </div>
            
            <img src="/article-4.jpg" alt="article-thumbnail" className="w-full h-auto rounded-lg mb-6" />

            <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>Diversifikasi usaha tambak merupakan strategi yang efektif untuk meningkatkan pendapatan dan mengurangi risiko ketergantungan pada satu jenis komoditas. Petambak dapat mengeksplorasi berbagai peluang yang dapat meningkatkan hasil budidaya sekaligus memperluas pasar. Berikut ini adalah beberapa peluang yang dapat dipertimbangkan untuk diversifikasi usaha tambak.</p>
            <h4 className="text-xl font-semibold mt-6">1. Integrasi Organisme Multitropik (IMTA)</h4>
            <p>Salah satu cara untuk meningkatkan efisiensi dan keberlanjutan dalam usaha tambak adalah melalui sistem Integrasi Organisme Multitropik (IMTA). Sistem ini menggabungkan beberapa spesies dalam satu tambak yang memiliki saling keterkaitan dan saling mendukung. Misalnya, ikan budidaya, kerang, dan rumput laut dapat dipelihara bersama. Ikan menghasilkan limbah yang berguna sebagai pakan bagi kerang, sementara kerang membantu menjaga kualitas air dengan menyaring kotoran. Rumput laut juga bisa menyerap nutrisi yang berlebihan, mengurangi risiko polusi air. Dengan demikian, IMTA tidak hanya meningkatkan efisiensi sumber daya, tetapi juga mendukung keberlanjutan usaha petambakan.</p>
            
            <h4 className="text-xl font-semibold mt-6">2. Ekowisata Tambak sebagai Destinasi Edukasi</h4>
            <p>Selain berfokus pada produksi, tambak juga dapat dijadikan sebagai destinasi ekowisata yang edukatif. Petambak dapat menawarkan tur edukasi kepada pengunjung yang ingin mempelajari lebih dalam mengenai proses budidaya ikan atau udang. Menyediakan fasilitas untuk pengunjung, seperti tempat wisata, aktivitas interaktif, atau workshop, bisa menjadi sumber pendapatan tambahan. Selain itu, edukasi tentang keberlanjutan dalam budidaya juga dapat meningkatkan kesadaran masyarakat mengenai pentingnya menjaga ekosistem tambak yang sehat. Dengan konsep yang menarik, ekowisata tambak dapat menjadi sumber penghasilan yang menguntungkan.</p>
            
            <h4 className="text-xl font-semibold mt-6">3. Produk Olahan Tambak Bernilai Tinggi</h4>
            <p>Produk olahan dari hasil tambak dapat menjadi sumber pendapatan yang signifikan. Misalnya, petambak bisa memproduksi kerupuk ikan, abon udang, atau tepung ikan sebagai produk tambahan yang memiliki nilai jual lebih tinggi. Produk-produk olahan ini memiliki pasar yang luas, baik di pasar lokal maupun internasional. Selain memberikan nilai tambah pada hasil tambak, produk olahan ini juga dapat membantu meningkatkan daya saing di pasar. Diversifikasi produk olahan juga memberikan fleksibilitas dalam menghadapi fluktuasi harga pasar.</p>
            
            <h4 className="text-xl font-semibold mt-6">4. Budidaya Spesies Eksklusif</h4>
            <p>Fokus pada budidaya spesies eksklusif dan bernilai tinggi dapat meningkatkan margin keuntungan. Misalnya, budidaya lobster air tawar, kepiting soka, atau ikan arwana yang memiliki permintaan pasar stabil dan harga jual yang tinggi. Meskipun membutuhkan pengetahuan dan teknik budidaya yang lebih spesifik, investasi dalam budidaya spesies eksklusif ini dapat memberikan keuntungan jangka panjang. Beberapa spesies tersebut memiliki pasar yang terus berkembang, terutama di kalangan kolektor ikan atau konsumen yang mencari produk premium. Petambak yang mengembangkan spesies eksklusif ini bisa mendapatkan harga jual yang jauh lebih tinggi dibandingkan dengan budidaya ikan atau udang biasa.</p>

            <h4 className="text-xl font-semibold mt-6">5. Budidaya Pakan Tambak</h4>
            <p>Selain memproduksi hasil tambak seperti ikan dan udang, petambak juga dapat memanfaatkan lahan tambak untuk budidaya pakan tambak. Beberapa jenis tanaman seperti azolla, plankton, atau alga bisa dijadikan pakan alami untuk ikan atau udang, yang mengurangi ketergantungan pada pakan komersial yang harganya fluktuatif. Dengan memproduksi pakan sendiri, petambak dapat menekan biaya operasional dan meningkatkan ketahanan pangan dalam usaha tambak. Budidaya pakan juga membuka peluang untuk menjual pakan tersebut ke petambak lain.</p>

            <p>Diversifikasi usaha tambak memberikan peluang besar bagi petambak untuk meningkatkan pendapatan dan menciptakan usaha yang lebih berkelanjutan. Dengan mengintegrasikan berbagai sektor, seperti IMTA, ekowisata, produk olahan, dan budidaya spesies eksklusif, tambak dapat menjadi usaha yang tidak hanya menguntungkan, tetapi juga ramah lingkungan. Menyesuaikan diri dengan perkembangan pasar dan mengadopsi inovasi adalah kunci untuk meraih sukses jangka panjang dalam usaha tambak.</p>
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