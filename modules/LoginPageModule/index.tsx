"use client";
import Image from "next/image";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth";
import { useRouter } from "next/navigation";

const LoginPageModule = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [isRegister, setIsRegister] = useState<boolean>(false);

  // Session handling
  useEffect(() => {
    if (!isPending && session?.user) {
      router.replace("/");
    }
  }, [isPending]);

  // Loading screen
  if (isPending) {
    <main className="bg-normal-gold-gradient flex min-h-screen items-center justify-center font-jakarta-sans text-h1 text-center">
      Memuat...
    </main>;
  }

  // Main page
  return (
    <main className="min-h-screen flex overflow-hidden">
      {/* Left Side */}
      <div className="flex-1/2 relative overflow-hidden rounded-r-4xl z-10">
        {/* Background Image */}
        <Image
          src="/background/login-bg.webp"
          alt="login-bg"
          fill
          className="object-cover -z-10"
        />

        {/* Content */}
        <div className="px-16 pt-16 pb-30 flex flex-col justify-between w-full h-full bg-linear-to-b from-transparent to-black/60">
          <div className="flex text-b5 items-center">
            {/* Logo */}
            <div className="relative h-16 w-16">
              <Image
                src="/logo.webp"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            PanggungSeni.id
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-h4">Hidupkan Panggung, Lestarikan Budaya.</h1>
            <p className="text-b6">
              Masuk dan jadilah bagian dari kisah seni Indonesia.
            </p>
            <div className="flex gap-4">
              <div className="w-24 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex-1/2">
        {isRegister ? (
          <>
            {/* Register Form */}
            <RegisterForm setIsRegister={setIsRegister} />
          </>
        ) : (
          <>
            {/* Login Form */}
            <LoginForm setIsRegister={setIsRegister} />
          </>
        )}

        {/* Background Assets */}
        <Image
          src="/background/parang.webp"
          alt="parang"
          width={271}
          height={535}
          className="absolute -z-10 left-0 top-0 -translate-y-1/3 -translate-x-1/3"
        />
        <Image
          src="/background/parang.webp"
          alt="parang"
          width={271}
          height={535}
          className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180"
        />
        <Image
          src="/background/parang.webp"
          alt="parang"
          width={271}
          height={535}
          className="absolute -z-10 -scale-x-100 rotate-15 top-1/2 right-0 translate-x-1/3 -translate-y-2/3"
        />
      </div>
    </main>
  );
};

export default LoginPageModule;
