import { asDate } from './_internal.js';
/** Định dạng ở IANA timezone bằng Intl. Không suy diễn timezone từ string thiếu offset. */
export function formatInTimeZone(input,timeZone,locale='vi-VN',options={ dateStyle:'medium',timeStyle:'short' }) {
 if(typeof timeZone!=='string'||!timeZone)throw new RangeError('timeZone là bắt buộc');
 return new Intl.DateTimeFormat(locale,{...options,timeZone}).format(asDate(input));
}
