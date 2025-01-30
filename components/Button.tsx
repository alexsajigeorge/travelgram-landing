"use client";

import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  children,
  onClick,
  formAction,
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const formSubmit = () => {
    if (formAction) {
      formAction();
    }
  };

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={handleClick}
      formAction={formSubmit}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
