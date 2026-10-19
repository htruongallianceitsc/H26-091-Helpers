/** HMAC-SHA256, trả hex; secret phải được bảo vệ phía server. */
export async function hmacSha256(message, secret) {
  if (typeof message !== 'string' || typeof secret !== 'string') throw new TypeError('message và secret phải là string');
  if (!globalThis.crypto?.subtle) throw new Error('Web Crypto SubtleCrypto không khả dụng');
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const result = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return [...new Uint8Array(result)].map(b => b.toString(16).padStart(2, '0')).join('');
}
