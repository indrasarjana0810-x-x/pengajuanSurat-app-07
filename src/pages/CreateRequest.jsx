import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import RequestForm from "../components/RequestForm";
import { loadRequests, saveRequests } from "../components/utils/storage";
import Swal from "sweetalert2";

export default function CreateRequest() {
  function handleSubmit(data) {
    const items = loadRequests();
    const newItem = {
      ...data,
      id: Date.now().toString(),
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    items.unshift(newItem);
    saveRequests(items);
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Pengajuan surat berhasil dikirim.",
      confirmButtonText: "OK",
    });
  }

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <h1>Buat Pengajuan Surat</h1>
      </div>

      <div className="form-page-container">
        <RequestForm onSubmit={handleSubmit} />
      </div>
    </motion.div>
  );
}
