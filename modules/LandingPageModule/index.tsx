"use client";

import { authClient } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LandingPageModule = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  // User data
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  // Session handling
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.replace("/login");
    }

    console.log(session?.user.role);

    setName(session?.user.name as string);
    setEmail(session?.user.email as string);
    setRole(session?.user.role as string);
  }, [isPending]);

  // Loading screen
  if (isPending) {
    return (
      <main className="bg-normal-gold-gradient flex min-h-screen items-center justify-center font-jakarta-sans text-h1 text-center pt-25">
        Memuat...
      </main>
    );
  }

  // Main page
  return (
    <main className="bg-normal-gold-gradient flex min-h-screen items-center justify-center font-jakarta-sans text-h1 text-center pt-25">
      Hi! {role} {name} {email}
    </main>
  );
};

export default LandingPageModule;
