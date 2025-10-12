import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CreateRequest from './pages/CreateRequest'
import MyRequests from './pages/MyRequest'
import Approvals from './pages/Approvals'
import About from './pages/About'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buat" element={<CreateRequest />} />
          <Route path="/riwayat" element={<MyRequests />} />
          <Route path="/approval" element={<Approvals />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}