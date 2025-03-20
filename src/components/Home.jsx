"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import React from "react";
import Testimonials from "./Testimonials";
import { FaPlay, FaPause } from "react-icons/fa"; // Import icons

export default function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset animation
          setTimeout(() => setIsVisible(true), 500); // Delay to restart animation
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-center mt-[80px]">
      <div className="max-w-[1300px] w-full">
        {/* Video Container */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[550px] overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about/vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause Button */}
          {/* <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center z-3 transition-all"
          >
            {isPlaying ? (
              <FaPause className="text-white text-3xl sm:text-4xl md:text-5xl" />
            ) : (
              <FaPlay className="text-white text-3xl sm:text-4xl md:text-5xl" />
            )}
          </button> */}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Over Video */}
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center font-[playfair]">
          <p className="mt-2 text-[22px] sm:text-[30px] md:text-[40px] lg:text-[45px] font-[600] max-w-[800px] leading-[1.4]">
            Our Exclusive <span className="text-[#CB6F42]">Services</span>
          </p>
        </div> */}
        </div>
      </div>

      <div className="bg-[#FFDFA4] py-3 px-8 mx-auto rounded-b-lg w-full overflow-hidden relative">
        <div className="w-[90%] flex justify-center font-[poppins]">
          <div className="flex gap-8 whitespace-nowrap animate-marquee px-8 min-w-full">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex items-center space-x-3">
                <img src="/time.png" alt="Clock" className="w-5 h-5" />
                <span className="text-[#633B27] font-[500]">
                  SERVICE TIMING:{" "}
                  <span className="font-normal">10AM to 09PM</span>
                </span>
              </div>
            ))}
            {/* Duplicate for smooth infinite scrolling */}
            {[...Array(10)].map((_, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex items-center space-x-3"
              >
                <img src="/time.png" alt="Clock" className="w-5 h-5" />
                <span className="text-[#633B27] font-[500]">
                  SERVICE TIMING:{" "}
                  <span className="font-normal">10AM to 09PM</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Inline CSS */}
        <style>
          {`
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      .animate-marquee {
        display: flex;
        animation: marquee 10s linear infinite;
        width: max-content;
      }
    `}
        </style>
      </div>
      {/* Wrapper for uniform width */}
      <div className="max-w-[1300px] mx-auto">
        {/* Glam section*/}
        <div className="max-w-[1300px] mx-auto p-4 px-6 sm:px-6 md:px-8 font-[poppins]">
          <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
            {/* Left Section - Larger Width */}
            <div className="lg:col-span-2 flex flex-col h-full">
              {/* Top Image */}
              <img
                src="/tl.png"
                alt="Haircut"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full object-cover lg:rounded-br-lg lg:rounded-tl-lg flex-1"
              />

              {/* Text Section */}
              <div className="bg-[#B36840] p-4 sm:p-6 text-white flex-1 flex flex-col justify-between lg:rounded-tr-lg lg:rounded-bl-lg">
                <div>
                  <h2 className="text-xl sm:text-2xl font-[600] font-[playfair] mb-2">
                    The World Of <span className="text-[#633B27]">Glam</span>
                  </h2>
                  <p className="text-sm sm:text-base mt-4 sm:mt-6 font-[400]">
                    Combining the best of Indian and Western hairstyling with a
                    scientific and geometric approach, modern men's salons are
                    revolutionizing the grooming industry. With expert
                    precision, innovative techniques, and trend-driven styles,
                    they cater to the evolving needs of today's men.
                  </p>
                </div>
                <div className="mt-6 sm:mt-12">
                  <p className="font-[600] text-sm sm:text-base">
                    We redefine men’s grooming with precision and style.
                  </p>
                  <Link to="/book-appointment">
                    <button className="mt-3 sm:mt-4 px-4 py-2 bg-white text-[#633B27] font-[600] rounded-lg rounded-bl-[20px] rounded-tr-[15px]">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Smaller Width */}
            <div className="lg:col-span-1 flex flex-col h-full">
              <div className="bg-[#653A1D] text-white p-4 sm:p-6 flex-1 flex flex-col justify-between lg:rounded-tr-lg lg:rounded-bl-lg">
                <div>
                  <h3 className="text-md sm:text-lg font-[600]">
                    KNOW MORE ABOUT US
                  </h3>
                  <h2 className="text-xl sm:text-2xl mt-4 sm:mt-6 font-[600] font-[playfair]">
                    From Trims to{" "}
                    <span className="text-[#CB6F42]">Transformations</span>
                  </h2>
                  <p className="text-sm sm:text-base mt-4 sm:mt-6 font-[400]">
                    We provide all these services at unbeatable prices while
                    maintaining top-notch quality.
                  </p>
                  <Link to="/contact-us">
                    <button className="mt-3 sm:mt-4 px-4 py-2 w-[123px] bg-white text-[#B36840] font-[600] rounded-lg rounded-bl-[20px] whitespace-nowrap">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>

              {/* Bottom Image */}
              <img
                src="/br.png"
                alt="Barber Handshake"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full object-cover lg:rounded-br-lg lg:rounded-tl-lg flex-1"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1300px] bg-[#FFF8EB] mx-auto px-6 sm:px-10 md:px-12 mt-6 py-6">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 text-center sm:text-left">
            {/* Left-aligned text */}
            <div className="text-[28px] sm:text-[36px] md:text-[45px] text-[#000000] font-[600] font-[playfair]">
              Happy Hour <span className="text-[#633B27]">Services</span>
            </div>

            {/* Right-aligned button/link */}
            <Link to="our-service">
              <button className="text-[#0F6BFF] text-[20px] sm:text-[24px] md:text-[28px] font-[600] font-[playfair] mt-4 sm:mt-0">
                View All
              </button>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden h-[350px] w-full max-w-[400px] mx-auto transition-all duration-500 bg-gray-800"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Default Content (Icon + Title) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-500 group-hover:translate-y-[-30px]">
                  {/* Icon */}
                  <img
                    src={service.icon}
                    className="w-10 sm:w-12 h-10 sm:h-12 mb-2 transition-all duration-500"
                    alt="Icon"
                  />

                  {/* Title */}
                  <div className="inline-block text-center">
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-[600] font-[playfair] transition-all duration-500">
                      {service.title}
                    </h3>
                    {/* Dynamic Underline */}
                    <div
                      className="h-[2px] bg-white opacity-0 transition-all duration-500 group-hover:opacity-100 mx-auto mt-1"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                {/* Hover Content (Description + Button) */}
                <div className="absolute inset-0 font-[400] font-[poppins] flex flex-col items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6 text-center mt-50">
                  <p className="text-[16px] mb-4 ">{service.description}</p>
                  <Link to="/book-appointment">
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg transition hover:bg-gray-200">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

              {/* Happy Hour Gallery Section */}
      <div className="max-w-[1300px] bg-[#CB6F42] mx-auto px-4 sm:px-6 md:px-12 rounded-lg py-6 sm:py-8">
        {/* Title */}
        <div className="relative text-center mb-6 sm:mb-8 font-[playfair]">
          {/* Background Text */}
          <h2 className="absolute inset-0 flex items-center justify-center text-[60px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-[800] text-[#FFDDCC1A] uppercase select-none">
            GALLERY
          </h2>

          {/* Foreground Text */}
          <h2 className="relative text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[600]">
            Happy Hour <span className="text-[#633B27]">Gallery</span>
          </h2>
        </div>

        {/* Scrollable Image Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-custom scroll-smooth snap-x snap-mandatory pb-4 flex space-x-4 sm:space-x-6 w-full">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group flex-shrink-0 snap-center w-[90%] sm:w-[300px] md:w-[350px] lg:w-[400px] relative"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover rounded-tl-[15px] sm:rounded-tl-[20px] rounded-br-[15px] sm:rounded-br-[20px] transition-all duration-300"
                />

                {/* Border effect */}
                <div className="absolute bottom-0 right-0 w-0 h-0 bg-transparent border-r-4 border-b-4 border-[#A24212] opacity-0 group-hover:w-[98%] group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-lg pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      {/*Happ Hour Gallery section  */}


      {/* Location Section */}
      <div className="max-w-[1300px] bg-[#FFF8EB] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="relative inline-block font-[playfair]">
            {/* Background Text */}
            <h2 className="absolute inset-0 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[90px] font-bold text-[#CB6F42] opacity-10 uppercase select-none leading-none z-0">
              Location
            </h2>

            {/* Foreground Title */}
            <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:mt-10 font-semibold text-[#633B27] z-3">
              Enter the Executive{" "}
              <span className="text-[#CB6F42]"> Experience</span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 text-[#080808] font-[poppins] text-sm sm:text-base md:text-lg lg:text-[18px] font-[400]">
            Step into a world of luxury and precision grooming. "Enter the
            Executive Experience"— where top-tier styling, premium treatments,
            and elite service redefine your look with sophistication and class.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/location.png"
            alt="Location Map"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] object-contain"
          />
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

// gallery Image
const galleryImages = [
  "/gallery/img1.png",

  "/gallery/img2.png",

  "/gallery/img3.png",

  "/gallery/img4.png",

  "/gallery/img5.png",

  "/gallery/img6.png",

  "/gallery/img7.png",

  "/gallery/img8.png",

  "/gallery/img9.png",
];
/* Service Data */
const services = [
  {
    title: "Haircuts & Styling",
    image: "/service/img1.png",
    icon: "/service/icon1.png",
    description: "Perfectly shaped beards with precision and care.",
  },
  {
    title: "Beard Grooming",
    image: "/service/img2.png",
    icon: "/service/icon2.png",
    description: "Perfectly shaped beards with precision and care.",
  },
  {
    title: "Hair Coloring",
    image: "/service/img3.png",
    icon: "/service/icon3.png",
    description: "Perfectly shaped beards with precision and care.",
  },
  {
    title: "Facials & Skin Care",
    image: "/service/img4.png",
    icon: "/service/icon4.png",
    description: "Perfectly shaped beards with precision and care.",
  },
  {
    title: "Massages",
    image: "/service/img5.png",
    icon: "/service/icon5.png",
    description: "Perfectly shaped beards with precision and care.",
  },
  {
    title: "Manicure & Pedicure",
    image: "/service/img6.png",
    icon: "/service/icon6.png",
    description: "Perfectly shaped beards with precision and care.",
  },
];
