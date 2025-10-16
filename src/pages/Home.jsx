import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const icons = {
  Buat: (
    <lord-icon
      src="https://cdn.lordicon.com/hmpomorl.json"
      trigger="hover"
      state="hover-unfold"
      colors="primary:#121331,secondary:#2516c7"
      style={{ width: "60px", height: "60px" }}
    ></lord-icon>
  ),
  Riwayat: (
    <lord-icon
      src="https://cdn.lordicon.com/gdowkrjt.json"
      trigger="hover"
      stroke="light"
      colors="primary:#000000,secondary:#e4e4e4,tertiary:#4bb3fd,quaternary:#e83a30"
      style={{ width: "140px", height: "140px" }}
    ></lord-icon>
  ),
  Approval: (
    <lord-icon
      src="https://cdn.lordicon.com/ciwxnydt.json"
      trigger="hover"
      style={{ width: "160px", height: "160px" }}
    ></lord-icon>
  ),
};

export default function Home() {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>Selamat Datang di Sistem Pengajuan Surat</h1>
      <p>
        Sistem ini dirancang untuk mempermudah alur administrasi surat-menyurat
        Anda.
      </p>

      <div className="home-grid">
        <Link to="/buat" className="action-card card-buat">
          <div className="card-icon">{icons.Buat}</div>
          <h3>Buat Pengajuan Baru</h3>
          <p>Ajukan surat permohonan, izin, atau keterangan dengan cepat.</p>
        </Link>

        <Link to="/riwayat" className="action-card card-riwayat">
          <div className="card-icon">{icons.Riwayat}</div>
          <h3>Riwayat Pengajuan</h3>
          <p>Lacak status surat yang telah Anda kirim secara real-time.</p>
        </Link>

        <Link to="/approval" className="action-card card-approval">
          <div className="card-icon">{icons.Approval}</div>
          <h3>Halaman Approval</h3>
          <p>Tinjau, setujui, atau tolak permintaan surat dengan mudah.</p>
        </Link>
      </div>
    </motion.div>
  );
}
