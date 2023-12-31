import { Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import your components
const Header = lazy(() => import("./assets/components/Header"));
import Maincontainer from "./assets/components/Maincontainer";

// Import your pages
const Homes = lazy(() => import("./assets/pages/Home"));
const Movies = lazy(() => import("./assets/pages/Movies"));
const Series = lazy(() => import("./assets/pages/Series"));
const About = lazy(() => import("./assets/pages/About"));
const Nopage = lazy(() => import("./assets/pages/Nopage"));
const Favorites = lazy(() => import("./assets/pages/Favorites"));

const App = () => {
  useEffect(() => {
    // Initialize AOS with options
    Aos.init({ duration: 1000 });

    // Clean up AOS on component unmount
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="heading">
        <Header />
      </div>
      <Suspense
        fallback={
          <section className="dots-container mt-5">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        }
      >
        <div
          className="main-container w-100 vh-100 mb-5"
          style={{ marginTop: "100px" }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Maincontainer>
          
              <Routes>
                <Route path="/" element={<Homes />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/about" element={<About />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Nopage />} />
              </Routes>
          
          </Maincontainer>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
