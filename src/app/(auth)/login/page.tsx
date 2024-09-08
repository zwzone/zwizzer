"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import { Form, FormControl, FormField } from "@components/ui/form";
import { FormError } from "@/src/components/form-error";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <>
      <div className="p-4">
        <Image className="size-8 sm:size-96" src={Logo} alt="Logo" />
      </div>
      <div className="flex max-w-xs grow flex-col items-stretch justify-center gap-16 px-4">
        <h1 className="text-2xl font-bold">Sign in to Zwizzer</h1>
        <div className="flex flex-col gap-4">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            <FcGoogle className="mr-2" /> Sign in with Google
          </Button>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
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
                    <Input {...field} type="email" placeholder="Email" />
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" />
                  </FormControl>
                )}
              />
              <FormError message="Invalid email or password" />
              <Button
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
