import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  // refs untuk setiap ikon
  const refs = {
    buat: useRef(null),
    riwayat: useRef(null),
    approval: useRef(null),
  };

  // fungsi untuk trigger animasi lordicon
  const handleHover = (key, isEnter = true) => {
    const icon = refs[key]?.current;
    if (icon && isEnter) {
      // Reset dan play dari awal
      const player = icon.playerInstance;
      if (player) {
        player.goToFirstFrame();
        player.play();
      }
    }
  };

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
        Sistem ini dirancang untuk mempermudah alur administrasi surat-menyurat Anda.
      </p>

      <div className="home-grid">
        {/* === CARD BUAT === */}
        <Link
          to="/buat"
          className="action-card card-buat"
          onMouseEnter={() => handleHover("buat", true)}
          onMouseLeave={() => handleHover("buat", false)}
        >
          <div className="card-icon">
            <lord-icon
              ref={refs.buat}
              src="https://cdn.lordicon.com/hmpomorl.json"
              trigger="none"
              state="hover-unfold"
              colors="primary:#121331,secondary:#2516c7"
              style={{ width: "60px", height: "60px" }}
            ></lord-icon>
          </div>
          <h3>Buat Pengajuan Baru</h3>
          <p>Ajukan surat permohonan, izin, atau keterangan dengan cepat.</p>
        </Link>

        {/* === CARD RIWAYAT === */}
        <Link
          to="/riwayat"
          className="action-card card-riwayat"
          onMouseEnter={() => handleHover("riwayat", true)}
          onMouseLeave={() => handleHover("riwayat", false)}
        >
          <div className="card-icon">
            <lord-icon
              ref={refs.riwayat}
              src="https://cdn.lordicon.com/gdowkrjt.json"
              trigger="none"
              stroke="light"
              colors="primary:#000000,secondary:#e4e4e4,tertiary:#4bb3fd,quaternary:#e83a30"
              style={{ width: "140px", height: "140px" }}
            ></lord-icon>
          </div>
          <h3>Riwayat Pengajuan</h3>
          <p>Lacak status surat yang telah Anda kirim secara real-time.</p>
        </Link>

        {/* === CARD APPROVAL === */}
        <Link
          to="/approval"
          className="action-card card-approval"
          onMouseEnter={() => handleHover("approval", true)}
          onMouseLeave={() => handleHover("approval", false)}
        >
          <div className="card-icon">
            <lord-icon
              ref={refs.approval}
              src="https://cdn.lordicon.com/ciwxnydt.json"
              trigger="none"
              style={{ width: "160px", height: "160px" }}
            ></lord-icon>
          </div>
          <h3>Halaman Approval</h3>
          <p>Tinjau, setujui, atau tolak permintaan surat dengan mudah.</p>
        </Link>
      </div>
    </motion.div>
  );
}