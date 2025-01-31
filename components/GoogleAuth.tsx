'use client';
import React, { useState } from "react";
import { googleauth } from "@/actions/auth";

export async function GoogleAuth() {
  const [loading, setLoading] = useState(false);
  const handleLogin = async (event: React.FormEvent) =>{
    event.preventDefault();
    setLoading(true);
    await googleauth();
    setLoading(false);
  }
  return (
    <form onSubmit={handleLogin}>
      <button type="submit" className="btn_dark_green">
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
