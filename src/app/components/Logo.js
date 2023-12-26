import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="text-primary font-bold md:text-2xl text-xl">
      <h1>The Pizza Shop</h1>
    </Link>
  );
}

export default Logo;
