/** Biên dịch và kiểm tra tính hợp lệ cú pháp regex */
export function validatePattern(source, flags = '') {
  if (typeof source !== 'string' || typeof flags !== 'string') return { valid: false, error: 'Expected strings' };
  try { new RegExp(source,flags); return { valid: true, error: null }; }
  catch (error) { return { valid: false, error: error.message }; }
}
/** Chỉ xác minh cú pháp, không bảo đảm regex an toàn khỏi ReDoS. */
