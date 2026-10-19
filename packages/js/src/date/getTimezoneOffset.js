import { asDate } from './_internal.js';
/** Offset phút phía đông UTC, đảo dấu so với Date.getTimezoneOffset(). */
export function getTimezoneOffset(input=new Date()) { return -asDate(input).getTimezoneOffset(); }
