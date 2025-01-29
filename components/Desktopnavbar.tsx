import React from "react";
import Button from "./Button";
import Link from "next/link";
import { auth, signIn, signOut } from "@/lib/auth";
import { NAV_LINKS } from "@/constants";

const Desktopnavbar = async () => {
  const session = await auth();

  return (
    <div>
      {session && session?.user ? (
        <>
          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                className="regular-16 text-gray-50 border px-8 py-4 cursor-pointer rounded-full transition-all hover:bg-[#30af5b] hover:text-white"
                href={link.href}
                key={link.key}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <form
            action={async () => {
                "use server"
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button
              type="submit"
              title="Logout"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </form>
          <Link href={`/user/${session?.id}`}>
            <img
              className="rounded-full"
              src={session?.user?.image}
              alt="avatar"
              height={55}
              width={55}
            />
          </Link>
        </>
      ) : (
        <form
          action={async () => {
            await signIn("github");
          }}
        >
          <Button
            type="submit"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </form>
      )}
    </div>
  );
};

export default Desktopnavbar;
