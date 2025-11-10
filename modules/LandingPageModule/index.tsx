"use client";
import { Button } from "@/components/ui/button";
import { handleLogout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LandingPageContext } from "./props";

const LandingPageModule = (context: LandingPageContext) => {
  const router = useRouter();

  // Status
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Logout
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await handleLogout();
      console.log("Logout successful: ", data);
      router.replace("/login");
    } catch (err: any) {
      console.log(error);
      setError(err.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  // Main page
  return (
    <main className="bg-normal-gold-gradient flex flex-col min-h-screen items-center justify-center font-jakarta-sans text-h1 text-center pt-25">
      Hi! {context.role} {context.name} {context.email}
      {error && <p className="text-error-message text-center">{error}</p>}
      <Button variant="secondary" disabled={isLoading} onClick={handleSubmit}>
        Logout
      </Button>
    </main>
  );
};

export default LandingPageModule;
