import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("MailInvalid"),
    password: z.string().min(6, "MinCharPassword"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "PasswordsNotMatch",
    path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;