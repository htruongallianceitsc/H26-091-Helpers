/** Lấy tập giao, giữ thứ tự của mảng trái. */
export function intersection(left,right){if(!Array.isArray(left)||!Array.isArray(right))throw new TypeError('Cần hai mảng');const other=new Set(right);return [...new Set(left.filter(x=>other.has(x)))];}
