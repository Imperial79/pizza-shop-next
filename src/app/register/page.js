import React from "react";
import SectionHeader from "../components/SectionHeader";
import {
  KButton,
  KGrid,
  KTextArea,
  KTextField,
} from "../components/components";

function RegisterPage() {
  return (
    <section className="mt-10">
      <div className="border rounded-xl bg-gray-50 p-5 max-w-xl mx-auto">
        <SectionHeader
          subHeader="Create an account"
          mainHeader="Register"
          margin="mb-5"
        />
        <form className="bg-white p-5 rounded-xl">
          <KGrid>
            <KTextField
              id="email"
              label={"Your E-mail"}
              placeholder="Eg. example@mail.com"
            />
            <KTextField
              id="fullname"
              label={"Fullname"}
              placeholder="Eg. John Doe"
            />
          </KGrid>
          <KGrid>
            <KTextField
              id="phone"
              label={"Phone Number"}
              placeholder="Eg. 909XXX1234"
            />
            <KTextField
              type="password"
              id="password"
              label={"Create Password"}
              placeholder="Create a strong password"
            />
          </KGrid>
          <KTextArea
            margin="mb-10"
            id="address"
            label={"Address"}
            placeholder="Eg. A/84, 6th Street, Kagage Port, St. Dominos"
          />
          <KButton label="Register" width="w-full" />
          <h2 className="my-5 text-gray-500">Or continue with</h2>

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
