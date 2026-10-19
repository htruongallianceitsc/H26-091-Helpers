import { asDate, finiteNumber } from './_internal.js';
/** Cộng ngày lịch local (không cộng cứng 24h, an toàn qua DST). @param {Date|string|number} input @param {number} days @returns {Date} */
export function addDays(input, days) { finiteNumber(days,'days'); if (!Number.isInteger(days)) throw new RangeError('days phải là số nguyên'); const d=asDate(input); d.setDate(d.getDate()+days); return d; }
