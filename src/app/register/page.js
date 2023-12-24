import React from "react";
import SectionHeader from "../components/SectionHeader";

function RegisterPage() {
  return (
    <section className="mt-10">
      <SectionHeader subHeader="Create an account" mainHeader="Register" />
      <form className="flex-col inline-flex">
        <input
          type="text"
          id="email"
          className="bg-white border-gray-500 p-2.5 rounded-lg focus:border-b-8 focus:border-primary transition-all"
          placeholder="Eg. example@mail.com"
        />
      </form>
    </section>
  );
}

export default RegisterPage;
