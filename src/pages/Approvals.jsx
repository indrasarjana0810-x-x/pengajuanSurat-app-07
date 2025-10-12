import React, { useEffect, useState } from 'react'
import RequestCard from '../components/RequestCard'
import { loadRequests, saveRequests } from '../components/utils/storage'
import Swal from 'sweetalert2' 

export default function Approvals() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(loadRequests())
  }, [])

  function setStatus(id, status) {
    const next = items.map(i => i.id === id ? { ...i, status } : i)
    setItems(next)
    saveRequests(next)

    Swal.fire({
      icon: status === 'Disetujui' ? 'success' : 'error',
      title: status === 'Disetujui' ? 'Disetujui!' : 'Ditolak!',
      text: `Pengajuan berhasil diubah menjadi status: ${status}.`,
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'swal-confirm-button',
        popup: 'swal-custom-popup'
      }
    })
  }
  
  const pendingItems = items.filter(i => i.status === 'Pending');

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Halaman Persetujuan Surat</h1>
      </div>
      
      {pendingItems.length === 0 ? (
        <div className="empty-state">
          <p>Tidak ada pengajuan surat <strong>Pending</strong> yang perlu disetujui saat ini. ✅</p>
        </div>
      ) : (
        <div className="request-list approval-list">
          {pendingItems.map(i => (
            <div key={i.id} className="request-item-card approval-card">
              <RequestCard
                request={i}
                onApprove={() => setStatus(i.id, 'Disetujui')}
                onReject={() => setStatus(i.id, 'Ditolak')}
              />
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="processed-requests-section">
          <h2>Riwayat Diproses ({items.length - pendingItems.length} Pengajuan)</h2>
          <div className="request-list processed-list">
            {items.filter(i => i.status !== 'Pending').map(i => (
              <div key={i.id} className="request-item-card processed-card">
                 <RequestCard request={i} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}