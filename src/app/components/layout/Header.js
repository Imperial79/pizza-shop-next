import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="" className="text-primary font-bold text-2xl">
        The Pizza Shop
      </Link>
      <nav className="gap-4 flex items-center">
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link href="" className="bg-primary rounded-full px-5 py-2 text-white">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
