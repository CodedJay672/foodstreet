import AuthForm from "@/components/shared/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const user = await getLoggedInUser();

  if (user) redirect("/");

  return (
    <section className="w-full flex-center flex-col gap-4 p-10">
      <div className="w-full flex-center flex-col gap-2">
        <h1 className="text-xl lg:text-2xl font-bold text-raw-300 text-center">
          Sign In
        </h1>
        <p className="text-base font-normal text-center">Enter details below</p>
      </div>

      <div className="w-full max-w-sm flex-center mt-10">
        <AuthForm type="SIGN_IN" />
      </div>
    </section>
  );
};

export default SignIn;
