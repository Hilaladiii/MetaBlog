import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import Input from "../elements/Input";

interface InputFormProps<TInput extends FieldValues> {
  name: Path<TInput>;
  register: UseFormRegister<TInput>;
  error: FieldError | undefined;
  label: string;
  type: "text" | "number" | "email" | "password" | "file";
  placeholder: string;
  size?: "default" | "small" | "large" | "full";
  variant?: "primary" | "secondary";
}

export default function InputForm<TInput extends FieldValues>({
  name,
  label,
  type,
  size,
  placeholder,
  variant = "primary",
  register,
  error,
}: InputFormProps<TInput>) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <Input
        variant={variant}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: "This field is required" })}
        size={size}
        id={name}
      />
      {error && <span className="text-sm text-red-400">{error.message}</span>}
    </div>
  );
}
