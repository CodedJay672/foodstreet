import PasswordRecoveryForm from "@/components/PasswordRecoveryForm";
import Back from "@/components/shared/Back";
import React from "react";

const RecsetPassword = () => {
  return (
    <section className="absolute inset-0 w-full h-screen flex-center bg-black/75 z-90">
      <div className="w-full lg:w-1/2 p-4 lg:p-10 bg-light rounded-lg space-y-6">
        <div className="w-full flex-between">
          <h1 className="text-base lg:text-xl font-bold">Reset Password</h1>
          <div className="w-16 p-1">
            <Back />
          </div>
        </div>

        <div className="w-full">
          <PasswordRecoveryForm />
        </div>

        <p className="text-base font-thin text-center text-gray-500">
          Enter your email address and we will send you a link to reset your
        </p>
      </div>
    </section>
  );
};

export default RecsetPassword;
