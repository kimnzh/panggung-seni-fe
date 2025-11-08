"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 space-y-12">
      {/* TItle */}
      <h1 className="text-h3">Masuk</h1>

      {/* Login Form */}
      <form action="POST" className="w-full space-y-8">
        {/* Email */}
        <div>
          <Label className="text-s7! mb-2">Email</Label>
          <Input type="email" placeholder="Email" />
        </div>

        {/* Password */}
        <div>
          <Label className="text-s7! mb-2">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-light-gold z-10 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </div>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="w-full text-end text-s7">Lupa Password?</div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button>Masuk</Button>
          <Button variant="secondary">Daftar</Button>
        </div>
      </form>

      {/* Separator */}
      <div className=" w-full flex gap-4 text-nowrap text-s7 items-center">
        <div className="bg-white h-px w-full"></div>
        Akses Cepat
        <div className="bg-white h-px w-full"></div>
      </div>

      {/* OAuth */}
      <div className="grid grid-rows-2 w-full gap-6">
        <Button className="bg-white hover:bg-gray font-bold text-black hover:text-black">
          <div className="relative size-6">
            <Image src="/icons/google.svg" alt="google" fill />
          </div>
          Google
        </Button>
        <Button className="bg-white hover:bg-gray font-bold text-blue-500 hover:text-blue-500">
          <div className="relative size-6">
            <Image src="/icons/facebook.svg" alt="facebook" fill />
          </div>
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
