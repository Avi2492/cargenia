import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Logo />
        </Link>

        <Link href={"/sign-up"}>
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border-2 border-blue-600"
            isDisabled
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
