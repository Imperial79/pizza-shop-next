import React from "react";
import Image from "next/image";
import ProductCard from "../ProductCard";

function HomeMenu() {
  return (
    <section>
      <div className="text-center mt-10">
        <h3 className="text-xl">Check our</h3>
        <h2 className="text-primary font-bold text-4xl">Menu</h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default HomeMenu;
