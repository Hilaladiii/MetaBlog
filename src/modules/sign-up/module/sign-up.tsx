import Image from "next/image";
import SignUpForm from "./sign-up-form";

export default function SignUp() {
  return (
    <div className="w-full max-w-md rounded-md border-[1px] border-cloud p-5">
      <Image src="/meta-blog.svg" alt="logo" width={100} height={50} />
      <h1 className="mb-1 mt-3 text-xl">Sign-up</h1>
      <p className="mb-5 text-sm text-charcoal">Enter your details below</p>
      <SignUpForm />
    </div>
  );
}
