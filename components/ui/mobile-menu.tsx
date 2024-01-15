import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  return (
    <ul className="absolute padding-container flex flex-col justify-between top-16 left-0 w-full h-[calc(100vh-350px)] shadow-xl bg-white z-30">
      <li>
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-right text-gray-50 flex justify-end pt-5 items-center w-full cursor-pointer pb-1.5 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </li>
      <li>
        <p className="regular-14 w-full text-center py-5 text-gray-30">
          2023 Travelgram | All rights reserved
        </p>
      </li>
    </ul>
  );
};

export default MobileMenu;
