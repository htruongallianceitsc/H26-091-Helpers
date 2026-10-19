import { describe, it, expect } from 'vitest';
import { AppError } from '../../src/error/appError.js';
describe('appError', () => { it('được export', () => expect(AppError).toBeDefined()); });
