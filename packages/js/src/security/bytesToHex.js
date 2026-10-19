/** Encode Uint8Array thành hex lowercase. */
export function bytesToHex(bytes) {
  if (!(bytes instanceof Uint8Array)) throw new TypeError('Yêu cầu Uint8Array');
  return [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
}
