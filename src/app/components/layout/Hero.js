"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { KButton } from "../components";

function Hero() {
  return (
    <section className="grid grid-cols-2 mt-10 gap-5">
      <div>
        <h1 className="text-4xl font-medium">
          Everything is better with a{" "}
          <span className="font-bold text-primary bg-red-50">Pizza</span>
        </h1>
        <p className="mt-4 text-md">
          Pizza is a missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>

        <div className="md:flex flex-wrap items-center md:gap-5 mt-5">
          <KButton
            id="orderNow"
            label="Order Now"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            }
          />
          <div className="font-medium mx-2 hover:underline cursor-pointer">
            Learn More
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/hero-img.webp"
          objectFit="contain"
          layout="fill"
          alt="hero"
        />
      </div>
    </section>
  );
}

export default Hero;
