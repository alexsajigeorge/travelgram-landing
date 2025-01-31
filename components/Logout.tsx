"use client";
import { signOut } from "@/actions/auth";
import React, { useState } from "react";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await signOut();
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleLogout}>
        <button type="submit" disabled={loading} className="btn_dark_green">
          {loading ? "Logging out..." : "Logout"}
        </button>
      </form>
    </div>
  );
};

export default Logout;
