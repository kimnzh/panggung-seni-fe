"use client";
import LoadingScreen from "@/components/elements/LoadingScreen";
import { authClient } from "@/lib/auth";
import LoginPageModule from "@/modules/LoginPageModule";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, isPending } = authClient.useSession();

  // Session handling
  useEffect(() => {
    if (!isPending && session?.user) {
      redirect("/");
    }
  }, [isPending]);

  // Loading screen
  if (isPending) {
    return <LoadingScreen />;
  }

  return <LoginPageModule />;
}
