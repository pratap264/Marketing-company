import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Creators from "./pages/Creators";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";  // Import Chatbot Component

const App = () => {
  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });

    // Refresh AOS to apply animations properly
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Add the Chatbot component here */}
      <Chatbot />  {/* This will appear globally on every page */}
    </div>
  );
};

export default App;


