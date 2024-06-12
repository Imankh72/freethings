import { z } from "zod";
import { loginFormInputsSchema } from "../validation/loginForm";

export type LoginFormInputsInterface = z.infer<typeof loginFormInputsSchema>;
