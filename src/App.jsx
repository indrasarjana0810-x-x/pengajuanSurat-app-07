import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPengajuan from "./pages/FormPengajuan";
import DaftarSurat from "./pages/DaftarSurat";
import DetailSurat from "./pages/DetailSurat";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPengajuan />} />
        <Route path="/list" element={<DaftarSurat />} />
        <Route path="/detail/:id" element={<DetailSurat />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;