import React, { useState, useEffect } from 'react';

export default function NewsSection({}) {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('https://script.google.com/macros/s/AKfycbyQMKc8VbMm9dmdatK6x2_HBuS11lzhiCT8_yPIB7LhzkUsE0vKDSYow3NkVQjjG7Cvgg/exec')
      .then((res) => res.json())
      .then((data) => {
        const latestThree = [...data]
          .reverse() // terbaru dulu
          .slice(0, 3); // ambil 3 saja

        setNewsData(latestThree);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  // Warna background otomatis
  const getBgColor = (index) => {
    const colors = ['bg-[#002141]', 'bg-[#2486C6]', 'bg-[#F59E0B]'];
    return colors[index % colors.length];
  };

  return (
    <section className="w-full px-4 font-poppins md:px-0">
      <div className="container mx-auto max-w-7xl">
        {/* Loading State */}
        {loading && <div className="py-16 text-center text-gray-500 animate-pulse">Memuat berita terbaru...</div>}

        {/* News Grid */}
        {!loading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsData.map((news, index) => (
              <div key={news.id} className="flex flex-col">
                {/* Gambar */}
                <div className="relative overflow-hidden transition-transform duration-500 shadow-lg rounded-3xl hover:scale-[1.02]">
                  <img src={news.img} alt={news.title} className="object-cover w-full border-4 h-52 md:h-60 rounded-3xl border-slate-100" />
                </div>

                {/* Konten */}
                <div className="flex flex-col flex-1 mx-2 mt-[-10px]">
                  <div className={`${getBgColor(index)} text-white p-6 flex flex-col flex-1 rounded-b-3xl shadow-2xl`}>
                    <h3 className="text-lg font-semibold cursor-pointer md:text-xl" onClick={() => setSelectedNews(news)}>
                      {news.title}
                    </h3>

                    <p className="mt-1 mb-3 text-xs text-slate-300">{news.date}</p>

                    <p className="flex-1 text-xs leading-relaxed md:text-sm line-clamp-4" dangerouslySetInnerHTML={{ __html: news.desc }}></p>

                    <button onClick={() => setSelectedNews(news)} className="self-start px-4 py-2 mt-6 text-sm rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-50">
                      Selengkapnya..
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Detail */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-6 bg-white shadow-2xl rounded-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setSelectedNews(null)} className="absolute text-xl text-gray-500 top-3 right-3 hover:text-black">
              ✕
            </button>

            <img src={selectedNews.img} alt={selectedNews.title} className="object-cover w-full h-40 mb-4 md:h-60 rounded-xl" />

            <h2 className="text-lg font-bold text-gray-800 md:text-xl">{selectedNews.title}</h2>

            <p className="mt-1 mb-4 text-sm text-gray-500">{selectedNews.date}</p>

            <p className="text-sm leading-relaxed text-gray-600 md:text-base" dangerouslySetInnerHTML={{ __html: selectedNews.desc }}></p>
          </div>
        </div>
      )}
    </section>
  );
}
