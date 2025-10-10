const Home = () => {
  const [stats, setStats] = useState({
    totalSurat: 0,
    pending: 0,
    approved: 0
  });

  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    setStats({
      totalSurat: submissions.length,
      pending: submissions.filter(s => s.status === 'Pending').length,
      approved: submissions.filter(s => s.status === 'Approved').length
    });
  }, []);

  return (
    <>
      <div className="hero-section">
        <h1>Sistem Pengajuan Surat Online</h1>
        <p>Ajukan berbagai jenis surat dengan mudah dan cepat</p>
        <p>Platform digital untuk mempermudah proses administrasi surat menyurat</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">{stats.totalSurat}</div>
          <div className="stat-label">Total Pengajuan</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.pending}</div>
          <div className="stat-label">Menunggu Proses</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.approved}</div>
          <div className="stat-label">Disetujui</div>
        </div>
      </div>

      <div className="actions-grid">
        <Link to="/jenis-surat" className="action-card">
          <div className="action-title">📝 Ajukan Surat</div>
          <div className="action-desc">Buat pengajuan surat baru sesuai kebutuhan Anda</div>
        </Link>
        <Link to="/riwayat" className="action-card">
          <div className="action-title">📋 Lihat Riwayat</div>
          <div className="action-desc">Cek status dan riwayat pengajuan surat Anda</div>
        </Link>
      </div>
    </>
  );
};