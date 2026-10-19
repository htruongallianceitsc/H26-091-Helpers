/** Decode chuỗi hex (độ dài chẵn) sang Uint8Array. */
export function hexToBytes(hex) {
  if (typeof hex !== 'string' || hex.length % 2 !== 0 || !/^[a-fA-F0-9]*$/.test(hex)) throw new TypeError('Hex không hợp lệ');
  return Uint8Array.from(hex.match(/../g) ?? [], item => Number.parseInt(item, 16));
}
