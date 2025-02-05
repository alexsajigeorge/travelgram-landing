"use client";
import React, { useTransition } from "react";
import { googleauth } from "@/actions/auth";

export function GoogleAuth() {
  const [isPending, startTransition] = useTransition();
  const handleGoogleAuth = () => {
    startTransition(async () => {
      await googleauth();
    });
  };
  return (
    <div
      onClick={handleGoogleAuth}
      className="border rounded-lg p-2 flex justify-center w-full"
    >
      <p> {isPending ? "Redirecting..." : "Login with google"}</p>
    </div>
  );
}
