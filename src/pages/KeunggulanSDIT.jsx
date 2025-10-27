import React from 'react';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';

const keunggulanData = [
  {
    icon: <BookOpen className="w-10 h-10 text-[#65BDFF]" />,
    title: 'Berbasis Al-Qur’an & Akhlak Mulia',
    desc: 'Menanamkan nilai keislaman sejak dini agar santri tumbuh dengan karakter yang kuat dan berakhlak mulia.',
  },
  {
    icon: <Users className="w-10 h-10 text-[#39BA87]" />,
    title: 'Guru Profesional & Ramah Anak',
    desc: 'Dibimbing oleh tenaga pendidik berpengalaman dengan pendekatan yang lembut dan penuh kasih.',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#FEB738]" />,
    title: 'Pembelajaran Aktif & Kreatif',
    desc: 'Metode belajar interaktif yang mendorong santri berpikir kritis, mandiri, dan menyenangkan.',
  },
  {
    icon: <Heart className="w-10 h-10 text-[#5DB5F7]" />,
    title: 'Lingkungan Aman & Nyaman',
    desc: 'Sekolah yang bersih, islami, dan penuh keceriaan agar anak-anak betah belajar setiap hari.',
  },
];

const KeunggulanSDIT = () => {
  return (
    <section className="w-full px-5 py-16 font-poppins bg-slate-100">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10 text-left lg:text-left">
          <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Keunggulan SDIT Fajar</h2>
          <div className="h-2 w-40 bg-[#5DB5F7] mt-1 mb-4"></div>
        </div>

        {/* Isi Keunggulan */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {keunggulanData.map((item, index) => (
            <div key={index} className="p-6 text-center transition-all duration-300 transform bg-white shadow-md rounded-2xl hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-4 transition-transform duration-300 hover:scale-110">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#002141] mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeunggulanSDIT;
