/** Chỉ tạo tên file hiển thị; không thay thế path validation hoặc sandbox filesystem. */
export function sanitizeFilename(filename, replacement = '_') {
  if (typeof filename !== 'string' || typeof replacement !== 'string' || !replacement || /[\\/\x00-\x1f\x7f]/.test(replacement)) throw new TypeError('Giá trị không hợp lệ');
  let value = filename.normalize('NFC').replace(/[\\/<>:"|?*\x00-\x1f\x7f]/g, replacement).replace(/[. ]+$/g, '').trim();
  if (!value || /^\.+$/.test(value)) return 'file';
  const base = value.split('.')[0];
  if (/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(base)) value = '_' + value;
  return value.slice(0, 240) || 'file';
}
