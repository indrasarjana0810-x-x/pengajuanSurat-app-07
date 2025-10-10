const DetailSurat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    const found = submissions.find(item => item.id === parseInt(id));
    setDetail(found);
  }, [id]);

  if (!detail) {
    return (
      <div className="container">
        <p style={{ textAlign: 'center', color: '#bdefff' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Detail Pengajuan Surat</h2>
      
      <div className="detail-section">
        <div className="detail-row">
          <span className="detail-label">Jenis Surat:</span>
          <span className="detail-value">{detail.jenis.charAt(0).toUpperCase() + detail.jenis.slice(1)}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Nama:</span>
          <span className="detail-value">{detail.nama}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Email:</span>
          <span className="detail-value">{detail.email}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Nomor Induk:</span>
          <span className="detail-value">{detail.nomorInduk}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Keperluan:</span>
          <span className="detail-value">{detail.keperluan}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Tanggal:</span>
          <span className="detail-value">{detail.tanggal}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Tanggal Pengajuan:</span>
          <span className="detail-value">{detail.tanggalPengajuan}</span>
        </div>
        {detail.keterangan && (
          <div className="detail-row">
            <span className="detail-label">Keterangan:</span>
            <span className="detail-value">{detail.keterangan}</span>
          </div>
        )}
        <div className="detail-row">
          <span className="detail-label">Status:</span>
          <StatusBadge status={detail.status} />
        </div>
      </div>

      <Link to="/riwayat" className="back-button">← Kembali ke Riwayat</Link>
    </div>
  );
};