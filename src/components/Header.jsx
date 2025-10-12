import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const loc = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  // Helper function untuk menentukan class 'active'
  const getActiveClass = (path) => (loc.pathname === path ? 'active' : '');

  // AUTO-HIDE LOGIC
  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
          
          // Hide navbar saat scroll down lebih dari 100px
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsHidden(true);
          } 
          // Show navbar saat scroll up
          else if (currentScrollY < lastScrollY) {
            setIsHidden(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array, cukup run sekali

  return (
    // TAMBAHKAN CLASS DYNAMIC BERDASARKAN STATE isHidden
    <nav className={`navbar ${isHidden ? 'hidden-nav' : ''}`}>
      <h1>Pengajuan Surat</h1>
      
      <ul>
        <li>
          <Link className={getActiveClass('/')} to="/">Home</Link>
        </li>
        <li>
          <Link className={getActiveClass('/buat')} to="/buat">Buat</Link>
        </li>
        <li>
          <Link className={getActiveClass('/riwayat')} to="/riwayat">Riwayat</Link>
        </li>
        <li>
          <Link className={getActiveClass('/approval')} to="/approval">Approval</Link>
        </li>
        <li>
          <Link className={getActiveClass('/about')} to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}