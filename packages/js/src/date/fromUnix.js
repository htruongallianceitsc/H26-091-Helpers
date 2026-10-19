import { finiteNumber } from './_internal.js';
/** Parse Unix timestamp; unit phải được chỉ rõ khi dùng milliseconds. */
export function fromUnix(timestamp,unit='seconds') { finiteNumber(timestamp,'timestamp'); if(!['seconds','milliseconds'].includes(unit)) throw new RangeError('unit không hợp lệ'); const d=new Date(unit==='seconds'?timestamp*1000:timestamp); if(!Number.isFinite(d.getTime()))throw new RangeError('timestamp vượt giới hạn Date'); return d; }
