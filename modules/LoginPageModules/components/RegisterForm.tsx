"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, EyeOff } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

interface RegisterFormProps {
  setIsRegister: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm = ({ setIsRegister }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 space-y-12">
      {/* Title */}
      <h1 className="text-h3">Daftar</h1>

      {/* Login Form */}
      <form action="POST" className="w-full space-y-8">
        {/* Username */}
        <div>
          <Label className="text-s7! mb-2">Username</Label>
          <Input type="username" placeholder="Username" />
        </div>

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

        {/* Role */}
        <div>
          <Label className="text-s7! mb-2">Role</Label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full!" variant="outline">
              Choice 1
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem variant="outline">Choice 2</DropdownMenuItem>
              <DropdownMenuItem variant="outline">Choice 3</DropdownMenuItem>
              <DropdownMenuItem variant="outline">Choice 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button>Daftar</Button>
          <Button variant="secondary" onClick={() => setIsRegister(false)}>
            Masuk
          </Button>
        </div>
      </form>

      {/* Redirect Login */}
      <button
        className="text-center text-s7 cursor-pointer hover:underline"
        onClick={() => setIsRegister(false)}
      >
        Masuk, jika kamu sudah memiliki akun.
      </button>
    </div>
  );
};

export default RegisterForm;
