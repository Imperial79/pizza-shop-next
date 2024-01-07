import SectionHeader from "./components/SectionHeader";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeMenu />

      <section>
        <SectionHeader subHeader="Our Story" mainHeader="About Us" />
        <div className="mt-5 mx-auto text-center max-w-3xl text-gray-600 flex flex-col gap-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            cumque doloribus voluptatibus quod cupiditate veniam! Magni,
            delectus repudiandae eligendi molestiae at et in autem qui
            consectetur inventore debitis corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            cumque doloribus voluptatibus quod cupiditate veniam! Magni,
            delectus repudiandae eligendi molestiae at et in autem qui
            consectetur inventore debitis corporis.
          </p>
        </div>
      </section>

      <section>
        <SectionHeader subHeader="Don't hesitate" mainHeader="Contact Us" />
        <div className="mt-8 text-center">
          <Link
            href="tel:+919093096277"
            className="text-2xl font-semibold inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            +91 909 309 6277
          </Link>
        </div>
      </section>
    </div>
  );
}
