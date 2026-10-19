/** Kiểm tra cấu trúc mã số thuế Việt Nam 10 hoặc 13 chữ số và checksum */
export function isTaxCode(value) {
  if (typeof value !== 'string' || !/^\d{10}(?:-?\d{3})?$/.test(value)) return false;
  const d = value.slice(0,10).split('').map(Number);
  const weights = [31,29,23,19,17,13,7,5,3];
  const check = 11 - (d.slice(0,9).reduce((sum,n,i) => sum+n*weights[i],0) % 11);
  return check < 10 && d[9] === check;
}
