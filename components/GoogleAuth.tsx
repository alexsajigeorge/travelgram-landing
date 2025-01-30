import React from "react";
import Button from "./Button";
import { createClient } from "@/utils/supabase/server";
import { googleauth, login, logout } from "@/app/login/actions";
import Link from "next/link";

export async function GoogleAuth() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <div className="flex items-center gap-5 text-black">
      {user ? (
        <>
          <Link href="/startup/create">
            <span>Create</span>
          </Link>
          <form>
            <button formAction={logout}>Logout</button>
          </form>
        </>
      ) : (
        <form>
          <button formAction={googleauth}>Login</button>
        </form>
      )}
    </div>
  );
}
