"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";

function Header() {
  const [isScrolling, setisScrolling] = useState(true);

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
      className={`flex justify-between items-center p-5 fixed w-full ${
        isScrolling ? "bg-white" : "bg-gray-100"
      } h-20 transition-all duration-200`}
    >
      <div className="gap-6 flex items-center md:justify-center">
        <Logo />
        <nav className="gap-6 md:flex items-center justify-center hidden">
          <Link href="" className="kTextButton">
            Home
          </Link>
          <Link href="" className="kTextButton">
            Menu
          </Link>
          <Link href="" className="kTextButton">
            About Us
          </Link>
          <Link href="" className="kTextButton">
            Contact Us
          </Link>
        </nav>
      </div>
      <nav className="gap-3 flex items-center justify-end">
        <Link href="/login" className="kTextButton">
          Login
        </Link>
        <Link href="/register" className="kButton">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
