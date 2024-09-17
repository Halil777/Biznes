import React, { FC, Suspense } from "react";

// Use React.lazy to import components
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
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
