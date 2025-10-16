import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const icons = {
  Buat: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 13H7" />
      <path d="M17 17H7" />
      <path d="M17 10H7" />
    </svg>
  ),
  Riwayat: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Approval: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-6 9-8 9s-8-4-8-9V5l8-3 8 3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
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
