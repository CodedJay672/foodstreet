"use client";

import React from "react";
import {
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z, ZodType } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authSchema } from "@/validation/schema";

const authFormSchema = authSchema("SIGN_UP");

interface Props<T extends ZodType<T>> {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder?: string;
}

const CustomInput = <T extends ZodType<T>>({
  name,
  control,
  label,
  placeholder,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={name === "password" ? "password" : "text"}
              {...field}
              placeholder={placeholder ?? placeholder}
              className="w-full h-10 bg-gray-50 p-2 text-base placeholder:text-gray-300"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
