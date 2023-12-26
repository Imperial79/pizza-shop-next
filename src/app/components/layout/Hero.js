"use client";

import React from "react";
import { KButton, KTextButton } from "../components";

function Hero() {
  return (
    <section className="grid md:grid-cols-2  gap-5 items-center">
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
          <KTextButton label="Learn More" />
        </div>
      </div>

      <div className="md:order-last order-first">
        <img
          src="/hero-img.webp"
          className="mx-auto max-w-[400px]"
          alt="hero"
        />
      </div>
    </section>
  );
}

export default Hero;
