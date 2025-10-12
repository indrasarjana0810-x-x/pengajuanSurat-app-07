import React from "react";
import RequestForm from "../components/RequestForm";
import { loadRequests, saveRequests } from "../components/utils/storage";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function CreateRequest() {
  function handleSubmit(data) {
    const items = loadRequests();

    // Membuat ID unik menggunakan timestamp
    const newItem = {
      ...data,
      id: Date.now().toString(),
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    items.unshift(newItem);
    saveRequests(items);

    // Menampilkan SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Pengajuan surat Anda berhasil dikirim dan sedang menunggu persetujuan.",
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "swal-confirm-button",
        popup: "swal-custom-popup",
      },
    });
  }

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Buat Pengajuan Surat</h1>
      </div>

      <div className="form-page-container">
        <RequestForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}