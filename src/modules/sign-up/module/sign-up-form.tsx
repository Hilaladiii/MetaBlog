"use client";
import Button from "@/common/components/elements/Button";
import InputForm from "@/common/components/fragments/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMessage } from "@/common/hooks/useMessage";
import { userSchema } from "@/common/types/user";
import { UserType } from "@/common/types/user";
import { signUp } from "@/services/user";

export default function SignUpForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({ resolver: zodResolver(userSchema) });

  const { message, updateMessage } = useMessage();

  const onSubmit = async (data: UserType) => {
    try {
      const res = await signUp(data);

      if (res.status == 201) {
        updateMessage(res.message);
        router.push("/auth/sign-in");
      } else {
        updateMessage(res.message || "Sign up failed");
      }
    } catch (error) {
      updateMessage(
        (error as Error).message || "An error occurred during sign up",
      );
    }
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label="Username"
          register={register}
          error={errors.username}
          type="text"
          placeholder="jhondoe"
          name="username"
          size="full"
        />
        <InputForm
          label="Email"
          register={register}
          error={errors.email}
          type="email"
          placeholder="johnDoe@gmail.com"
          name="email"
          size="full"
        />
        <InputForm
          label="Password"
          register={register}
          error={errors.password}
          type="password"
          placeholder="********"
          name="password"
          size="full"
        />
        <div className="flex flex-col">
          <label htmlFor="role">Choose your role</label>
          <select
            {...register("role")}
            id="role"
            className="mt-1 block w-full rounded-md border border-gray-300 p-1"
          >
            <option value="reader">Reader</option>
            <option value="writer">Writer</option>
          </select>
          {errors.role && (
            <span className="text-xs text-red-500">{errors.role.message}</span>
          )}
        </div>
        {message && (
          <div className="text-center text-xs text-red-500">{message}</div>
        )}
        <Button
          variant="black"
          type="submit"
          size="full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
