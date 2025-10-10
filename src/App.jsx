function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jenis-surat" element={<JenisSurat />} />
        <Route path="/form/:jenis" element={<FormPengajuan />} />
        <Route path="/riwayat" element={<RiwayatSurat />} />
        <Route path="/detail/:id" element={<DetailSurat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;