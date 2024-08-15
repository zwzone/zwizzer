import React from "react";
import logo from "@public/logo.svg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@components/ui/button";



export default function LoginPage() {
  return (
    <div className="flex flex-wrap gap-11 p-6">
      <Image alt="logo" src={logo} className="size-14"/>
      <div>
        <h1 className="text-4xl font-bold w-min leading-[3.5rem]">Happening now</h1>
        <div>
          <h3 className="text-2xl py-4">Join today.</h3>
          <div className="">
            <div className="flex flex-col gap-2 items-stretch">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
                <FcGoogle className="mr-2 size-6"/>
                Sign up with Google
              </Button>
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-center">
                <FaSquareXTwitter className="mr-2 size-6"/>
                Sign up with X
              </Button>
            </div>
            <div></div>
            <span>Or</span>
            <button>Create account</button>
            <div>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</div>
          </div>
          <div>Already have an account?</div>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
}
