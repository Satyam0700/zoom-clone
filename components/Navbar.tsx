import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          width={32}
          height={32}
          alt="Yoom"
          src="/icons/logo.svg"
          className="max-sm:size-10"
        />
        <p className="font-bold text-[26px] text-white max-sm:hidden">Yoom</p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileSidebar />
      </div>
    </nav>
  );
};

export default Navbar;
