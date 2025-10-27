import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State lokal untuk input

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Arahkan ke halaman kantor-perwakilan dengan query
      window.location.href = `/kantor-perwakilan?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <footer className="relative z-20 shadow-lg bg-[#002141] backdrop-blur-md text-slate-50 font-poppins">
      {/* Konten Utama */}
      <div className="flex flex-row">
        <div className="bg-[#2486C6] w-4/1 h-5 md:h-6"></div>
        <div className="bg-[#F59E0B] w-4/3 h-5 md:h-6"></div>
      </div>
      <div className="px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pt-10 pb-10 mx-auto max-w-7xl md:grid-cols-3">
          {/* Kolom 1 */}
          <div className="flex flex-col items-start">
            <a href="/" className="ps-2">
              <img src="/logo.png" alt="Logo BMH" className="object-contain h-10 mt-5 mb-6" />
            </a>
            <p className="pl-2 pr-2 text-sm font-light leading-relaxed text-justify">
              <p>
                <span className="font-bold text-[#2486C6]">SDIT Fajar Kota Depok</span> adalah lembaga pendidikan Islam terpadu yang berkomitmen mencetak generasi Qurani, cerdas, dan berakhlak mulia. Kami terus berupaya menghadirkan
                lingkungan belajar yang unggul, inspiratif, serta berlandaskan iman dan ilmu.
              </p>
            </p>
          </div>

          {/* Kolom 2 - Google Maps */}
          <div className="pl-2 pr-2 md:pt-6 md:mt-15">
            <div className="overflow-hidden shadow-lg rounded-xl h-52">
              <iframe
                src="https://www.google.com/maps?q=Jl.+Jati+III+No.+04+RT.+007%2F007+Jatijajar+Tapos+Depok&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kolom 3 */}
          <div className="pl-2 pr-2 md:pt-6">
            {/* Form Pencarian */}
            <form onSubmit={handleSearch} className="flex mb-5 overflow-hidden rounded-full">
              <input
                type="text"
                placeholder="Cari...."
                className="flex-grow px-4 py-2 pr-10 text-sm text-gray-800 bg-white rounded-l-full focus:outline-none" // Ruang untuk tombol X
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button type="button" className="px-2 py-0 text-gray-500 bg-white border-none hover:text-gray-900" onClick={() => setSearchQuery('')}>
                  &times;
                </button>
              )}
              <button type="submit" className="px-4 py-2 text-sm font-semibold text-white rounded-r-full bg-[#65BDFF] hover:bg-emerald-600">
                Search
              </button>
            </form>
            <h3 className="mb-3 text-lg font-extrabold text-[#FFD166]">SDIT Fajar Depok</h3>
            <div className="space-y-2 text-sm font-light">
              <p className="flex items-center transition">Jl. Jati III No.40 RT.007/007, Kel. Jatijajar, Kec. Tapos, Kota Depok</p>

              <a href="https://wa.me/6287737860657?text=Assalamualaikum" className="flex items-center transition hover:text-[#65BDFF] pt-3">
                <MdPhone className="mr-2 text-xs md:text-sm" /> 0877-3786-0657 (Padil Riswandi)
              </a>
              <a href="https://wa.me/6282249627864?text=Assalamualaikum" className="flex items-center transition hover:text-[#65BDFF] pt-3">
                <MdPhone className="mr-2 text-xs md:text-sm" /> 0877-3786-0657 (Viny Virzanah)
              </a>
              <a href="mailto:sditfajar@gmail.com" className="flex items-center transition hover:text-[#65BDFF]">
                <MdEmail className="mr-2 text-xs md:text-sm" /> sditfajar@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sosial Media */}
      <div className="flex justify-center pt-5 text-sm">
        <p className="flex items-center transition font-extralight">Follow Us: @sditfajar</p>
      </div>
      <div className="flex justify-center gap-6 pt-5 pb-6 text-xl text-slate-50">
        {/* <a href="https://www.facebook.com/SDITFajardepok" className="transition hover:text-[#FFD166]">
          <FaFacebookF />
        </a> */}
        <a href="https://whatsapp.com/channel/0029Vb68SXfFCCoPL1kfk32Q" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/sdit_fajar/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@sdit_fajardpk" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaTiktok />
        </a>
        <a href="https://www.youtube.com/@sditfajardepok5479" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#FEB738]">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="py-6 text-xs md:text-sm text-center text-white bg-[#002141] border-t-1 border-white/30 font-extralight">
        © 2026 Dibuat dengan <span class="text-pink-500">❤️</span> oleh{' '}
        <a href="https://www.instagram.com/azzamazhari._/" target="_blank" class="font-bold text-blue-400">
          IT SDIT Fajar
        </a>
        {''}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
