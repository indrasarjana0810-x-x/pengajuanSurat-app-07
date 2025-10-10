import CardSurat from "../components/CardSurat";

function DaftarSurat() {
  const daftarSurat = [
    { id: 1, nama: "Indra Sarjana", npm: "123456", jenis: "Surat Izin" },
    { id: 2, nama: "Putri Ayu", npm: "123457", jenis: "Surat Cuti" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Daftar Pengajuan Surat</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {daftarSurat.map((surat) => (
          <CardSurat key={surat.id} surat={surat} />
        ))}
      </div>
    </div>
  );
}

export default DaftarSurat;
