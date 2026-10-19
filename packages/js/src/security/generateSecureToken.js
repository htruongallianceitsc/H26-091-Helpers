/** Token hex dùng crypto.getRandomValues; không fallback Math.random. */
export function generateSecureToken(byteLength = 32) {
  if (!Number.isSafeInteger(byteLength) || byteLength < 1 || byteLength > 65536) throw new RangeError('byteLength phải nằm trong 1..65536');
  if (!globalThis.crypto?.getRandomValues) throw new Error('Secure random không khả dụng');
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
}
