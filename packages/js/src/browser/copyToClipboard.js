/**
 * Sao chép text bằng Clipboard API.
 * @param {string} text
 * @returns {Promise<void>}
 */
export async function copyToClipboard(text) {
  const clipboard = globalThis.navigator?.clipboard;
  if (!clipboard?.writeText) throw new Error('Clipboard API không khả dụng');
  await clipboard.writeText(String(text));
}
