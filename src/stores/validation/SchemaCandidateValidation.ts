import { z } from 'zod';

export const candidateSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  vacancyId: z.string().min(1),
  statusId: z.string().min(1),
  email: z.string().min(6, { message: 'Email must be at least 6 characters' }).email({ message: 'Invalid email address' }),
  phone: z.union([z.string(), z.number()]).optional(),
  linkedinURL: z
    .string()
    .optional()
    .refine((url) => !url || url.includes('https://www.linkedin.com/in/'), { message: 'LinkedIn URL must include https://www.linkedin.com/in/' }),
  desiredSalary: z.union([z.string(), z.number()]).optional(),
  startWorkDate: z.string().optional(),
  web: z.string().optional(),
  location: z.string().optional(),
});
