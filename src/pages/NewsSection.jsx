import React, { useState } from 'react';

const newsData = [
  {
    id: 1,
    img: '/images/berita-terkini/api.jpg',
    title: 'Semangat Membara di Api Unggun Perkajum!',
    desc: 'Dalam hangatnya api unggun Perkajum, para santri SDIT FAJAR Depok menyalakan semangat juang, disiplin, dan persaudaraan. Kegiatan ini bukan sekadar ajang berkemah, tetapi juga menjadi simbol kebersamaan dan kemandirian. Malam api unggun diisi dengan pentas seni, renungan malam, hingga doa bersama yang menggugah semangat keislaman. Suasana penuh tawa dan semangat kebersamaan menjadi momen berharga yang akan dikenang setiap peserta.',
    bg: 'bg-[#002141]',
  },
  {
    id: 2,
    img: '/images/berita-terkini/1.jpg',
    title: 'Selamat Hari Santri Nasional!',
    desc: 'Peringatan Hari Santri Nasional di SDIT FAJAR Depok berlangsung meriah dan penuh makna. Para santri mengenakan pakaian khas santri, mengikuti upacara bendera, serta berbagai lomba islami seperti hafalan doa, adzan, dan ceramah singkat. Kegiatan ini mengingatkan kita akan peran besar santri dalam perjuangan kemerdekaan dan dakwah Islam di Indonesia. Semangat belajar, berakhlak, dan cinta Al-Qur’an terus ditanamkan agar lahir generasi yang cerdas, beriman, dan berjiwa nasionalis.',
    bg: 'bg-[#2486C6]',
  },
  {
    id: 3,
    img: '/images/berita-terkini/df.jpg',
    title: 'SDIT FAJAR Beri Promo Spesial untuk 10 Pendaftar Pertama',
    desc: `Kabar gembira untuk Ayah Bunda! SDIT FAJAR Depok membuka Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027 dengan promo spesial. 
    Bagi 10 pendaftar pertama, akan mendapatkan potongan biaya berupa <strong>FREE SPP Bulan Juli 100%</strong>. 
    Program ini berlaku hingga akhir November 2025. Selain promo menarik, SDIT FAJAR juga menghadirkan program unggulan seperti Tahfidz Qur’an, Literasi Kreatif, dan Pembiasaan Ibadah Harian. 
    Segera daftarkan putra-putri Anda melalui tautan berikut: 
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhP5cWZIe4bUbNKZnEqzr8rEsf0Am5nudqIcj5DXw8Trofwg/viewform" 
      target="_blank" 
      rel="noopener noreferrer" 
      style="color:#007BFF; text-decoration:underline; font-weight:600;">
      Pendaftaran SDIT FAJAR
    </a>.`,
    bg: 'bg-[#FFD166]',
  },
];

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <section className="w-full px-4 font-poppins md:px-0">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <div key={news.id} className="flex flex-col">
              {/* Gambar */}
              <div className="relative flex flex-col overflow-hidden transition-transform duration-500 shadow-lg rounded-3xl hover:scale-[1.02]">
                <img src={news.img} alt={news.title} className="object-cover w-full border-4 h-52 md:h-60 rounded-3xl border-slate-100 shadow-slate-900/10" />
              </div>

              {/* Konten */}
              <div className="flex flex-col flex-1 mx-2 mt-[-10px]">
                <div className={`${news.bg} text-white p-6 flex flex-col flex-1 rounded-b-3xl shadow-2xl`}>
                  <h3 className="mb-3 text-lg font-semibold md:text-xl hover:cursor-pointer" onClick={() => setSelectedNews(news)}>
                    {news.title}
                  </h3>
                  <p className="flex-1 text-xs leading-relaxed md:text-sm line-clamp-4" dangerouslySetInnerHTML={{ __html: news.desc }}></p>
                  <button onClick={() => setSelectedNews(news)} className="self-start px-4 py-2 mt-6 text-sm rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-50">
                    Selengkapnya..
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-6 bg-white shadow-2xl rounded-2xl animate-fadeIn overflow-y-auto max-h-[90vh]">
            <button onClick={() => setSelectedNews(null)} className="absolute text-xl text-gray-500 top-3 right-3 hover:text-black">
              ✕
            </button>

            <img src={selectedNews.img} alt={selectedNews.title} className="object-cover w-full h-40 mb-4 md:h-60 rounded-xl" />
            <h2 className="mb-3 text-lg font-bold text-gray-800 md:text-xl">{selectedNews.title}</h2>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base" dangerouslySetInnerHTML={{ __html: selectedNews.desc }}></p>
            {/* {selectedNews.desc} */}
          </div>
        </div>
      )}
    </section>
  );
}
