import React from "react";
import { Button } from "./ui/button";
import { signInWithGoogle } from "@/lib/auth";

const GoogleAuth = () => {
  return (
    <Button
      type="button"
      onClick={() => {
        signInWithGoogle();
      }}
      variant="outline"
      className="w-full"
    >
      Login with Google
    </Button>
  );
};

export default GoogleAuth;
