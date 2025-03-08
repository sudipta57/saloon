import React from "react";

export default function Footer() {
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
              <li>Haircuts & Styling</li>
              <li>Beard Grooming</li>
              <li>Hair Coloring</li>
              <li>Facials & Skin Care</li>
              <li>Massages</li>
              <li>Manicure & Pedicure</li>
            </ul>
          </div>

          {/* Middle Section - Company Info */}
          <div>
            <h3 className="text-lg text-[#633B27] font-[600]">Company</h3>
            <ul className="mt-3 space-y-2 text-[#633B27] font-[400]">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Settings</li>
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
          © 2024 Happy Hour Pvt Ltd. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
