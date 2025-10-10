const RiwayatSurat = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('submissions') || '[]');
    setSubmissions(data);
  }, []);

  return (
    <div className="container">
      <h2>Riwayat Pengajuan Surat</h2>
      {submissions.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#bdefff', marginTop: '30px' }}>
          Belum ada pengajuan surat
        </p>
      ) : (
        <div className="surat-grid">
          {submissions.map(item => (
            <Card 
              key={item.id}
              title={item.jenis.charAt(0).toUpperCase() + item.jenis.slice(1)}
              description={`${item.nama} - ${item.keperluan}`}
              status={item.status}
              onClick={() => navigate(`/detail/${item.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};