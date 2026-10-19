/** Băm SHA-256 UTF-8 bằng Web Crypto. Không dùng để hash mật khẩu. */
export async function hashSha256(input) {
  if (typeof input !== 'string') throw new TypeError('input phải là string');
  if (!globalThis.crypto?.subtle) throw new Error('Web Crypto SubtleCrypto không khả dụng');
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return [...new Uint8Array(bytes)].map(b => b.toString(16).padStart(2, '0')).join('');
}
