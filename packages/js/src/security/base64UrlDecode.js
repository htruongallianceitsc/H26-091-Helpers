/** Decode Base64URL strict thành Unicode UTF-8; reject dữ liệu không hợp lệ. */
export function base64UrlDecode(value) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9_-]*$/.test(value) || value.length % 4 === 1) throw new TypeError('Base64URL không hợp lệ');
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  let bytes;
  if (typeof Buffer !== 'undefined') bytes = new Uint8Array(Buffer.from(base64, 'base64'));
  else {
    if (typeof atob !== 'function') throw new Error('Base64 API không khả dụng');
    bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
  }
  const decoded = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  // Chặn encoding dư bit / non-canonical.
  const normalized = typeof Buffer !== 'undefined' ? Buffer.from(bytes).toString('base64url') : (() => { let s = ''; for (const b of bytes) s += String.fromCharCode(b); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, ''); })();
  if (normalized !== value) throw new TypeError('Base64URL không canonical');
  return decoded;
}
