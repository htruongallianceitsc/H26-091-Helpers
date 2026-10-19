import { addMonths } from './addMonths.js';
import { finiteNumber } from './_internal.js';
/** Cộng năm; 29/02 được clamp về 28/02 khi năm đích không nhuận. */
export function addYears(input,years) { finiteNumber(years,'years'); if(!Number.isInteger(years))throw new RangeError('years phải là số nguyên'); return addMonths(input,years*12); }
