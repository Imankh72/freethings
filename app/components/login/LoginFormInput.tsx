import { FieldError, UseFormRegister } from "react-hook-form";

interface LoginFormInputInterface {
  type: "email" | "password";
  placeholder: string;
  name: "email" | "password";
  register: UseFormRegister<{ email?: string; password?: string }>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
}

const LoginFormInput = ({
  type,
  name,
  placeholder,
  register,
  error,
  valueAsNumber,
}: LoginFormInputInterface) => {
  return (
    <div className="w-full">
      <input
        className="login__input"
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        autoComplete="on"
      />
      {error && <p className="login__input--error">{error.message}</p>}
    </div>
  );
};

export default LoginFormInput;
