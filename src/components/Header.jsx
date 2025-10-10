import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <h1>Pengajuan Surat</h1>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/form" className={({ isActive }) => isActive ? "active" : ""}>Form</NavLink></li>
        <li><NavLink to="/list" className={({ isActive }) => isActive ? "active" : ""}>Daftar</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;