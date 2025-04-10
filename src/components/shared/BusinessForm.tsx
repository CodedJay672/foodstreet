"use client";

import { shopSchema } from "@/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createShop } from "@/lib/actions/shop.actions";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa6";

const BusinessForm = ({ creator }: { creator: string }) => {
  const router = useRouter();
  const param = useSearchParams();

  const referrer = param.get("ref");

  const form = useForm<z.infer<typeof shopSchema>>({
    resolver: zodResolver(shopSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      description: "",
      phone: "",
      occupation: "",
      "work-address": "",
      referrer: referrer ?? "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof shopSchema>) {
    try {
      //construct the data for the database
      const data = {
        ...values,
        creator,
      };

      const shop = await createShop(data);

      if (!shop) {
        return toast.error("Process failed. Retry");
      }

      toast.success("Shop created!!");
      router.push("/my-shop");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-10 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-thin text-gray-500">
                Business name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full h-10 text-base border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex items-center gap-1 lg:gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base font-thin text-gray-500">
                  Business email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full h-10 text-base border-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base font-thin text-gray-500">
                  Business location
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full h-10 text-base border-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex items-center gap-1 lg:gap-3">
          <FormField
            control={form.control}
            name="referrer"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base font-thin text-gray-500">
                  Referrer code
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full h-10 text-base border-gray-300"
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
              <FormItem className="w-full">
                <FormLabel className="text-base font-thin text-gray-500">
                  Occupation
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full h-10 text-base border-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-base font-thin text-gray-500">
                Business phone
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full h-10 text-base border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="work-address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-thin text-gray-500">
                Work address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full h-10 text-base border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-thin text-gray-500">
                Business description
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-44 resize-none border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-light text-base lg:text-lg font-medium w-full h-12 rounded-full bg-raw-primary hover:bg-raw-primary mt-6 cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <FaSpinner size={24} className="animate-spin" />
          )}
          Create
        </Button>
        <p className="text-xs italic text-center w-full -mt-5">
          By clicking <strong>Create</strong> you agree to our{" "}
          <span className="text-raw-300 underline">policies</span>
        </p>
      </form>
    </Form>
  );
};

export default BusinessForm;
