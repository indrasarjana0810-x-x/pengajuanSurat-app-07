import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FormPengajuan from "./pages/FormPengajuan";
import DaftarSurat from "./pages/DaftarSurat";
import About from "./pages/About";
import "./components/Style.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPengajuan />} />
          <Route path="/list" element={<DaftarSurat />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;