import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Import icons
import { FaCut, FaStore } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function About() {
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

  return (
    <div className=" justify-center items-center w-full mt-[80px]">
      <div className="max-w-[1300px] w-full mx-auto">
        {/* Video Container */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center z-3 transition-all"
          >
            {isPlaying ? (
              <FaPause className="text-white text-3xl sm:text-4xl md:text-5xl" />
            ) : (
              <FaPlay className="text-white text-3xl sm:text-4xl md:text-5xl" />
            )}
          </button>

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative bg-[#CB6F42] max-w-[1300px] py-10 px-4 sm:px-6 mx-auto">
        {/* Centered Title at the Top */}
        <div className="relative text-center w-full py-4">
          {/* Background Text */}
          <h2
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        text-[40px] sm:text-[40px] md:text-[70px] font-[800] text-[#FFDDCC1A] 
        font-[playfair] uppercase select-none leading-none z-0 whitespace-nowrap w-max"
          >
            MEET THE PERSON
          </h2>

          {/* Foreground Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-[600] font-[playfair] relative z-3">
            About <span className="text-[#633B27]">Me</span>
          </h2>
        </div>

        {/* Main Content - Image & Text */}
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center py-6 gap-6 sm:gap-8 md:gap-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/about/men.png"
              alt="Deepjyoti Chakrabarti"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
          bg-[#633B27] rounded-tr-[30px] rounded-bl-[30px] shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-white">
            <h3 className="text-3xl sm:text-4xl md:text-[50px] font-[playfair] font-[600] mb-3">
              Deepjyoti <span className="text-[#633B27]">Chakrabarti</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-white font-[600] font-[poppins] mb-4">
              STYLES FROM THE CITY, SERVICE FROM OUT OF THIS WORLD
            </p>

            {/* Professional Summary */}
            <div className="mb-4">
              <h4 className="font-[600] text-base sm:text-lg font-[poppins] text-[#633B27]">
                Professional Summary:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-white font-[500] font-[poppins] text-opacity-80">
                Experienced and skilled barber with **[X]** years of expertise
                in men's haircuts, beard grooming, and styling. Passionate about
                delivering precision cuts, modern trends, and excellent customer
                service.
              </p>
            </div>

            {/* Skills List */}
            <div className="mb-4 font-[poppins]">
              <h4 className="font-[600] text-base sm:text-lg text-[#633B27]">
                Skills:
              </h4>
              <ul className="text-xs sm:text-sm md:text-base text-white font-[500] list-disc list-inside">
                <li>Beard grooming and shaving</li>
                <li>Hair coloring and treatments</li>
                <li>Knowledge of latest hair trends</li>
                <li>Hygiene and sanitation practices</li>
                <li>Haircutting (fades, tapers, classic cuts)</li>
                <li>Customer service and consultations</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="mb-4 font-[poppins]">
              <h4 className="font-[600] text-base sm:text-lg text-[#633B27]">
                Work Experience:
              </h4>
              <ul className="text-xs sm:text-sm md:text-base text-white font-[500] list-disc list-inside">
                <li>Provided high-quality haircuts and beard trims.</li>
                <li>Advised customers on hairstyles and grooming.</li>
                <li>Built strong relationships with clients.</li>
                <li>
                  Maintained a clean and hygienic workspace with compliance.
                </li>
              </ul>
            </div>

            {/* References */}
            <div>
              <h4 className="font-[600] text-base sm:text-lg font-[poppins] text-[#633B27]">
                References:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-white font-[500] font-[poppins]">
                Available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* nothing */}
      <div className="bg-[#5B3A28] py-16">
        <div className="max-w-[600px] mx-auto flex flex-col md:flex-row justify-around items-center text-center gap-5">
          {/* Shaves */}
          <div className="flex flex-col items-center text-[#FFDFA4]">
            <GiRazor className="text-5xl  mb-2" />
            <h2 className="text-4xl text-[#FFDFA4] font-[inter] font-[600]">
              2500
            </h2>
            <p className="text-sm uppercase tracking-wide text-[#FFDFA4] font-[poppins]">
              Shaves
            </p>
          </div>

          {/* Haircuts */}
          <div className="flex flex-col items-center text-[#FFDFA4]">
            <FaCut className="text-5xl mb-2" />
            <h2 className="text-4xl text-[#FFDFA4] font-[inter] font-[600]">
              4500
            </h2>
            <p className="text-sm uppercase tracking-wide text-[#FFDFA4] font-[poppins]">
              Haircuts
            </p>
          </div>

          {/* Open Shops */}
          <div className="flex flex-col items-center text-[#FFDFA4]">
            <FaStore className="text-5xl mb-2" />
            <h2 className="text-4xl text-[#FFDFA4] font-[inter] font-[600]">
              23
            </h2>
            <p className="text-sm uppercase tracking-wide text-[#FFDFA4] font-[poppins]">
              Open Shops
            </p>
          </div>
        </div>
      </div>

      {/* Discount  */}
      <div className="bg-[#B36F42] px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between relative">
        {/* Left Side - Text Section */}
        <div className="lg:w-1/2 relative z-3 py-3 text-white">
          {/* Background Faded Text */}
          <h1 className="absolute top-0 left-0 text-[50px] sm:text-[70px] md:text-[40px] lg:text-[70px] font-[800] text-[#FFDDCC1A] leading-none">
            DISCOUNT
          </h1>

          {/* Main Discount Content */}
          <h2 className="text-4xl font-[600] mb-4 mt-6">
            <span className="text-white font-[inter]">25%</span>{" "}
            <span className="text-[#4A2E1D] font-[playfair]">Discount</span>
          </h2>
          <p className="text-lg mb-6 font-[400] font-[poppins]">
            Enjoy a 25% discount on all our premium services! Treat yourself to
            expert haircuts, relaxing massages, rejuvenating facials, and
            top-notch grooming at an unbeatable price. Limited-time offer—book
            your appointment today!
          </p>

          {/* Call to Action Button */}
          <Link to="/contact-us">
            <button className="bg-[#4A2E1D] text-white px-6 py-3  font-[400] font-[poppins]">
              Book Now
            </button>
          </Link>
        </div>

        {/* Right Side - Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/about/discount.png"
            alt="Bearded Man"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
