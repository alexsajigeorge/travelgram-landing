import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Logout from "./Logout";

const Navbar = async () => {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

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
        {!user?.user ? (
          <Link href="/login" className="btn_dark_green">
            Login
          </Link>
        ) : (
          <>
            {user?.user?.email}
            <Logout />
          </>
        )}

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
