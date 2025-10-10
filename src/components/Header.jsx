const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>📧 E-SURAT</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jenis-surat">Jenis Surat</Link></li>
        <li><Link to="/riwayat">Riwayat</Link></li>
      </ul>
    </nav>
  );
};