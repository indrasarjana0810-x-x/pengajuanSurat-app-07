import React, { useEffect, useState, useRef } from 'react';

import photoA from '../components/Profile/Me.jpeg'; 
import photoB from '../components/Profile/Me.jpeg';
import photoC from '../components/Profile/Me.jpeg';
import photoD from '../components/Profile/Me.jpeg';

const teamMembers = [
  { name: "Puji Yayang Handriani", photo: photoA },
  { name: "Indra Sukma Nugraha", photo: photoB },
  { name: "Muhammad Alif Fadhillah", photo: photoC },
  { name: "Adhitya Tubagus Syahroni", photo: photoD },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const gridRef = useRef(null); 

  useEffect(() => {
    // Logic untuk auto-scroll setiap 4 detik (4000ms)
    const timer = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Logic untuk menggulir kartu aktif ke tengah view
    const gridElement = gridRef.current;
    if (gridElement && gridElement.children[activeIndex]) { 
      gridElement.children[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', 
        inline: 'center', // Memastikan kartu berada di tengah viewport
      });
    }
  }, [activeIndex]);

  return (
    <div className="page-wrapper about-page">
      <div className="page-header">
        <h1>Tentang Proyek & Tim Kami</h1>
      </div>
      
      <div className="about-content">
        <div className="project-details-card">
          <h2>Detail Proyek</h2>
          <p className="description-text">
            Proyek ini dibuat untuk tugas kelompok yang mengimplementasikan Component, JSX, Props, State, React Router, Two-way binding, dan Validasi Form.
          </p>
          <ul className="project-features-list">
            <li>5 Halaman: <strong>Home, Buat, Riwayat, Approval, About</strong></li>
            <li>Reusable component: <strong>RequestCard, RequestForm, Header, Footer</strong></li>
            <li>Data disimpan sementara di <strong>localStorage</strong></li>
          </ul>
        </div>
      </div>
      
      <h2 className="team-section-header">Tim Pengembang (Kelompok 07)</h2>
      
      {/* Container scroll horizontal (Carousel) */}
      <div className="team-grid" ref={gridRef}> 
        {/* Scroll spacers dihapus dari JSX. Spacing di tepi dikelola via CSS padding di .team-grid */}
        
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            // Menambahkan class highlight berdasarkan state aktif
            className={`team-member-card ${index === activeIndex ? 'active-highlight' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <img 
              src={member.photo ? member.photo : 'https://via.placeholder.com/100/CCCCCC/808080?text=Foto+Tim'}
              alt={`Foto ${member.name}`} 
              className="member-photo" 
            />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}