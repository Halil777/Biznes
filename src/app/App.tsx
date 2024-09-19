import React, { FC, Suspense, useEffect, useState } from "react";
import Loading from "../components/loading/Loading";

// Lazy load components
const Navbar = React.lazy(() => import("../components/navbar/Navbar"));
const Home = React.lazy(() => import("../features/home/presentation/Home"));
const About = React.lazy(() => import("../features/about/presentation/About"));
const Portfolio = React.lazy(
  () => import("../features/portfolio/presentation/Portfolio")
);
const Services = React.lazy(
  () => import("../features/services/presentation/Services")
);
const Contact = React.lazy(
  () => import("../features/contact/presentation/Contact")
);
const Footer = React.lazy(() => import("../components/footer/Footer"));

const App: FC = () => {
  const [activeSection, setActiveSection] = useState("#home");

  // Function to handle section change based on scroll
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "#home"; // Default to home section

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        currentSection = `#${section.getAttribute("id")}`;
      }
    });

    setActiveSection(currentSection);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navbar activeSection={activeSection} />
        {/* Pass active section to Navbar */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
