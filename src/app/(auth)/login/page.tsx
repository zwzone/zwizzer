"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/src/schemas";
import { Form, FormControl, FormField } from "@components/ui/form";
import { FormSuccess } from "@components/form-success";
import { FormError } from "@components/form-error";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/src/actions/login";

export default function LoginPage() {
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      login(values).then((response) => {
        setSuccess(response.success);
        setError(response.error);
      });
    });
  };

  return (
    <>
      <div className="p-4">
        <Image className="size-8 sm:size-96" src={Logo} alt="Logo" />
      </div>
      <div className="flex max-w-xs grow flex-col items-stretch justify-center gap-16 px-4">
        <h1 className="text-2xl font-bold">Sign in to Zwizzer</h1>
        <div className="flex flex-col gap-4">
          <Button
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            disabled={isPending}
          >
            <FcGoogle className="mr-2" /> Sign in with Google
          </Button>
          <Button
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            disabled={isPending}
          >
            <FaSquareXTwitter className="mr-2" /> Sign in with X
          </Button>
          <div className="relative flex flex-col items-stretch justify-center">
            <p className="self-center bg-background px-2">or</p>
            <div className="absolute left-0 top-1/2 -z-10 w-full border border-muted"></div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="Email"
                    />
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="Password"
                    />
                  </FormControl>
                )}
              />
              <FormSuccess message={success} />
              <FormError message={error} />
              <Button
                disabled={isPending}
                type="submit"
                className="rounded-full bg-primary text-foreground"
              >
                Sign in
              </Button>
            </form>
          </Form>
        </div>
        <p className="text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link className="text-primary hover:underline" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
