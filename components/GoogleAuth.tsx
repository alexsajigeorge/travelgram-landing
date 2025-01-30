import React from "react";

import { googleauth } from "@/app/login/actions";
import Button from "./Button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export async function GoogleAuth() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.log(user);
  return (
    <>
      <form>
        <Button
          type="submit"
          title={`${user !== null ? "Logout" : "Login"}`}
          icon={`${user !== null ? `${user?.user_metadata.avatar_url}` : "/user.svg"}`}
          variant="btn_dark_green"
          formAction={googleauth}
        ></Button>
      </form>
      <div className="h-14 w-14">
        <img
          className="rounded-full"
          src={user?.user_metadata.avatar_url}
          height="100%"
          width="100%"
          alt="avatar"
        />
      </div>
    </>
  );
}
