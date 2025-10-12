import React from 'react'

export default function About() {
  return (
    <div>
      <h2>Tentang Proyek</h2>
      <p>
        Proyek ini dibuat untuk tugas kelompok yang mengimplementasikan Component, JSX, Props, State, React Router, Two-way binding, dan Validasi Form.
      </p>
      <ul>
        <li>5 Halaman: Home, Buat, Riwayat, Approval, About</li>
        <li>Reusable component: RequestCard, RequestForm, Header, Footer</li>
        <li>Data disimpan sementara di localStorage</li>
      </ul>
    </div>
  )
}