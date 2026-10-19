import { describe, it, expect } from 'vitest';
import { rateLimiter } from '../../src/url/rateLimiter.js';
describe('rateLimiter', () => { it('handles key behavior and boundary cases', async () => { let t=0;const l=rateLimiter({limit:1,intervalMs:50,now:()=>t});expect(l.check('a').allowed).toBe(true);expect(l.check('a').retryAfterMs).toBe(50);t=50;expect(l.check('a').allowed).toBe(true); }); });
