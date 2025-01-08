"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import MobileMenu from "./ui/mobile-menu";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./ui/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const login = () => {
    router.push("https://travelgramsocial.vercel.app/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image
          src={"/travelgram-logo-light.svg"}
          alt={"logo"}
          width={180}
          height={100}
        />
      </Link>

      <div className="flex items-center gap-5">
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
      
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={login}
        />
      </div>
      {isMenuOpen ? (
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
      )}

      </div>
      
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
