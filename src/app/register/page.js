"use client";

import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { KTextArea, KTextField } from "../components/components";

function RegisterPage() {
  const [creatingUser, setCreatingUser] = useState(false);

  async function handleSubmit() {
    var formD = document.forms.registerForm;
    var formData = new FormData(formD);

    const { fullname, email, password, phone, address } =
      Object.fromEntries(formData);

    setCreatingUser(true);

    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        fullname,
        email,
        password,
        phone,
        address,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    setCreatingUser(false);
  }
  return (
    <section>
      <div className="border rounded-xl bg-gray-50 p-5 max-w-xl mx-auto mt-10">
        <SectionHeader
          subHeader="Create an account"
          mainHeader="Register"
          margin="mb-5"
        />
        <form
          id="registerForm"
          className="bg-white p-5 rounded-xl"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="kGrid mb-5">
            <KTextField
              type="email"
              id="email"
              label={"E-mail"}
              placeholder="Eg. johndoe@mail.com"
              disabled={creatingUser}
            />
            <KTextField
              type="name"
              id="fullname"
              label={"Fullname"}
              placeholder="Eg. John Doe"
              disabled={creatingUser}
            />

            <KTextField
              id="phone"
              type="phone"
              maxLength={10}
              label={"Phone Number"}
              placeholder="Eg. 909XXX1234"
              disabled={creatingUser}
            />
            <KTextField
              type="password"
              id="password"
              label={"Create Password"}
              placeholder="Create a strong password"
              disabled={creatingUser}
            />
          </div>
          <KTextArea
            margin="mb-10"
            id="address"
            label={"Address"}
            placeholder="Eg. A/84, 6th Street, Kagage Port, St. Dominos"
            disabled={creatingUser}
          />
          <button className="kButton w-full" disabled={creatingUser}>
            Register
          </button>
          <h2 className="my-5 text-gray-500 text-center">Or continue with</h2>

          <GoogleSignButton />
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;

function GoogleSignButton({ id, onClick }) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`bg-white rounded-full px-4 py-3 text-black font-medium flex w-full text-center items-center justify-center transition-all duration-200 hover:bg-gray-200/80 border border-gray-300`}
    >
      <div className="mr-2">
        <img src="/google-logo.webp" alt="google_logo" className="h-5 w-5" />
      </div>
      Sign in with Google
    </button>
  );
}
