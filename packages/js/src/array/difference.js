/** Lấy phần tử mảng trái không nằm trong mảng phải. */
export function difference(left,right){if(!Array.isArray(left)||!Array.isArray(right))throw new TypeError('Cần hai mảng');const other=new Set(right);return [...new Set(left.filter(x=>!other.has(x)))];}
