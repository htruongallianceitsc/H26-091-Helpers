import { afterEach, describe, expect, it, vi } from 'vitest';
import { copyToClipboard } from '../../src/browser/copyToClipboard.js';

const originalNavigator = globalThis.navigator;
afterEach(() => {
  Object.defineProperty(globalThis, 'navigator', { value: originalNavigator, configurable: true });
});

describe('copyToClipboard', () => {
  it('gọi Clipboard API', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(globalThis, 'navigator', { value: { clipboard: { writeText } }, configurable: true });
    await copyToClipboard('hello');
    expect(writeText).toHaveBeenCalledWith('hello');
  });
  it('throw khi API không khả dụng', async () => {
    Object.defineProperty(globalThis, 'navigator', { value: {}, configurable: true });
    await expect(copyToClipboard('hello')).rejects.toThrow('Clipboard API');
  });
});
