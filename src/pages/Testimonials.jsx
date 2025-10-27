import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Anak saya jadi lebih semangat belajar dan hafalan Qur’an. Guru-gurunya sangat sabar dan perhatian.',
      name: 'Ibu Rina',
      role: 'Orang Tua Siswa Kelas 3',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      quote: 'SDIT Fajar memberikan lingkungan Islami yang nyaman. Anak saya belajar dengan bahagia dan disiplin.',
      name: 'Bapak Ahmad',
      role: 'Orang Tua Siswa Kelas 2',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      quote: 'Kegiatan tahfidz dan pembiasaan adabnya luar biasa! Anak saya jadi lebih sopan dan rajin shalat.',
      name: 'Ibu Siti',
      role: 'Orang Tua Siswa Kelas 1',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      quote: 'Guru dan stafnya sangat komunikatif. Kami sebagai orang tua merasa sangat dilibatkan dalam perkembangan anak.',
      name: 'Bapak Dimas',
      role: 'Orang Tua Siswa Kelas 4',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      quote: 'Lingkungan sekolahnya bersih, aman, dan Islami. SDIT Fajar benar-benar tempat terbaik untuk anak belajar.',
      name: 'Ibu Laila',
      role: 'Orang Tua Siswa Kelas 5',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // otomatis bergeser tiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative px-6 py-16 overflow-hidden bg-slate-100 isolate lg:px-8 font-poppins">
      {/* Background efek */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-[#2486C6]50),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-100 shadow-xl ring-1 shadow-[#2486C6]/50 ring-emerald-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="relative max-w-2xl mx-auto transition-all duration-700 ease-in-out lg:max-w-4xl">
        <img alt="" src="/images/logo/logo.png" className="h-12 mx-auto" />

        {/* Isi testimoni */}
        <figure key={currentIndex} className="mt-10 text-center transition-all duration-700 ease-in-out">
          <blockquote className="font-semibold text-gray-900 text-xl/8 sm:text-2xl/9">
            <p className="italic opacity-90">“{currentTestimonial.quote}”</p>
          </blockquote>
          <figcaption className="mt-10 text-center">
            <img alt={currentTestimonial.name} src={currentTestimonial.image} className="mx-auto rounded-full shadow-md size-14" />
            <div className="flex items-center justify-center mt-4 space-x-3 text-base">
              <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{currentTestimonial.role}</div>
            </div>
          </figcaption>
        </figure>

        {/* Navigasi di bawah */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          {/* Tombol kiri */}
          <button onClick={handlePrev} aria-label="Sebelumnya" className="bg-white/80 hover:bg-[#2486C6] text-[#2486C6] hover:text-white transition-all rounded-full shadow-md w-10 h-10 flex items-center justify-center">
            <span className="text-2xl font-bold">{'‹'}</span>
          </button>

          {/* Indikator bulatan */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, i) => (
              <span key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#2486C6]' : 'bg-gray-300'}`} />
            ))}
          </div>

          {/* Tombol kanan */}
          <button onClick={handleNext} aria-label="Berikutnya" className="bg-white/80 hover:bg-[#2486C6] text-[#2486C6] hover:text-white transition-all rounded-full shadow-md w-10 h-10 flex items-center justify-center">
            <span className="text-2xl font-bold">{'›'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
