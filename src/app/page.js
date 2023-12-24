import SectionHeader from "./components/SectionHeader";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";

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
          <a href="tel:+919093096277" className="text-3xl font-semibold">
            +91 909 309 6277
          </a>
        </div>
      </section>
    </div>
  );
}
