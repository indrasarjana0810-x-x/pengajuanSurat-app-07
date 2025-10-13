import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Style.css";

export default function Header() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  // Logic untuk menambahkan kelas "active" pada link yang sesuai dengan path saat ini
  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  // Logic untuk menyembunyikan/memperlihatkan Navbar saat scroll
  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

          // Menyembunyikan Navbar jika scroll ke bawah dan melewati batas 100px
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsHidden(true);
          } 
          // Menampilkan Navbar jika scroll ke atas
          else if (currentScrollY < lastScrollY) {
            setIsHidden(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Menambahkan event listener dengan passive: true untuk performa
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function: membersihkan event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isHidden ? "hidden-nav" : ""}`}>
      <Link to="/" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="32"
          height="32"
          className="logo-icon"
        >
          <rect
            x="4" y="12" width="56" height="40" rx="6" ry="6"
            fill="none" stroke="currentColor" strokeWidth="3"
          />
          <polyline
            points="4,16 32,36 60,16"
            fill="none" stroke="currentColor" strokeWidth="3"
          />
        </svg>
        <span className="logo-text">
          Pengajuan<span className="highlight">Surat</span>
        </span>
      </Link>

      {/* NAVIGATION LINKS - Dibuat Reusable (Mapping Array) */}
      <ul className="nav-links">
        {[
          { path: "/", label: "Home" },
          { path: "/buat", label: "Buat" },
          { path: "/riwayat", label: "Riwayat" },
          { path: "/approval", label: "Approval" },
          { path: "/about", label: "About" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link className={getActiveClass(path)} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}