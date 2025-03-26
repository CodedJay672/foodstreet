"use client";

import React from "react";
import { productSchema } from "@/validation/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { createProduct } from "@/lib/actions/product.actions";

const ProductForm = ({ user }: { user: string }) => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    try {
      const data = {
        ...values,
        shop: user,
      };

      // const response = await createProduct(data);
    } catch (error: any) {
      toast.error(error.message as string);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="w-full bg-gray-50 p-2 text-base placeholder:text-gray-300 border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="measure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Measure (e.g 1 kilo)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="w-full bg-gray-50 p-2 text-base placeholder:text-gray-300 border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="initPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Initial price</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="w-full bg-gray-50 p-2 text-base placeholder:text-gray-300 border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="discPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount price</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="w-full bg-gray-50 p-2 text-base placeholder:text-gray-300 border-gray-300"
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-40 resize-none border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-raw-300 text-white p-2 rounded-full cursor-pointer"
        >
          Upload
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
