import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Home from "./Sections/Home";
import Services from "./Sections/Services";
import CircleLoader from "react-spinners/CircleLoader";

const Website = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setColor(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className=" bg-black h-screen flex items-center justify-center">
          <CircleLoader
            color={`${color ? "#afa6ff" : "#ff972d"}`}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className=" font-karla mx-1">
          <Navbar />
          <Sidebar />
          <Home />
          <About />
          <Experience />
          <Services />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Website;
