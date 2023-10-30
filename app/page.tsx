"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user } = useUser();
  return <span>Hello world</span>;
}
