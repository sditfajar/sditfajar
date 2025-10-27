import React from 'react';

const Kontak = () => {
  return (
    <section className="px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {/* Text Content */}
      <div className="mx-auto mb-5 text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Kontak Kami</h2>
        <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>

        <p className="leading-relaxed text-justify text-gray-700 text-md md:text-lg">
          Kami dengan senang hati menyambut setiap pertanyaan, saran, maupun kerja sama dari Anda. Silakan hubungi SDIT Fajar Kota Depok melalui kontak yang tersedia atau kunjungi langsung sekolah kami untuk mendapatkan informasi lebih
          lanjut mengenai pendaftaran, kegiatan belajar, dan program pendidikan.
        </p>
      </div>

      <div className="p-6 mt-12 bg-white shadow-md rounded-2xl">
        <h3 className="mb-4 text-xl font-bold text-gray-900">Formulir Kontak</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-gray-700">Nama Lengkap</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2486C6]" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2486C6]" placeholder="Email Anda" />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Subjek</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2486C6]" placeholder="Subjek Pesan" />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Pesan</label>
            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2486C6]" placeholder="Tulis pesan Anda di sini"></textarea>
          </div>
          <button type="submit" className="bg-[#2486C6] text-white px-6 py-3 rounded-lg hover:bg-[#002141] transition duration-300">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontak;
