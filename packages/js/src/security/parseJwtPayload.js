import { base64UrlDecode } from './base64UrlDecode.js';
/** Chỉ đọc payload JWT, không xác thực token, signature, exp, iss, aud. */
export function parseJwtPayload(token) {
  if (typeof token !== 'string') throw new TypeError('token phải là string');
  const parts = token.split('.');
  if (parts.length !== 3 || !parts.every(Boolean)) throw new TypeError('JWT phải gồm 3 phần');
  let payload;
  try { payload = JSON.parse(base64UrlDecode(parts[1])); } catch { throw new TypeError('JWT payload JSON không hợp lệ'); }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new TypeError('JWT payload phải là object');
  return payload;
}
