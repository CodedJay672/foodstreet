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
import { SignIn, SignUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const authFormSchema = authSchema(type);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
  });

  async function onSubmit(values: z.infer<typeof authFormSchema>) {
    try {
      if (type === "SIGN_IN") {
        const response = await SignIn(values);

        if (!response) {
          toast.error("Error", {
            description: "Signin failed.",
          });

          return false;
        }

        toast.success("Signed in Successful!");
      } else {
        const response = await SignUp({
          ...values,
          fullname: values.fullname || "",
        });

        if (!response) {
          toast.error("Error", {
            description: "Signup failed.",
          });

          return false;
        }

        toast.success("Signed Up Successful!");
      }
    } catch (error: any) {
      toast.error("Error", {
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        {type === "SIGN_UP" && (
          <CustomInput
            name="fullname"
            label="Full Name"
            control={form.control}
          />
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
