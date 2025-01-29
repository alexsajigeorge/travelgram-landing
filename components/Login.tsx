"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { signInWithGoogle, signout } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

const Login = async () => {
  const [user, setUser] = useState<any>(null);
    const session = await supabase.auth.getUser();
//   useEffect(() => {
//     const fetchUser = async () => {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     fetchUser();
//   }, []);

  return (
    <div>
      {session ? (
        <>
          <Button
            type="submit"
            title="Logout"
            onClick={() => {
              signout();
            }}
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </>
      ) : (
        <>
          <Button
            type="submit"
            title="Login"
            onClick={() => {
              signInWithGoogle();
            }}
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </>
      )}
    </div>
  );
};

export default Login;
