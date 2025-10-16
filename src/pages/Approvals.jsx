import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import RequestCard from "../components/RequestCard";
import { loadRequests, saveRequests } from "../components/utils/storage";
import Swal from "sweetalert2";

export default function Approvals() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(loadRequests());
  }, []);

  function setStatus(id, status) {
    const next = items.map((i) => (i.id === id ? { ...i, status } : i));
    setItems(next);
    saveRequests(next);
    Swal.fire({
      icon: status === "Disetujui" ? "success" : "error",
      title: status,
      text: `Status pengajuan diubah menjadi ${status}`,
      confirmButtonText: "OK",
    });
  }

  const pendingItems = items.filter((i) => i.status === "Pending");

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <h1>Persetujuan Pengajuan Surat</h1>
      </div>

      {pendingItems.length === 0 ? (
        <div className="empty-state">
          <p>Tidak ada pengajuan Pending saat ini ✅</p>
        </div>
      ) : (
        <div className="request-list approval-list">
          {pendingItems.map((i) => (
            <div key={i.id} className="request-item-card approval-card">
              <RequestCard
                request={i}
                onApprove={() => setStatus(i.id, "Disetujui")}
                onReject={() => setStatus(i.id, "Ditolak")}
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
