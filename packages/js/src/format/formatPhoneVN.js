/** Chuẩn hóa và hiển thị số di động Việt Nam theo nhóm */
export function formatPhoneVN(value, { international = false } = {}) {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  const raw = value.replace(/[ .()-]/g,'');
  const local = raw.startsWith('+84') ? '0' + raw.slice(3) : raw.startsWith('84') ? '0'+raw.slice(2) : raw;
  if (!/^0[35789]\d{8}$/.test(local)) throw new RangeError('Invalid VN mobile number');
  return international ? `+84 ${local.slice(1,4)} ${local.slice(4,7)} ${local.slice(7)}` : `${local.slice(0,4)} ${local.slice(4,7)} ${local.slice(7)}`;
}
