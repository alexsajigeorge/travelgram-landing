import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/navigation";


const MobileMenu = () => {
  const router = useRouter();
  const login = ()=>{
    router.push('https://travelgramsocial.vercel.app/')
  }
  return (
    <ul className="absolute padding-container flex flex-col justify-between top-16 left-0 w-full h-[calc(100vh-400px)] shadow-xl rounded-b-5xl bg-white z-30">
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
