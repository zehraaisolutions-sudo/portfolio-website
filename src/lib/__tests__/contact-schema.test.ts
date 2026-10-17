import { describe, it, expect } from 'bun:test';
import { contactSchema } from '../contact-schema';
const valid = { name: 'Test Visitor', email: 'visitor@example.com', message: 'A real website inquiry.', startedAt: Date.now() };
describe('Contact validation', () => {
 it('accepts a complete inquiry', () => expect(contactSchema.safeParse(valid).success).toBe(true));
 it('rejects a missing name', () => expect(contactSchema.safeParse({ ...valid, name: '' }).success).toBe(false));
 it('rejects invalid email', () => expect(contactSchema.safeParse({ ...valid, email: 'invalid' }).success).toBe(false));
 it('rejects an empty message', () => expect(contactSchema.safeParse({ ...valid, message: '' }).success).toBe(false));
 it('rejects the spam trap', () => expect(contactSchema.safeParse({ ...valid, website: 'spam' }).success).toBe(false));
});
