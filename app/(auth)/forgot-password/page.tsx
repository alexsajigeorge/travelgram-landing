"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { forgotPassword, singIn } from "@/actions/auth";
import { useToast } from "@/hooks/use-toast";

export default function ForgotPassword() {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    const result = await forgotPassword(formData);

    if (result.status === "success") {
      toast({
        title: "Success",
        description: "Password reset link sent to your email",
      });
      router.push("/");
    } else {
      setError(result.status);
    }
    setLoading(false);
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-1">
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Forgot Password</h1>
                <p className="text-balance text-muted-foreground pt-5">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Forgot Password"}
              </Button>

              <div className="text-center text-sm">
                Remembered your password?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
