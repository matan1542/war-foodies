"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

export default function Login() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (user) return redirect("/");

  return <a href="/api/auth/login">Login</a>;
}
