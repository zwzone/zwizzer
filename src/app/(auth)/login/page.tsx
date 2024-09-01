import Image from "next/image";
import Logo from "@public/logo.svg";
import { Button } from "@components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function LoginPage() {
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
          <form className="flex flex-col gap-4">
            <input
              className="rounded-sm border border-muted bg-transparent px-4 py-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="rounded-sm border border-muted bg-transparent px-4 py-2"
              type="password"
              placeholder="Password"
            />
            <Button className="rounded-full bg-primary text-foreground">
              Sign in
            </Button>
          </form>
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
