import { describe, it, expect } from 'vitest';
import { cursorPagination } from '../../src/url/cursorPagination.js';
describe('cursorPagination', () => { it('handles key behavior and boundary cases', async () => { const out=await cursorPagination(async cursor=>cursor===null?{items:[1],nextCursor:'a'}:{items:[2],nextCursor:null});expect(out.items).toEqual([1,2]);expect(out.complete).toBe(true);await expect(cursorPagination(async()=>({items:[],nextCursor:'x'}))).rejects.toThrow('Repeated'); }); });
