import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FloatingLogos from "../components/FloatingLogos";

import photoA from "../components/Profile/puji.jpg";
import photoB from "../components/Profile/Me.jpeg";
import photoC from "../components/Profile/Alif.jpg";
import photoD from "../components/Profile/Adit.jpeg";

const teamMembers = [
  { name: "Puji Yayang Handriani", photo: photoA },
  { name: "Indra Sukma Nugraha", photo: photoB },
  { name: "Muhammad Alif Fadhillah", photo: photoC },
  { name: "Adhitya Tubagus Syahroni", photo: photoD },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  // 🧠 Auto-scroll setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 🎯 Scroll kartu aktif ke tengah
  useEffect(() => {
    const gridElement = gridRef.current;
    if (gridElement && gridElement.children[activeIndex]) {
      gridElement.children[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  // 🧩 Return utama halaman About
  return (
    <motion.div
      className="page-wrapper about-page"
      style={{ position: "relative", overflow: "hidden" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: clicked ? 1 : 1, // animasi kecil ketika klik
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 400); // reset animasi setelah selesai
      }}
    >
      {/* 🌈 Logo animasi melayang di background */}
      <FloatingLogos />
      <div className="page-header">
        <h1>Tentang Proyek & Tim Kami</h1>
      </div>
      <div className="about-content">
        <div className="project-details-card">
          <h2>Detail Proyek</h2>
          <p className="description-text">
            Proyek ini dibuat untuk tugas kelompok yang mengimplementasikan
            Component, JSX, Props, State, React Router, Two-way binding, dan
            Validasi Form.
          </p>
          <ul className="project-features-list">
            <li>
              5 Halaman: <strong>Home, Buat, Riwayat, Approval, About</strong>
            </li>
            <li>
              Reusable component:{" "}
              <strong>RequestCard, RequestForm, Header, Footer</strong>
            </li>
            <li>
              Data disimpan sementara di <strong>localStorage</strong>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="team-section-header">Tim Pengembang (Kelompok 07)</h2>

      {/* Carousel anggota tim */}
      <div className="team-grid" ref={gridRef}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-member-card ${
              index === activeIndex ? "active-highlight" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={
                member.photo
                  ? member.photo
                  : "https://via.placeholder.com/100/CCCCCC/808080?text=Foto+Tim"
              }
              alt={`Foto ${member.name}`}
              className="member-photo"
            />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
