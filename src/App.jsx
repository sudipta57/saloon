import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons ";
import Footer from "./components/Footer";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1300px] mx-auto">
      <Router>
        <ScrollToTop />
        <Navbar />
        <SocialIcons />
        <Routes>
          {/* Wrap All Pages in Layout */}
          <Route index element={<Home />} />
          <Route path="/our-service" element={<Service />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/book-appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
