import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const ArticlePage = () => {
  const articles = [
     {
      id: 1,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Nama Penulis",
      date: "Tanggal Dibuat",
      description: "Pendekatan optimal untuk perawatan udang melibatkan manajemen...",
      image: "/udang.png",
    },
    {
      id: 2,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Nama Penulis",
      date: "Tanggal Dibuat",
      description: "Pendekatan optimal untuk perawatan udang melibatkan manajemen...",
      image: "/udang.png",
    },
    {
      id: 3,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Nama Penulis",
      date: "Tanggal Dibuat",
      description: "Pendekatan optimal untuk perawatan udang melibatkan manajemen...",
      image: "/udang.png",
    },
    {
      id: 4,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Nama Penulis",
      date: "Tanggal Dibuat",
      description: "Pendekatan optimal untuk perawatan udang melibatkan manajemen...",
      image: "/udang.png",
    },
    {
      id: 5,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Nama Penulis",
      date: "Tanggal Dibuat",
      description: "Pendekatan optimal untuk perawatan udang melibatkan manajemen...",
      image: "/udang.png",
    },
    {
      id: 6,
      title: "Strategi Terbaik Dalam Perawatan Udang",
      author: "Nama Penulis",
      date: "Tanggal Dibuat",
      description: "Pendekatan optimal untuk perawatan udang melibatkan manajemen...",
      image: "/udang.png",
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
            <Link to={`/articles/${article.id}`} className="text-blue-500 hover:text-blue-700">
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
