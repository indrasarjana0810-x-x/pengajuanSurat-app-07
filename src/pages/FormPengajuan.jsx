import { useState } from "react";

function FormPengajuan() {
  const [formData, setFormData] = useState({
    nama: "",
    npm: "",
    jenis: "",
    alasan: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.npm || !formData.jenis) {
      setError("Semua field wajib diisi!");
      return;
    }
    alert("Pengajuan berhasil dikirim!");
    setError("");
    setFormData({ nama: "", npm: "", jenis: "", alasan: "" });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Form Pengajuan Surat</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={formData.nama}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="npm"
          placeholder="NPM"
          value={formData.npm}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <select
          name="jenis"
          value={formData.jenis}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">Pilih Jenis Surat</option>
          <option value="Surat Izin">Surat Izin</option>
          <option value="Surat Keterangan">Surat Keterangan</option>
          <option value="Surat Cuti">Surat Cuti</option>
        </select>
        <textarea
          name="alasan"
          placeholder="Alasan pengajuan..."
          value={formData.alasan}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export default FormPengajuan;
