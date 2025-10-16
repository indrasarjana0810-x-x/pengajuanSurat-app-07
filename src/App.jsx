import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateRequest from "./pages/CreateRequest";
import MyRequests from "./pages/MyRequest";
import Approvals from "./pages/Approvals";
import About from "./pages/About";

export default function App() {
  const location = useLocation();

  return (
    <div className="app-root">
      <Header />

      <main className="container">
        {/* AnimatePresence akan mendeteksi perubahan halaman */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/buat" element={<CreateRequest />} />
            <Route path="/riwayat" element={<MyRequests />} />
            <Route path="/approval" element={<Approvals />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
