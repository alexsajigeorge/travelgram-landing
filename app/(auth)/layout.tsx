import { getUserSession } from "@/actions/auth";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const response = await getUserSession();
  if (response?.user) {
    redirect("/");
  }
  return <>{children}</>;
};

export default AuthLayout;
