"use client";
import Button from "@/common/components/elements/Button";
import InputForm from "@/common/components/fragments/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

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

  const [message, setMessage] = useState<string>("");
  const { data: session, status } = useSession();

  const onSubmit = async (data: SignInType) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.status === 401) {
        setMessage("Email or password incorrect");
      } else if (res?.ok) {
      }
    } catch (error) {
      setMessage("An error occurred during sign in");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role === "writer") {
        router.push("/writer/post");
      } else if (session?.user?.role === "reader") {
        router.push("/");
      }
    }
  }, [session, status, router]);

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
      <p className="mt-5 text-center text-charcoal">
        Dont have an account?{" "}
        <Link
          className="text-black underline duration-300 hover:font-medium"
          href={"/auth/sign-up"}
        >
          Sign-up
        </Link>
      </p>
    </div>
  );
}
