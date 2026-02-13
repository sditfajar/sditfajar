import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FormPendaftaran() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    namaLengkap: '',
    namaPanggilan: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    jumlahSaudara: '',
    anakKe: '',
    alamat: '',
    noHp: '',
    hobi: '',
    prestasi: '',
    penyakit: '',
  });
  const handleWhatsAppRedirect = () => {
    const nomorAdmin = '6287737860657'; // tanpa 0 di depan
    const pesan = `Assalamualaikum, saya telah mengisi formulir pendaftaran atas nama ${formData.namaLengkap}. Mohon informasi selanjutnya. Terima kasih.`;

    const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');

    // reset form
    setFormData({
      namaLengkap: '',
      namaPanggilan: '',
      tempatLahir: '',
      tanggalLahir: '',
      jenisKelamin: '',
      jumlahSaudara: '',
      anakKe: '',
      alamat: '',
      noHp: '',
      hobi: '',
      prestasi: '',
      penyakit: '',
    });

    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('https://script.google.com/macros/s/AKfycbxD4ayMFl8Yzp4XFk3XLTVikqprFHpz6AKIJCtCmrJlxvSVQZTybxbzvbqwObPolzmIqQ/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    setShowModal(true); // munculkan popup
  };

  return (
    <section className="container px-4 py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl md:px-6 lg:px-12">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
          <div className="w-full max-w-sm p-8 text-center bg-white shadow-lg rounded-xl">
            <h3 className="text-lg font-semibold text-[#002141] mb-4">Pendaftaran Berhasil</h3>

            <p className="mb-6 text-gray-600">Silakan konfirmasi pendaftaran ke admin melalui WhatsApp untuk informasi selanjutnya.</p>

            <button onClick={handleWhatsAppRedirect} className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition bg-green-500 rounded-lg hover:bg-green-600">
              <FaWhatsapp size={20} />
              Konfirmasi ke WhatsApp Admin
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#002141]">Form Pendaftaran Murid Baru</h2>
        <div className="h-2 w-40 bg-[#2486C6] mt-1 mb-4"></div>
        <p className="leading-relaxed text-justify text-gray-700 text-md">
          Penerimaan Peserta Didik Baru (PPDB) TP 2025/2026 telah dibuka. Silakan isi formulir dengan data yang benar dan lengkap. Pendaftaran Gelombang 1: September–Februari, Gelombang 2: Maret–Juni. Informasi lebih lanjut hubungi WhatsApp
          0877-3786-0657 atau 0822-4962-7864.
        </p>
      </div>

      {/* Form */}
      <div className="p-6 mt-10 bg-white shadow-md md:p-10 rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Lengkap */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Nama Lengkap Siswa *</label>
            <input type="text" name="namaLengkap" value={formData.namaLengkap} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none" />
          </div>

          {/* Nama Panggilan */}
          <div>
            <input
              type="text"
              name="namaPanggilan"
              value={formData.namaPanggilan}
              onChange={handleChange}
              placeholder="Nama Panggilan"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none"
            />
          </div>

          {/* TTL */}
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="tempatLahir"
              value={formData.tempatLahir}
              onChange={handleChange}
              placeholder="Tempat Lahir"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none"
            />

            <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none" />
          </div>

          {/* Gender */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="jenisKelamin" value="Laki-Laki" onChange={handleChange} />
              Laki-Laki
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="jenisKelamin" value="Perempuan" onChange={handleChange} />
              Perempuan
            </label>
          </div>

          {/* Jumlah Saudara & Anak Ke */}
          <div className="grid gap-6 md:grid-cols-2">
            <select name="jumlahSaudara" value={formData.jumlahSaudara} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none">
              <option value="">Jumlah Saudara</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <select name="anakKe" value={formData.anakKe} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none">
              <option value="">Anak Ke</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          {/* Alamat */}
          <textarea name="alamat" value={formData.alamat} onChange={handleChange} rows="3" placeholder="Alamat Lengkap" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none" />

          {/* No HP */}
          <input
            type="tel"
            name="noHp"
            value={formData.noHp}
            onChange={handleChange}
            placeholder="Nomor WhatsApp Aktif"
            required
            pattern="[0-9]*"
            inputMode="numeric"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none"
          />

          {/* Hobi */}
          <input type="text" name="hobi" value={formData.hobi} onChange={handleChange} placeholder="Hobi" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none" />

          {/* Prestasi */}
          <textarea name="prestasi" value={formData.prestasi} onChange={handleChange} rows="2" placeholder="Prestasi" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none" />

          {/* Penyakit */}
          <textarea name="penyakit" value={formData.penyakit} onChange={handleChange} rows="2" placeholder="Penyakit" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#2486C6] outline-none" />

          {/* Button */}
          <button type="submit" className="bg-[#2486C6] hover:bg-[#1c6ea0] text-white px-8 py-3 rounded-lg font-semibold transition">
            Kirim Pendaftaran
          </button>
        </form>
      </div>
    </section>
  );
}
