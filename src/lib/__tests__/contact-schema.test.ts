import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import { contactSchema } from '../contact-schema';
const valid = { name: 'Test Visitor', email: 'visitor@example.com', message: 'A real website inquiry.', startedAt: Date.now() };
describe('Contact validation', () => {
 it('accepts a complete inquiry', () => assert.equal(contactSchema.safeParse(valid).success, true));
 it('rejects a missing name', () => assert.equal(contactSchema.safeParse({ ...valid, name: '' }).success, false));
 it('rejects invalid email', () => assert.equal(contactSchema.safeParse({ ...valid, email: 'invalid' }).success, false));
 it('rejects an empty message', () => assert.equal(contactSchema.safeParse({ ...valid, message: '' }).success, false));
 it('rejects the spam trap', () => assert.equal(contactSchema.safeParse({ ...valid, website: 'spam' }).success, false));
});
