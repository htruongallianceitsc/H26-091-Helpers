/** Encode chuỗi Unicode UTF-8 thành Base64URL (RFC 4648). */
export function base64UrlEncode(text) {
  if (typeof text !== 'string') throw new TypeError('text phải là string');
  const bytes = new TextEncoder().encode(text);
  if (typeof Buffer !== 'undefined') return Buffer.from(bytes).toString('base64url');
  if (typeof btoa !== 'function') throw new Error('Base64 API không khả dụng');
  let binary = ''; for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
