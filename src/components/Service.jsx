import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Import icons
import { FaCut, FaStore } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Service() {
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
  const services = [
    {
      name: "Haircuts & Styling",
      description: "Trendy, classic, and customized cuts to suit your look.",
      icon: "/service/icon1.png", // Replace with actual icon path
    },
    {
      name: "Beard Grooming",
      description:
        "Precision beard trims, shaping, and styling for a sharp appearance.",
      icon: "/service/icon2.png",
    },
    {
      name: "Hair Coloring",
      description:
        "Professional hair coloring and highlights for a bold or natural look.",
      icon: "/service/icon3.png",
    },
    {
      name: "Facials & Skin Care",
      description:
        "Rejuvenating treatments to keep your skin fresh and healthy.",
      icon: "/service/icon4.png",
    },
    {
      name: "Massages",
      description:
        "Relaxing head, neck, and shoulder massages for ultimate stress relief.",
      icon: "/service/icon5.png",
    },
    {
      name: "Manicure & Pedicure",
      description: "Premium hand and foot care for a polished, confident look.",
      icon: "/service/icon6.png",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-[80px]">
      <div className="max-w-[1300px] w-full">
        {/* Video Container */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
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

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Over Video */}
          <div className="absolute inset-0 flex flex-col font-[playfair] items-center justify-center text-white text-center">
            {/* Background Heading */}
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] text-[#FFDFA4] font-[800] absolute z-0 opacity-20">
              SERVICES
            </h1>

            {/* Foreground Paragraph */}
            <p className="mt-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-[600] font-[playfair] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] leading-tight relative z-2">
              Our Exclusive <span className="text-[#CB6F42]">Services</span>
            </p>
          </div>
        </div>
      </div>

      {/* Wrapper for uniform width */}
      <div className="max-w-[1300px] mx-auto">
        {/* Service Section */}
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-16 bg-cover bg-center"
          style={{ backgroundImage: "url('/testi_bg.png')" }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative text-center">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#6b4e38] bg-opacity-80 rounded-xl p-4 sm:p-5 md:p-6 text-white flex flex-col items-center text-center border border-[#e0b380] shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Service Icon */}
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4"
                  />

                  {/* Service Name */}
                  <h3 className="text-[24px] sm:text-[30px] md:text-[35px] font-[600] font-[playfair] border-b-2 border-[#F6F9FF] pb-1 sm:pb-2">
                    {service.name}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-1 sm:mt-2 font-[400] font-[poppins] text-[#F6F9FF]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section1 */}
        <section
          className="relative py-16 px-4 sm:px-6 lg:px-16 bg-cover bg-center"
          style={{ backgroundImage: "url('/pricing/bg1.png')" }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/5"></div>

          {/* Content Container */}
          <div className="relative">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-16 md:mb-20">
              {/* Image */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/pricing/img1.png"
                  alt="Haircut"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Pricing */}
              <div className="mt-6 md:mt-0 md:ml-10 max-w-lg text-center md:text-left">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-[playfair] font-[600] text-[#633B27]">
                  Haircuts & Styling
                </h2>
                <p className="text-[#633B2780] font-[400] font-[poppins] mt-2">
                  A haircut refreshes your look and boosts confidence.
                </p>
                <ul className="mt-4 text-[#633B27] font-[400] font-[poppins] space-y-2 text-base sm:text-lg">
                  {[
                    { name: "Hair Set & styling", price: "₹399" },
                    { name: "Hair Clean Shave", price: "₹399" },
                    { name: "Fade Cut", price: "₹399" },
                    { name: "Undercut", price: "₹399" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-dashed border-gray-400 pb-1"
                    >
                      <span>{item.name}</span> <span>from {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center">
              {/* Image */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/pricing/img2.png"
                  alt="Beard Grooming"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Pricing */}
              <div className="mt-6 md:mt-0 md:mr-10 max-w-lg text-center md:text-left">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-[playfair] font-[600] text-[#5a3a2e]">
                  Beard Grooming
                </h2>
                <p className="text-[#633B2780] font-[poppins] font-[400] mt-2">
                  Beard grooming keeps facial hair neat, healthy, and stylish.
                </p>
                <ul className="mt-4 text-[#633B27] font-[400] font-[poppins] space-y-2 text-base sm:text-lg">
                  {[
                    {
                      name: "Beard Triming & Styling(with cleansing)",
                      price: "₹259",
                    },
                    {
                      name: "Beard Clean Shave(with cleansing)",
                      price: "₹259",
                    },
                    { name: "Stubble Beard", price: "₹259" },
                    { name: "Anchor Beard", price: "₹259" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-dashed border-gray-400 pb-1"
                    >
                      <span>{item.name}</span> <span>from {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section 2 */}
        <section
          className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/pricing/bg2.png')" }} // Replace with actual background image
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/5"></div>

          {/* Content Container (Centered) */}
          <div className="relative w-full max-w-[1300px] mx-auto">
            {/* Top Section (Hair Coloring) */}
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-16 md:mb-20">
              {/* Image on the Left */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/pricing/img3.png"
                  alt="Hair Coloring"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Pricing on the Right */}
              <div className="mt-6 md:mt-0 md:ml-8 lg:ml-12 max-w-lg">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-[600] font-[playfair] text-[#633B27]">
                  Hair Coloring
                </h2>
                <p className="text-[#633B2780] font-[400] font-[poppins] mt-2">
                  A haircut refreshes your look and boosts confidence.
                </p>
                <ul className="mt-4 text-[#633B27] font-[400] font-[poppins] space-y-2 text-base sm:text-lg">
                  {[
                    {
                      name: "Hair Color Application(without color)",
                      price: "₹259",
                    },
                    { name: "Hair Color Loriyal inoa(2, 3, 4)", price: "₹649" },
                    { name: "Beard Color with Application", price: "₹259" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-dashed border-gray-400 pb-1"
                    >
                      <span>{item.name}</span> <span>from {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section (Facials & Skin Care) */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left">
              {/* Image on the Right */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/pricing/img4.png"
                  alt="Facials & Skin Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Pricing on the Left */}
              <div className="mt-6 md:mt-0 md:mr-8 lg:mr-12 max-w-lg">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-[600] font-[playfair] text-[#633B27]">
                  Facials & Skin Care
                </h2>
                <p className="text-[#633B2780] font-[400] font-[poppins] mt-2">
                  Beard grooming keeps facial hair neat, healthy, and stylish.
                </p>
                <ul className="mt-4 text-[#633B27] font-[400] font-[poppins] space-y-2 text-base sm:text-lg">
                  {[
                    { name: "D-Tan O3", price: "₹599" },
                    { name: "Clean Up O3 Facial", price: "₹1099" },
                    { name: " Gold Facial", price: "₹1399" },
                    { name: "Brightning & Whiting", price: "₹1799" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-dashed border-gray-400 pb-1"
                    >
                      <span>{item.name}</span> <span>from {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section 3 */}
        <section
          className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/pricing/bg2.png')" }} // Replace with actual background image
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/5"></div>

          {/* Content Container (Centered) */}
          <div className="relative w-full max-w-[1300px] mx-auto">
            {/* Top Section (Hair Coloring) */}
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-16 md:mb-20">
              {/* Image on the Left */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/pricing/img3.png"
                  alt="Hair Coloring"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Pricing on the Right */}
              <div className="mt-6 md:mt-0 md:ml-8 lg:ml-12 max-w-lg">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-[600] font-[playfair] text-[#633B27]">
                  Massages
                </h2>
                <p className="text-[#633B2780] font-[400] font-[poppins] mt-2">
                Relaxing head, neck, and shoulder massages for ultimate stress relief.                </p>
                <ul className="mt-4 text-[#633B27] font-[400] font-[poppins] space-y-2 text-base sm:text-lg">
                  {[
                    { name: "Head Massage(15 min)", price: "₹159" },
                    { name: "Head & Shoulder(25 min)", price: "₹259" },
                    { name: "Head & Neck Shoulder(40 min)", price: "₹499" },
                    { name: "Full Body Massages", price: "₹999" },
                    { name: "Foot Massage(15 min)", price: "₹259" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-dashed border-gray-400 pb-1"
                    >
                      <span>{item.name}</span> <span>from {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section (Facials & Skin Care) */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left">
              {/* Image on the Right */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/pricing/img4.png"
                  alt="Facials & Skin Care"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text & Pricing on the Left */}
              <div className="mt-6 md:mt-0 md:mr-8 lg:mr-12 max-w-lg">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] font-[600] font-[playfair] text-[#633B27]">
                  Manicure & Pedicure
                </h2>
                <p className="text-[#633B2780] font-[400] font-[poppins] mt-2">
                  Premium hand and foot care for a polished, confident look.
                </p>
                <ul className="mt-4 text-[#633B27] font-[400] font-[poppins] space-y-2 text-base sm:text-lg">
                  {[
                    { name: "Express Padicure", price: "₹599" },
                    { name: "Deep Pedicure", price: "₹1199" },
                    { name: "Express Manicure", price: "₹599" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-dashed border-gray-400 pb-1"
                    >
                      <span>{item.name}</span> <span>from {item.price}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Discount Section */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[400px]">
        {/* Left Section (Text) */}
        <div className="bg-[#B66A3D] text-white flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-10 md:w-1/2 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[playfair] font-[600] text-[#633B27]">
            <span className="text-white font-[inter]">25%</span> DISCOUNT
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFFFF] font-[poppins]">
            Enjoy a 25% discount on all our premium services! Treat yourself to
            expert haircuts, relaxing massages, rejuvenating facials, and
            top-notch grooming at an unbeatable price. Limited-time offer—book
            your appointment today!
          </p>
          <Link to="/book-appointment">
            <button className="mt-4 bg-white text-[#633B27] px-4 sm:px-6 py-2 text-sm sm:text-base font-[600] font-[poppins] hover:bg-gray-200">
              Book Now
            </button>
          </Link>
        </div>

        {/* Right Section (Image) */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center bg-[#6B4226]">
          <img
            src="/pricing/men.png" // Change this to your actual image path
            alt="Discount Offer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
