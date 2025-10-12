export const STORAGE_KEY = 'pengajuan_surat_data_v1'

export function loadRequests() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveRequests(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}