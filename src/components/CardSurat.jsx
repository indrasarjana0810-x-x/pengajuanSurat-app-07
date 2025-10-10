const CardSurat = ({ title, description, onClick, status }) => {
  return (
    <div className="surat-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      {status && <StatusBadge status={status} />}
    </div>
  );
};