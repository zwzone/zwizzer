import React from "react";
import logo from "@public/logo.svg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@components/ui/button";

export default function LoginPage() {
  return (
    <>
      <div className="self-start p-4 lg:self-center lg:px-40">
        <Image alt="logo" src={logo} className="size-10 lg:size-96" />
      </div>
      <div className="grow p-4 lg:max-w-lg">
        <h1 className="my-7 w-min text-4xl font-bold leading-[3.5rem] lg:w-fit lg:text-6xl">
          Happening now
        </h1>
        <div className="">
          <h3 className="py-4 text-2xl">Join today.</h3>
          <div className="flex flex-col items-stretch gap-2">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              <FcGoogle className="mr-2 size-6" />
              Sign up with Google
            </Button>
            <Button className="rounded-full bg-foreground text-center text-background hover:bg-foreground/90">
              <FaSquareXTwitter className="mr-2 size-6" />
              Sign up with X
            </Button>
          </div>
          <div className="relative m-1 flex flex-col items-stretch justify-center">
            <p className="self-center bg-background px-2">or</p>
            <div className="absolute left-0 top-1/2 -z-10 w-full border border-muted"></div>
          </div>
          <div className="flex flex-col items-stretch pb-2">
            <Button className="rounded-full font-bold">Create account</Button>
          </div>
          <div className="pb-7 text-xs">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </div>
          <div className="decoration-slice py-3 text-lg">
            Already have an account?
          </div>
          <div className="flex flex-col items-stretch justify-center">
            <Button className="rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
