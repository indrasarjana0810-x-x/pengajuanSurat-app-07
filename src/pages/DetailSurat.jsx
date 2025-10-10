import { useParams } from "react-router-dom";

function DetailSurat() {
  const { id } = useParams();

  // Data dummy sementara
  const surat = {
    id,
    nama: "Indra Sarjana",
    npm: "123456",
    jenis: "Surat Izin",
    alasan: "Sakit dan tidak dapat mengikuti perkuliahan.",
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Detail Surat Pengajuan</h2>
      <p>
        <strong>Nama:</strong> {surat.nama}
      </p>
      <p>
        <strong>NPM:</strong> {surat.npm}
      </p>
      <p>
        <strong>Jenis Surat:</strong> {surat.jenis}
      </p>
      <p>
        <strong>Alasan:</strong> {surat.alasan}
      </p>
    </div>
  );
}

export default DetailSurat;
