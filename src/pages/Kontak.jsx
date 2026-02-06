import React from 'react';

const Kontak = () => {
  return (
    <section className="flex items-center min-h-screen">
      <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5DB5F7] mb-6">Kontak Kami</h2>

        {/* Description */}
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-gray-950 md:text-lg">
          <p>Halaman kontak ini digunakan untuk diskusi terkait kerja sama pendidikan, informasi pendaftaran peserta didik baru, serta pertanyaan lain seputar program dan kegiatan SDIT Fajar.</p>

          <p>
            Layanan administrasi SDIT Fajar beroperasi pada hari
            <strong> Senin hingga Jumat</strong>, pukul
            <strong> 08.00 – 16.00 WIB</strong>.
          </p>
        </div>

        {/* Button */}
        <div className="mt-10">
          <a
            href="https://wa.me/6282249627864?text=Assalamualaikum%20SDIT%20Fajar,%20saya%20ingin%20menghubungi%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg bg-[#5DB5F7] hover:bg-[#3ea0eb] transition duration-300"
          >
            Kontak Melalui WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
