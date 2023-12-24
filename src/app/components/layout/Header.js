import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { KButton } from "../components";

function Header() {
  return (
    <header className="md:flex flex-wrap md:justify-between items-center p-5">
      <div className="gap-6 flex items-center justify-center">
        <Link href="">
          <Logo />
        </Link>
        <nav className="gap-6 flex items-center justify-center">
          <Link href="">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </nav>
      </div>
      <nav className="gap-3 flex items-center justify-end">
        <Link href="/login">Login</Link>
        <KButton href="/register" label="Register" textSize="text-sm" />
      </nav>
    </header>
  );
}

export default Header;
