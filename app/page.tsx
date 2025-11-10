"use client";
import Footer from "@/components/elements/Footer";
import LoadingScreen from "@/components/elements/LoadingScreen";
import Navbar from "@/components/elements/Navbar";
import { authClient } from "@/lib/auth";
import LandingPageModule from "@/modules/LandingPageModule";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, isPending } = authClient.useSession();

  // User data
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  // Session handling
  useEffect(() => {
    if (!isPending && !session?.user) {
      redirect("/login");
    }

    setName(session?.user.name as string);
    setEmail(session?.user.email as string);
    setRole(session?.user.role as string);
  }, [isPending]);

  // Loading screen
  if (isPending) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />
      <LandingPageModule name={name} email={email} role={role} />
      <Footer />
    </>
  );
}
