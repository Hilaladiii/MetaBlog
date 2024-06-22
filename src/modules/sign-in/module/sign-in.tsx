import Image from "next/image";
import SignInForm from "./sign-in-form";

export default function SignIn() {
  return (
    <div className="max-w-md rounded-md border-[1px] border-cloud p-5">
      <Image src="/meta-blog.svg" alt="logo" width={100} height={50} />
      <h1 className="mb-1 mt-3 text-xl">Sign-in</h1>
      <p className="mb-5 text-sm text-charcoal">Enter your details below</p>
      <SignInForm />
    </div>
  );
}
