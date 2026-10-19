import { describe, it, expect } from 'vitest';
import { retryAfter } from '../../src/url/retryAfter.js';
describe('retryAfter', () => { it('handles key behavior and boundary cases', async () => { expect(retryAfter('2')).toBe(2000);expect(retryAfter('invalid')).toBeNull();expect(retryAfter('Wed, 21 Oct 2015 07:28:00 GMT',{now:Date.parse('Wed, 21 Oct 2015 07:27:59 GMT')})).toBe(1000); }); });
