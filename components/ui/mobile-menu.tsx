import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
  const router = useRouter();
  const login = () => {
    router.push("https://travelgramsocial.vercel.app/");
  };
  return (
    <ul className="absolute padding-container my-8 flex flex-col justify-between top-16 left-0 w-full shadow-xl rounded-b-5xl bg-white z-30">
      <li>
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 mb-4 flexCenter text-gray-50 border px-8 py-4 cursor-pointer rounded-full transition-all hover:bg-[#30af5b] hover:text-white"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </li>
      <li>
        <div className="flexCenter pb-5">
          <Button
            full
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={login}
          />
        </div>
      </li>
    </ul>
  );
};

export default MobileMenu;
