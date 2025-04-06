import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("MailInvalid"),
    password: z.string().min(6, "MinCharPassword"),
});

export type LoginFormData = z.infer<typeof loginSchema>;