import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./ui/mobile-menu";
import { supabase } from "@/lib/supabase";
import Login from "./Login";
import LoginButton from "./LoginLogoutButton";
import Profile from "./Profile";

const Navbar = async () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const session = await auth();

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image
          src={"/travelgram-logo-light.svg"}
          alt={"logo"}
          width={250}
          height={100}
        />
      </Link>

      <div className="flex items-center gap-5">
        <LoginButton />
        <Profile />
        {/* {session && session?.user ? (
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
                "use server";
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
              "use server";
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
        )} */}
        {/* {isMenuOpen ? (
          <Image
            onClick={toggleMenu}
            src={"close-black.svg"}
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        ) : (
          <Image
            onClick={toggleMenu}
            src={"menu.svg"}
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        )} */}
      </div>

      {/* {isMenuOpen && <MobileMenu />} */}
    </nav>
  );
};

export default Navbar;
