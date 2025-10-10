const JenisSurat = () => {
  const navigate = useNavigate();
  
  const jenisSurat = [
    { id: 'izin', nama: 'Surat Izin', desc: 'Surat permohonan izin tidak masuk kerja/kuliah' },
    { id: 'keterangan', nama: 'Surat Keterangan', desc: 'Surat keterangan untuk berbagai keperluan' },
    { id: 'rekomendasi', nama: 'Surat Rekomendasi', desc: 'Surat rekomendasi untuk beasiswa atau pekerjaan' },
    { id: 'pengajuan', nama: 'Surat Pengajuan', desc: 'Surat pengajuan proposal atau kegiatan' },
    { id: 'permohonan', nama: 'Surat Permohonan', desc: 'Surat permohonan bantuan atau dukungan' }
  ];

  return (
    <div className="container">
      <h2>Pilih Jenis Surat</h2>
      <div className="surat-grid">
        {jenisSurat.map(surat => (
          <Card 
            key={surat.id}
            title={surat.nama}
            description={surat.desc}
            onClick={() => navigate(`/form/${surat.id}`)}
          />
        ))}
      </div>
    </div>
  );
};