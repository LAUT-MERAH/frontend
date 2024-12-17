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
              <h2 className="text-3xl font-bold text-blue-700">Dampak Kenaikan Pajak PPN Terhadap Bisnis Tambak di Indonesia</h2>
              <p className="text-gray-600 mt-2">oleh <span className="font-semibold text-gray-700">Juanda </span> | <span>5 Desember 2024</span></p>
            </div>
            
            <img src="/article-5.jpg" alt="article-thumbnail" className="w-full h-auto rounded-lg mb-6" />

            <div className="text-gray-700 space-y-6 leading-relaxed">
            <p>Pada awal tahun 2025, Indonesia akan memberlakukan kenaikan tarif Pajak Pertambahan Nilai (PPN) menjadi 12%, yang akan berdampak luas terhadap berbagai sektor ekonomi, termasuk sektor perikanan dan petambakan. Meskipun kenaikan ini bertujuan untuk meningkatkan penerimaan negara dan mendukung pembangunan infrastruktur, kebijakan tersebut memunculkan berbagai tantangan dan peluang, khususnya bagi para pelaku bisnis tambak.</p>
            <h4 className="text-xl font-semibold mt-6">Dampak Kenaikan PPN terhadap Biaya Operasional</h4>
            <p>Kenaikan tarif PPN menjadi 12% akan mempengaruhi harga barang dan jasa, termasuk bahan-bahan yang digunakan dalam budidaya tambak seperti pakan, peralatan tambak, dan bahkan biaya distribusi. Dengan kenaikan harga, biaya operasional untuk petambak, baik yang bergerak di sektor budidaya ikan maupun udang, bisa meningkat. Petambak mungkin perlu menyesuaikan anggaran mereka untuk mempertahankan kelangsungan bisnis, atau bahkan menaikkan harga jual produk mereka untuk menutupi biaya tambahan tersebut.

            Produk-produk seperti pakan berkualitas tinggi dan peralatan tambak yang sering dibeli dari luar negeri kemungkinan akan terpengaruh lebih besar oleh kenaikan PPN, karena sebagian besar bahan baku impor termasuk dalam kategori barang yang akan dikenakan pajak lebih tinggi. Sementara itu, produk lokal dengan harga lebih terjangkau dan relatif stabil mungkin dapat sedikit mengurangi dampak peningkatan biaya ini.
            </p>
            
            <h4 className="text-xl font-semibold mt-6">Peluang Diversifikasi untuk Mengurangi Ketergantungan pada Satu Produk</h4>
            <p>Dengan meningkatnya biaya operasional akibat kenaikan PPN, petambak bisa memanfaatkan peluang diversifikasi produk untuk meningkatkan pendapatan dan mengurangi dampak negatif dari kebijakan pajak. Sebagai contoh, selain menjual hasil budidaya seperti ikan atau udang, petambak bisa mencoba memproduksi produk olahan seperti kerupuk ikan, abon udang, atau tepung ikan yang dapat menambah nilai jual dan menarik pasar yang lebih luas.

            Selain itu, konsep Integrasi Organisme Multitropik (IMTA) dapat dipertimbangkan. Dengan menggabungkan budidaya ikan, kerang, dan rumput laut dalam satu tambak, petambak dapat menciptakan sistem yang saling mendukung dan lebih efisien dalam penggunaan sumber daya, sehingga membantu menekan biaya produksi dan menjaga kelangsungan bisnis.
            </p>
            
            <h4 className="text-xl font-semibold mt-6">Pentingnya Inovasi dan Teknologi dalam Menghadapi Pajak Baru</h4>
            <p>Dengan adanya peningkatan PPN, pemanfaatan teknologi dan inovasi menjadi semakin penting untuk menekan biaya dan meningkatkan produktivitas. Teknologi dalam pengelolaan kualitas air, seperti penggunaan sensor kualitas air dan sistem resirkulasi, dapat membantu petambak mengurangi penggunaan sumber daya dan biaya operasional. Selain itu, teknologi untuk pengolahan pakan, seperti pemanfaatan bahan baku lokal dan pakan mandiri, juga dapat membantu mengurangi ketergantungan pada pakan impor yang akan dikenakan pajak lebih tinggi.

            Salah satu langkah yang bisa diambil adalah menggunakan teknologi untuk meningkatkan efisiensi dalam proses budidaya. Misalnya, penerapan sistem IoT (Internet of Things) untuk memantau parameter penting di tambak, atau penggunaan sistem otomatis untuk pemberian pakan, yang dapat mengurangi pemborosan dan meningkatkan keuntungan.
            </p>
            
            <h4 className="text-xl font-semibold mt-6">Dukungan Pemerintah untuk Dunia Usaha Petambakan</h4>
            <p>Menyadari potensi dampak dari kenaikan PPN, pemerintah juga menyiapkan paket insentif yang akan meringankan beban masyarakat dan dunia usaha. Di sektor petambakan, insentif pajak dan diskon yang diberikan untuk sektor-sektor tertentu, seperti kendaraan listrik dan bahan bakar ramah lingkungan, dapat dimanfaatkan untuk memodernisasi fasilitas tambak dan mendukung keberlanjutan bisnis.

            Selain itu, dengan program ekowisata tambak yang semakin digalakkan, petambak dapat menjadikan tambak mereka sebagai destinasi edukasi bagi wisatawan yang ingin belajar tentang budidaya ikan dan udang. Ini bisa menjadi sumber pendapatan tambahan yang menguntungkan, selain dari hasil budidaya.
            </p>

            <h4 className="text-xl font-semibold mt-6">Kesimpulan: Menyikapi Kenaikan PPN dengan Strategi yang Tepat</h4>
            <p>Kenaikan PPN menjadi 12% pada 2025 pasti akan menambah tantangan bagi petambak, terutama dalam hal biaya operasional. Namun, dengan strategi yang tepat seperti diversifikasi usaha, pemanfaatan teknologi, dan pengembangan produk olahan, petambak dapat tetap bertahan dan bahkan berkembang dalam menghadapi kebijakan pajak baru ini. Dukungan pemerintah melalui insentif fiskal juga memberikan peluang bagi dunia usaha untuk mengoptimalkan potensi dan memperkuat daya saing di pasar.</p>
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