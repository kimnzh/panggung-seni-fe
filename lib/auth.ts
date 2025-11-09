import { LoginProps, RegisterProps } from "@/modules/LoginPageModule/props";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
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
