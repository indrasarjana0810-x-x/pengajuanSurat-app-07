import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Pengajuan Surat</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/form" className="hover:underline">Form</Link>
        <Link to="/list" className="hover:underline">Daftar</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
}

export default Header;