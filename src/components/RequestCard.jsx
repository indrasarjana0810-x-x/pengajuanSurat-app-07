import React from 'react'

export default function RequestCard({ request, onApprove, onReject }) {
    
    const getStatusClass = (status) => {
        if (!status) return 'status-pending';
        return `status-${status.toLowerCase().replace(' ', '-')}`;
    };

    const isPending = request.status === 'Pending';
    
    return (
        <div> 
            <h3>{request.judul || 'Surat Tanpa Judul'}</h3> 

            <p><strong>Jenis:</strong> {request.jenis}</p>
            <p><strong>Deskripsi:</strong> {request.deskripsi}</p>
            
            <p>
                <strong>Status:</strong> 
                <span className={`status-badge ${getStatusClass(request.status)}`}>
                    {request.status}
                </span>
            </p>

            {onApprove && onReject && isPending && (
                <div className="approval-actions">
                    <button 
                        className="btn-approve" 
                        onClick={() => onApprove(request.id)}
                    >
                        Setuju
                    </button>
                    <button 
                        className="btn-reject" 
                        onClick={() => onReject(request.id)}
                    >
                        Tolak
                    </button>
                </div>
            )}
        </div>
    )
}
