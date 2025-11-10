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
import { FormEvent, useState } from "react";
import { roles } from "../props";
import { handleRegister } from "@/lib/auth";
import { useRouter } from "next/navigation";

interface RegisterFormProps {
  setIsRegister: (isRegister: boolean) => void;
}

const RegisterForm = ({ setIsRegister }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  // Payload
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>(roles[0]);

  // Status
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Submit
  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    setError(null);
    e.preventDefault();

    try {
      const data = await handleRegister({ name, email, password, role });
      console.log("Register successful: ", data);
      router.replace("/");
    } catch (err: any) {
      setError(err.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 space-y-12">
      {/* Title */}
      <h1 className="text-h3">Daftar</h1>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-8">
        {/* Name */}
        <div>
          <Label className="text-s7! mb-2">Name</Label>
          <Input
            type="name"
            placeholder="Name"
            value={name}
            status={error ? "error" : "default"}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <Label className="text-s7! mb-2">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            status={error ? "error" : "default"}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <Label className="text-s7! mb-2">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              status={error ? "error" : "default"}
              onChange={(e) => setPassword(e.target.value)}
              required
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
              {role}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {roles.map((role, index) => (
                <DropdownMenuItem
                  variant="outline"
                  key={index}
                  onClick={() => setRole(role)}
                >
                  {role}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {error && <p className="text-error-message text-center">{error}</p>}

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Memuat..." : "Daftar"}
          </Button>
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
