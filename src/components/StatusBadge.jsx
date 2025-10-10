const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch(status.toLowerCase()) {
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      default: return 'status-pending';
    }
  };
  
  return <span className={`status-badge ${getStatusClass()}`}>{status}</span>;
};