import { Link } from "react-router-dom";

function CardSurat({ surat }) {
  return (
    <div className="stat-card">
      <h3 className="action-title">{surat.jenis}</h3>
      <p className="action-desc"><strong>Nama:</strong> {surat.nama}</p>
      <p className="action-desc"><strong>NPM:</strong> {surat.npm}</p>
      <Link to={`/detail/${surat.id}`} className="action-button">
        Lihat Detail
      </Link>
    </div>
  );
}

export default CardSurat;