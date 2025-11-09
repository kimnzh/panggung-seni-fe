"use server";
import {
  LoginProps,
  RegisterProps,
  ResponseProps,
} from "@/modules/LoginPageModules/props";
import { createAuthClient } from "better-auth/client";

const FRONTEND_URL = process.env.FRONTEND_URL;
const BACKEND_URL = process.env.BACKEND_URL;

export const authClient = createAuthClient();

export const handleRegister = async ({
  name,
  email,
  password,
  role,
}: RegisterProps) => {
  const response = await fetch(`${BACKEND_URL}/api/auth/sign-up/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
    }),
  });

  const data: ResponseProps = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Register failed");
  }

  return data;
};

export const handleLogin = async ({ email, password }: LoginProps) => {
  const response = await fetch(`${BACKEND_URL}/api/auth/sign-in/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data: ResponseProps = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};
