"use client";
import Button from "@/common/components/elements/Button";
import InputForm from "@/common/components/fragments/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMessage } from "@/common/hooks/useMessage";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string(),
});

type SignInType = z.infer<typeof schema>;

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInType>({ resolver: zodResolver(schema) });

  const { message, updateMessage } = useMessage();

  const onSubmit = async (data: SignInType) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.status === 401) {
        updateMessage("Email or password incorrect");
      } else if (res?.ok) {
        router.push("/");
      }
    } catch (error) {
      updateMessage("An error occurred during sign in");
    }
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
        {message && (
          <div className="text-center text-xs text-red-500">{message}</div>
        )}
        <Button
          variant="black"
          type="submit"
          size="full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}
