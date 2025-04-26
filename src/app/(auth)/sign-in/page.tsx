import AuthForm from "@/components/shared/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const user = await getLoggedInUser();

  if (user) redirect("/");

  return (
    <section className="w-full flex-center flex-col gap-4">
      <Image src="/Logo.png" alt="foodstreet" width={120} height={60} />

      <div className="w-full flex-center flex-col gap-2">
        <h1 className="text-xl lg:text-2xl font-bold text-raw-300 text-center">
          Sign In
        </h1>
        <p className="text-base font-normal text-center">Enter details below</p>
      </div>

      <AuthForm type="SIGN_IN" />
    </section>
  );
};

export default SignIn;
