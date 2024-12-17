import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const ArticlePage = () => {
  const articles = [
     {
      id: 1,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Chrystalio",
      date: "10 Desember 2024",
      description: "Perawatan udang yang optimal mencakup serangkaian langkah strategis,...",
      image: "/article-1.jpg",
    },
    {
      id: 2,
      title: "Panduan Dasar untuk Petambak Pemula: Membangun Tambak yang Sukses",
      author: "Carissa Sumatri",
      date: "8 Desember 2024",
      description: "Memulai usaha tambak bisa terasa menantang, terutama bagi yang baru pertama...",
      image: "/article-2.jpg",
    },
    {
      id: 3,
      title: "Mengatasi Tantangan Tambak Air Tawar: Solusi untuk Budidaya Air Tawar yang Sukses",
      author: "Devisto Christian Pradana",
      date: "7 Desember 2024",
      description: "Budidaya tambak air tawar memang tidak lepas dari berbagai tantangan. Fluktuasi kualitas...",
      image: "/article-3.jpg",
    },
    {
      id: 4,
      title: "Meningkatkan Pendapatan melalui Diversifikasi Usaha Tambak",
      author: "Skina Adonai",
      date: "6 Desember 2024",
      description: "Diversifikasi usaha tambak merupakan strategi yang efektif untuk meningkatkan pendapatan...",
      image: "/article-4.jpg",
    },
    {
      id: 5,
      title: "Dampak Kenaikan Pajak PPN Terhadap Bisnis Tambak di Indonesia",
      author: "Juanda",
      date: "5 Desember 2024",
      description: "Pada awal tahun 2025, Indonesia akan memberlakukan kenaikan tarif Pajak Pertambahan Nilai...",
      image: "/article-5.jpg",
    },
    {
      id: 6,
      title: "Larva BSF (Black Soldier Fly): Pakan Alternatif yang Menjanjikan untuk Petambakan",
      author: "Eric Cantona",
      date: "2 Desember 2024",
      description: "Larva Black Soldier Fly (BSF) atau Hermetia illucens merupakan salah satu inovasi pakan...",
      image: "/article-6.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20"> 
  <h2 className="text-3xl font-bold text-center mb-8">Daftar Artikel</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {articles.map((article) => (
      <Link to={`/articles/${article.id}`} key={article.id} className="no-underline text-gray-700">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src={article.image} alt="Article Thumbnail" className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex justify-between text-gray-500 text-sm mb-2">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.description}</p>
            <Link to={`/articles/${article.id}`} key={article.id} className="no-underline text-gray-700">
            Baca Selengkapnya →
            </Link>
          </div>
        </div>
      </Link>
    ))}
  </div>
  <Footer />
</div>
  );
};

export default ArticlePage;
