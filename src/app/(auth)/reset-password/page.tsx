import PasswordRecoveryForm from "@/components/PasswordRecoveryForm";
import Back from "@/components/shared/Back";
import React from "react";

const RecsetPassword = () => {
  return (
    <section className="w-full h-screen flex-center">
      <div className="w-full p-4 lg:p-10 bg-light rounded-lg space-y-6">
        <h1 className="text-base lg:text-xl font-bold">Reset Password</h1>

        <div className="w-full">
          <PasswordRecoveryForm />
        </div>

        <p className="text-sm font-thin text-center text-gray-400">
          Enter your email address and we will send you a link.
        </p>
      </div>
    </section>
  );
};

export default RecsetPassword;
