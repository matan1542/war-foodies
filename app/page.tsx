"use client";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const Home = () => {
  const { user } = useUser();
  return (
    <div>
      <span>Hello world</span>
      <a href="/api/auth/logout">Logout</a>;
    </div>
  );
};

export default withPageAuthRequired(Home, { returnTo: "/login" });
