"use client";

import React, { use } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import CustomInput from "./CustomInput";
import { authSchema } from "@/validation/schema";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import {
  getCurrentUser,
  SignIn,
  SignUp,
  verifyUserEmail,
} from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

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
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-lg mb-1 font-medium ">
                    Fullname
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter fullname"
                      className="w-full h-10 bg-gray-50 p-2 text-base placeholder:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base lg:text-lg mb-1 font-medium ">
                    Occupation
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter fullname"
                      className="w-full h-10 bg-gray-50 p-2 text-base placeholder:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  placeholder="Enter a valid email address"
                  className="w-full h-10 bg-gray-50 p-2 text-base placeholder:text-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base lg:text-lg mb-1 font-medium ">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className="w-full h-10 bg-gray-50 p-2 text-base placeholder:text-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full text-white rounded-full mt-3 cursor-pointer flex-center"
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
            className="text-primary font-bold"
          >
            {type === "SIGN_IN" ? "create account" : "login"}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
