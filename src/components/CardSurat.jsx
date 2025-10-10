import { Link } from "react-router-dom";

function CardSurat({ surat }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{surat.jenis}</h3>
      <p className="text-gray-600">Nama: {surat.nama}</p>
      <p className="text-gray-600">NPM: {surat.npm}</p>
      <Link to={`/detail/${surat.id}`} className="text-blue-600 hover:underline">
        Lihat Detail
      </Link>
    </div>
  );
}

export default CardSurat;