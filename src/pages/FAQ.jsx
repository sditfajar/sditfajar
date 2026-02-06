import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Apa itu Sekolah Dasar Islam Terpadu (SDIT) Fajar?',
      answer: 'SDIT Fajar adalah sekolah dasar berbasis Islam terpadu yang menggabungkan pendidikan umum dan nilai-nilai keislaman. Kami berkomitmen membentuk generasi berilmu, berakhlak mulia, dan mencintai Al-Qur’an.',
    },
    {
      question: 'Apa keunggulan SDIT Fajar dibanding sekolah lainnya?',
      answer: 'Kami memiliki kurikulum terpadu yang menyeimbangkan antara ilmu pengetahuan, keislaman, dan karakter. Setiap siswa dibimbing dalam tahfidz, adab, serta kegiatan kreatif dan eksploratif sesuai usia anak.',
    },
    {
      question: 'Bagaimana cara mendaftarkan anak ke SDIT Fajar?',
      answer: `
        Pendaftaran dapat dilakukan langsung di sekolah atau melalui formulir online di website resmi SDIT Fajar.
        Calon siswa akan mengikuti seleksi sederhana berupa wawancara dan observasi kemampuan dasar.
        Anda dapat langsung mengisi formulir pendaftaran melalui tautan berikut:
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhP5cWZIe4bUbNKZnEqzr8rEsf0Am5nudqIcj5DXw8Trofwg/viewform"
           target="_blank"
           rel="noopener noreferrer"
           class="text-blue-700 underline hover:text-blue-900 font-semibold">
           Klik di sini untuk mendaftar
        </a>.
      `,
    },
    {
      question: 'Apakah ada program tahfidz atau kegiatan keislaman di SDIT Fajar?',
      answer: 'Ada. SDIT Fajar memiliki program tahfidz harian, shalat berjamaah, pembiasaan adab Islami, serta kegiatan keagamaan seperti pesantren kilat dan peringatan hari besar Islam.',
    },
    {
      question: 'Bagaimana sistem pembelajaran di SDIT Fajar?',
      answer: 'Pembelajaran dilakukan secara aktif, menyenangkan, dan kontekstual. Guru menggunakan metode tematik, project-based learning, serta teknologi pendukung agar siswa lebih mudah memahami materi.',
    },
    {
      question: 'Apakah SDIT Fajar memiliki kegiatan ekstrakurikuler?',
      answer: 'Ya. Terdapat berbagai kegiatan ekstrakurikuler seperti tahfidz, pramuka, seni, olahraga, dan sains club untuk mengembangkan potensi serta karakter siswa secara menyeluruh.',
    },
  ];

  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Text Content */}
        <div className="mb-10 text-left lg:text-left">
          <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Pertanyaan Umum (FAQ)</h2>
          <div className="h-2 w-40 bg-[#5DB5F7] mt-1 mb-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#5DB5F7] text-white' : 'bg-gray-50'}`}>
              <button onClick={() => toggleFAQ(index)} className="flex items-center justify-between w-full px-6 py-3 mt-4 text-left focus:outline-none">
                <span className={`font-medium ${openIndex === index ? 'text-white' : 'text-[#002141]'}`}>{faq.question}</span>

                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className={`${openIndex === index ? 'text-white' : 'text-[#FEB738]'}`} aria-hidden="true" focusable="false">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div className={`px-6 pb-4 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 border-t border-white/60' : 'max-h-0 opacity-0 overflow-hidden'}`} style={{ borderTopWidth: '0.5px' }}>
                {/* render HTML answer */}
                <div className="pt-4 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
              </div>
            </div>
          ))}
        </div>
        {/* isi */}
      </div>
    </section>
  );
};

export default FAQ;
