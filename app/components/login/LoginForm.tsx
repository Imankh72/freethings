"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginSignUpLineFormSeparator from "../LoginSignUpLineFormSeparator";
import LoginSignUpSocial from "../LoginSignUpSocial";
import { loginFormInputsSchema } from "@/app/validation/loginForm";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginFormInput from "./LoginFormInput";

type LoginFormInputsType = z.infer<typeof loginFormInputsSchema>;

const LoginForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormInputsType>({
    resolver: zodResolver(loginFormInputsSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputsType> = async (inputValues) => {
    try {
      const response = await axios.post("/api/login", {
        email: inputValues.email,
        password: inputValues.password,
        osType: "3",
        osVersion: "3",
        appVersion: "1",
        deviceId: (Math.random() + 1).toString(36).substring(7),
      });

      if (response.statusText === "OK") {
        router.push("/");
      }

      return response.data;
    } catch (error) {
      setError("root", {
        type: "validate",
        message: "Invalid email or password",
      });
    }
  };

  return (
    <div className="bg-white rounded-[40px] relative z-20 px-5 pt-[30px] pb-[22px] w-full lg:py-[50px] lg:px-10 lg:w-[506px]">
      <form
        className="flex flex-col items-center gap-y-[14px] mb-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LoginFormInput
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email}
        />
        <LoginFormInput
          type="password"
          name="password"
          placeholder="Password"
          register={register}
          error={errors.password}
        />
        {errors?.root && (
          <p className="login__input--error">{errors.root.message}</p>
        )}
        <button type="submit" className="login__btn" disabled={isSubmitting}>
          {isSubmitting ? "Logging..." : "Login"}
        </button>
      </form>
      <LoginSignUpLineFormSeparator />
      <LoginSignUpSocial />
    </div>
  );
};

export default LoginForm;
