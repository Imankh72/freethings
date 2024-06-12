import { z } from "zod";

export const profileSettingsInputsSchema = z
  .object({
    email: z.string().email(),
    codeCountryNumber: z.number().max(3),
    phoneNumber: z.number().min(7),
    currentPassword: z.string().min(1, {
      message: "Password is required and must be at least 8 characters long",
    }),
    newPassword: z.string().min(1, {
      message: "Password is required and must be at least 8 characters long",
    }),
    confirmNewPassword: z.string().min(1, {
      message: "Password is required and must be at least 8 characters long",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });
