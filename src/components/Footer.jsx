import React from "react";
import { useNavigate,Link } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate("/book-appointment");
  };
  return (
    <div>
      <footer
        className="relative py-20 px-6 bg-cover bg-center font-[poppins]"
        style={{
          backgroundImage: "url('/footer_bg.png')",
        }}
      >
        <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white">
          {/* Left Section - Brand Info */}
          <div>
            <h2 className="text-3xl font-bold flex items-center">
              <img src="/logo.png" alt="Happy Hour Logo" className="h-12" />
            </h2>
            <p className="mt-4 text-[#080808]">
              Happy Hour Salon offers exclusive discounts on haircuts, massages,
              and facials during specific hours. Enjoy top-quality services at
              unbeatable prices—pamper yourself and save big!
            </p>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-white bg-[#CB6F4266] opecity-40 text-black focus:outline-none placeholder:text-[#633B27] font-[500]"
              />
              <button className="mt-3 w-[180px] bg-[#633B27] text-white py-3 rounded-md hover:bg-[#A45B35] transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Middle Section - Services */}
          <div>
            <h3 className="text-lg text-[#633B27] font-[600]">Services</h3>
            <ul className="mt-3 space-y-2 text-[#633B27] font-[400]">
              {[
                "Haircuts & Styling",
                "Beard Grooming",
                "Hair Coloring",
                "Facials & Skin Care",
                "Massages",
                "Manicure & Pedicure",
              ].map((service, index) => (
                <li
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="cursor-pointer hover:underline"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Section - Company Info */}
          <div>
            <h3 className="text-lg text-[#633B27] font-[600]">Company</h3>
            <ul className="mt-3 space-y-2 text-[#633B27] font-[400]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-service">Our Service</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/book-appointment">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Right Section - Social Links & Business Hours */}
          <div>
            <h3 className="text-lg text-[#633B27] font-[600]">Social Links</h3>
            <div className="mt-3 flex space-x-4 text-2xl">
              <a href="#" className="hover:text-[#A45B35]">
                <img src="/social/ffb.png" />
              </a>
              <a href="#" className="hover:text-[#A45B35]">
                <img src="/social/fyoutube.png" />
              </a>
              <a href="#" className="hover:text-[#A45B35]">
                <img src="/social/finsta.png" />
              </a>
            </div>

            {/* Business Hours */}
            <div className="mt-6 font-[400] text-[#633B27]">
              <p>Open Every Day</p>
              <p className="font-semibold">10:00 - 21:00 WB</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="my-8 border-t border-[#633B27]" />
        <p className="text-center text-[#633B27] text-sm relative">
          © 2025 GET SET LOOK COPYRIGHT@GETSETLOOK | RESERVE RIGHT AND DEVELOPED
          BY SECWEBXPERTS PVT LTD.
        </p>
      </footer>
    </div>
  );
}
