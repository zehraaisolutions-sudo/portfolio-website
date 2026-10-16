import { z } from 'zod';
export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(255),
  service: z.string().trim().max(150).default(''),
  message: z.string().trim().min(10, 'Please include at least 10 characters.').max(3000),
  website: z.string().max(0, 'Submission rejected.').default(''),
  startedAt: z.number().finite(),
});