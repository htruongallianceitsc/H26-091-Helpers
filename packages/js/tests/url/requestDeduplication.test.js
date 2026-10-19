import { describe, it, expect } from 'vitest';
import { requestDeduplication } from '../../src/url/requestDeduplication.js';
describe('requestDeduplication', () => { it('handles key behavior and boundary cases', async () => { const d=requestDeduplication();let n=0;const a=d.run('x',async()=>{n++;return 1});const b=d.run('x',()=>2);expect(a).toBe(b);expect(await b).toBe(1);expect(n).toBe(1);expect(d.size).toBe(0); }); });
