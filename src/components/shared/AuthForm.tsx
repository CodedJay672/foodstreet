"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import CustomInput from "./CustomInput";
import { authSchema } from "@/validation/schema";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import { SignIn, SignUp, verifyUserEmail } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const authFormSchema = authSchema(type);
  const router = useRouter();

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
  });

  async function onSubmit(values: z.infer<typeof authFormSchema>) {
    try {
      if (type === "SIGN_IN") {
        const response = await SignIn(values);

        if (!response) {
          return toast.error("SignIn failed");
        }

        toast.success("Signed in successfully!");

        //redirect to home on signin
        router.push("/");
      } else {
        const response = await SignUp({
          ...values,
          name: values.fullname || "",
          occupation: values.occupation || "",
          dob: new Date(values.dob!),
        });

        if (!response) {
          toast.error("Sign up failed");
          return false;
        }

        toast.success("Signed Up Successful!");

        // verify user email
        await verifyUserEmail();

        //redirect to email sent page
        router.push("/verify");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {type === "SIGN_UP" && (
          <>
            <CustomInput
              name="fullname"
              label="Full Name"
              control={form.control}
            />

            <CustomInput
              name="occupation"
              label="Occupation"
              control={form.control}
            />

            <CustomInput
              name="dob"
              label="Date of birth"
              control={form.control}
              placeholder="yyyy-mm-dd"
            />
          </>
        )}

        <CustomInput name="email" label="Email" control={form.control} />
        <CustomInput name="password" label="Password" control={form.control} />

        <Button
          type="submit"
          className="w-full bg-raw-300 text-white rounded-full mt-3 cursor-pointer flex-center"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <FaSpinner size={24} className="animate-spin" />
          )}
          {type === "SIGN_IN" ? "Sign in" : "Register"}
        </Button>
        <div className="flex-center gap-2">
          <p className="text-center">
            {type === "SIGN_IN"
              ? "Don't have an account? "
              : "Already registered? "}
          </p>
          <Link
            href={type === "SIGN_IN" ? "/sign-up" : "/sign-in"}
            className="text-raw-300 font-bold"
          >
            {type === "SIGN_IN" ? "create account" : "login"}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
