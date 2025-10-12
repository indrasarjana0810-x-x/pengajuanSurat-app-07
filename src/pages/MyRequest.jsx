import React, { useEffect, useState } from "react";
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
      text: "Data pengajuan ini akan dihapus secara permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#007bff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      customClass: {
        popup: "swal-custom-popup",
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button" // Tambahkan custom class untuk tombol Batal
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const next = items.filter((i) => i.id !== id);
        setItems(next);
        saveRequests(next);

        Swal.fire({
          icon: "success",
          title: "Dihapus!",
          text: "Pengajuan surat telah berhasil dihapus.",
          confirmButtonColor: "#007bff",
          customClass: {
            popup: "swal-custom-popup",
          }
        });
      }
    });
  }

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Riwayat Pengajuan Surat</h1>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <p>Belum ada pengajuan surat yang dibuat. Silakan buat pengajuan baru!</p>
        </div>
      ) : (
        <div className="request-list"> {/* Ini akan menjadi Grid/Flex container */}
          {items.map((i) => (
            <div key={i.id} className="request-item-card"> {/* Ini adalah setiap kartu item */}
              <RequestCard request={i} />
              
              {/* Tombol hapus di-styling ulang */}
              <button
                className="btn-delete"
                onClick={() => handleDelete(i.id)}
                title="Hapus Pengajuan"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}