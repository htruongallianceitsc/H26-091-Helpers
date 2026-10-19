import { removeAccents } from './removeAccents.js';

/**
 * Chuyển chuỗi thành slug thân thiện URL, hỗ trợ tiếng Việt.
 * @param {string} text
 * @param {string} [separator='-']
 * @returns {string}
 * @example slugify('Xin chào Việt Nam!') // 'xin-chao-viet-nam'
 */
export function slugify(text, separator = '-') {
  if (!text) return '';
  if (!separator) throw new TypeError('separator không được rỗng');

  return removeAccents(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s_-]/g, '')
    .replace(/[\s_-]+/g, separator)
    .replace(new RegExp(`^${escapeRegExp(separator)}+|${escapeRegExp(separator)}+$`, 'g'), '');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
