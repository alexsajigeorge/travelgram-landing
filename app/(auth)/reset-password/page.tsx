"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { resetPassword } from "@/actions/auth";
import { useToast } from "@/hooks/use-toast";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    const result = await resetPassword(
      formData,
      searchParams.get("code") as string
    );

    if (result.status === "success") {
      toast({
        title: "Success",
        description: "Password has been reset successfully",
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
                <h1 className="text-2xl font-bold">Reset Your Password</h1>
                <p className="text-balance text-muted-foreground">
                  Create a new password for your account.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
