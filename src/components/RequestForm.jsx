import React, { useState } from "react";

const RequestForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    judul: "",
    jenis: "",
    deskripsi: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Reset error kalau user udah mulai ngetik lagi
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.judul.trim()) newErrors.judul = true;
    if (!form.jenis.trim()) newErrors.jenis = true;
    if (!form.deskripsi.trim()) newErrors.deskripsi = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // kirim data ke parent component (CreateRequest)
    onSubmit(form);
    setForm({ judul: "", jenis: "", deskripsi: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="form-group">
        <label>
          Judul Surat <span className="required">*</span>
        </label>
        <input
          type="text"
          name="judul"
          placeholder="Masukkan judul surat..."
          value={form.judul}
          onChange={handleChange}
          className={errors.judul ? "error-input" : ""}
        />
      </div>

      <div className="form-group">
        <label>
          Jenis Surat <span className="required">*</span>
        </label>
        <select
          name="jenis"
          value={form.jenis}
          onChange={handleChange}
          className={errors.jenis ? "error-input" : ""}
        >
          <option value="">Pilih jenis surat...</option>
          <option value="Surat Keterangan">Surat Keterangan</option>
          <option value="Surat Izin">Surat Izin</option>
          <option value="Surat Pengantar">Surat Pengantar</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Deskripsi <span className="required">*</span>
        </label>
        <textarea
          name="deskripsi"
          placeholder="Tuliskan deskripsi singkat mengenai surat yang diminta..."
          value={form.deskripsi}
          onChange={handleChange}
          className={errors.deskripsi ? "error-input" : ""}
        />
      </div>

      <button type="submit" className="btn-primary">
        Kirim Pengajuan
      </button>
    </form>
  );
};

export default RequestForm;