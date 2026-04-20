"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  authRegistration,
  AuthSchema,
  formSchema,
} from "../api/auth-registration";
import { useMutation } from "@tanstack/react-query";

export const RegistrationForm = () => {
  const form = useForm<AuthSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      // TODO: NEED REMOVE ROLES
      role: "USER",
    },
  });

  // TODO: check this!
  const mutation = useMutation({
    mutationFn: authRegistration,
  });

  function onSubmit(values: AuthSchema) {
    mutation.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter password"
                  type="password"
                  {...field}
                ></Input>
              </FormControl>
            </FormItem>
          )}
        />

        <Button variant="secondary" type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
};
