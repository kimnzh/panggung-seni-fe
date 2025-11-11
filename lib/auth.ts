import { LoginProps, RegisterProps } from "@/modules/LoginPageModule/props";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

// Better Auth Client
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  cookkies: {
    session: {
      options: {
        httpOnly: true,
        sameSite:
          (process.env.NODE_ENV as string) === "production" ? "none" : "lax",
        secure: (process.env.NODE_ENV as string) === "production",
        domain: (process.env.BASE_DOMAIN as string)
          ? `.${process.env.BASE_DOMAIN as string}`
          : undefined,
      },
    },
  },
  fetchOptions: {
    credentials: "include",
  },
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
        },
      },
    }),
  ],
});

// Register
export const handleRegister = async ({
  name,
  email,
  password,
  role,
}: RegisterProps) => {
  const response = await authClient.signUp.email({
    name,
    email,
    password,
    role,
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
};

// Login
export const handleLogin = async ({ email, password }: LoginProps) => {
  const response = await authClient.signIn.email({
    email,
    password,
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
};

// Login with Google
export const handleLoginGoogle = async () => {
  const response = await authClient.signIn.social({
    provider: "google",
    callbackURL: process.env.NEXT_PUBLIC_FRONTEND_URL as string,
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
};

// Logout
export const handleLogout = async () => {
  const response = await authClient.signOut({
    fetchOptions: { credentials: "include" },
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
};
