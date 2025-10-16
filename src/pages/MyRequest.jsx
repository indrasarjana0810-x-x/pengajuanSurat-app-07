import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import RequestCard from "../components/RequestCard";
import { loadRequests, saveRequests } from "../components/utils/storage";
import Swal from "sweetalert2";

export default function MyRequests() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadRequests());
  }, []);

  function handleDelete(id) {
    Swal.fire({
      title: "Yakin mau hapus?",
      text: "Data akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const next = items.filter((i) => i.id !== id);
        setItems(next);
        saveRequests(next);
        Swal.fire("Dihapus!", "Pengajuan berhasil dihapus.", "success");
      }
    });
  }

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <h1>Riwayat Pengajuan Surat</h1>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <p>Belum ada pengajuan surat yang dibuat.</p>
        </div>
      ) : (
        <div className="request-list">
          {items.map((i) => (
            <div key={i.id} className="request-item-card">
              <RequestCard request={i} />
              <button className="btn-delete" onClick={() => handleDelete(i.id)}>
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
