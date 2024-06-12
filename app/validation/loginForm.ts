import { z } from "zod";

export const loginFormInputsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required and must be at least 8 characters long",
  }),
});
