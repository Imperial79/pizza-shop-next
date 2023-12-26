"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { KButton, KTextButton } from "../components";

function Header() {
  const [isScrolling, setisScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setisScrolling(true);
      } else {
        setisScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`md:flex flex-wrap md:justify-between items-center p-5 fixed w-full ${
        isScrolling ? "bg-white" : "bg-gray-100"
      } h-20 transition-all duration-200`}
    >
      <div className="gap-6 flex items-center justify-center">
        <Logo />

        <nav className="gap-6 flex items-center justify-center">
          <Link href="">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </nav>
      </div>
      <nav className="gap-3 flex items-center justify-end">
        <KTextButton href="/login" label="Login" />
        <KButton href="/register" label="Register" textSize="text-sm" />
      </nav>
    </header>
  );
}

export default Header;
