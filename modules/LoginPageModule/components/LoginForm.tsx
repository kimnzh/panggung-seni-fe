"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient, handleLogin } from "@/lib/auth";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

interface LoginFormProps {
  setIsRegister: (isRegister: boolean) => void;
}

const LoginForm = ({ setIsRegister }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  // Payload
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Status
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch
  const handleSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    setError(null);
    e.preventDefault();

    try {
      const data = await handleLogin({
        email,
        password,
      });
      console.log("Login successful: ", data);
      router.replace("/");
    } catch (err: any) {
      setError(err.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16 space-y-12">
      {/* TItle */}
      <h1 className="text-h3">Masuk</h1>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-8">
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

        {/* Forgot Password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-s7 cursor-pointer hover:underline"
            onClick={() => null}
          >
            Lupa Password?
          </button>
        </div>

        {error && <p className="text-error-message text-center">{error}</p>}

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Memuat..." : "Masuk"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsRegister(true)}
          >
            Daftar
          </Button>
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
        <Button
          className="bg-white hover:bg-gray font-bold text-black hover:text-black"
          onClick={async () => {
            await authClient.signOut();
          }}
        >
          <div className="relative size-6">
            <Image src="/icons/google.svg" alt="google" fill />
          </div>
          Google
        </Button>
        {/* <Button className="bg-white hover:bg-gray font-bold text-blue-500 hover:text-blue-500">
          <div className="relative size-6">
            <Image src="/icons/facebook.svg" alt="facebook" fill />
          </div>
          Facebook
        </Button> */}
      </div>
    </div>
  );
};

export default LoginForm;
