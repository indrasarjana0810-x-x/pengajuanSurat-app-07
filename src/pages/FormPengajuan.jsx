const FormPengajuan = () => {
  const { jenis } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomorInduk: '',
    keperluan: '',
    tanggal: '',
    keterangan: ''
  });

  const [errors, setErrors] = useState({});

  // Two-Way Binding
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error saat user mulai mengetik
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validasi Form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama wajib diisi';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.nomorInduk.trim()) {
      newErrors.nomorInduk = 'Nomor Induk wajib diisi';
    }
    
    if (!formData.keperluan.trim()) {
      newErrors.keperluan = 'Keperluan wajib diisi';
    }
    
    if (!formData.tanggal) {
      newErrors.tanggal = 'Tanggal wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newSubmission = {
        id: Date.now(),
        jenis: jenis,
        ...formData,
        status: 'Pending',
        tanggalPengajuan: new Date().toLocaleDateString('id-ID')
      };
      
      const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
      submissions.push(newSubmission);
      localStorage.setItem('submissions', JSON.stringify(submissions));
      
      alert('Pengajuan berhasil dikirim!');
      navigate('/riwayat');
    }
  };

  const getJudulSurat = () => {
    const judulMap = {
      'izin': 'Surat Izin',
      'keterangan': 'Surat Keterangan',
      'rekomendasi': 'Surat Rekomendasi',
      'pengajuan': 'Surat Pengajuan',
      'permohonan': 'Surat Permohonan'
    };
    return judulMap[jenis] || 'Surat';
  };

  return (
    <div className="form-container">
      <h2>Form {getJudulSurat()}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Lengkap *</label>
          <input 
            type="text" 
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
          />
          {errors.nama && <div className="error-message">{errors.nama}</div>}
        </div>

        <div>
          <label>Email *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="contoh@email.com"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div>
          <label>Nomor Induk (NIM/NIP/NIK) *</label>
          <input 
            type="text" 
            name="nomorInduk"
            value={formData.nomorInduk}
            onChange={handleChange}
            placeholder="Masukkan nomor induk"
          />
          {errors.nomorInduk && <div className="error-message">{errors.nomorInduk}</div>}
        </div>

        <div>
          <label htmlFor="keperluan-select">Keperluan *</label>
          <select 
            id="keperluan-select"
            name="keperluan"
            value={formData.keperluan}
            onChange={handleChange}
          >
            <option value="">-- Pilih Keperluan --</option>
            <option value="Sakit">Sakit</option>
            <option value="Keperluan Keluarga">Keperluan Keluarga</option>
            <option value="Administrasi">Administrasi</option>
            <option value="Beasiswa">Beasiswa</option>
            <option value="Lainnya">Lainnya</option>
          </select>
          {errors.keperluan && <div className="error-message">{errors.keperluan}</div>}
        </div>

        <div>
          <label>Tanggal *</label>
          <input 
            type="date" 
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            placeholder="Pilih tanggal"
            title="Pilih tanggal"
          />
          {errors.tanggal && <div className="error-message">{errors.tanggal}</div>}
        </div>

        <div>
          <label>Keterangan Tambahan</label>
          <textarea 
            name="keterangan"
            value={formData.keterangan}
            onChange={handleChange}
            placeholder="Jelaskan detail keperluan Anda..."
            rows="4"
          />
        </div>

        <button type="submit">Kirim Pengajuan</button>
      </form>
      
      <Link to="/jenis-surat" className="back-button">← Kembali</Link>
    </div>
  );
};