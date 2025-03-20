import React, { useState } from "react";
import { FaCut, FaStore } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers
      if (!/^\d*$/.test(value)) return;

      // Restrict length to 10 digits
      if (value.length > 10) return;

      // First digit should not be 0
      if (value.length === 1 && value[0] === "0") return;
    }

    setFormData({ ...formData, [name]: value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (including country code)
    const whatsappNumber = "916291170712"; // Example: "919876543210" for India

    // Formatting the message
    const message = `Hello, I would like to inquire:
    
- *Name:* ${formData.firstName} ${formData.lastName}
- *Email:* ${formData.email}
- *Phone:* ${formData.phone}
- *State:* ${formData.state}
- *City:* ${formData.city}
- *Comment:* ${formData.comment}
    
Please let me know.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    // Reset form after sending
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      comment: "",
    });
  };
  return (
    <div className=" justify-center items-center lg:mt-[80px] sm:mt-[40px]md:mt-[60px] mt-[80px]">
      <div className="w-full max-w-[1300px] px-4 sm:px-6 md:px-8 lg:px-0">
        <iframe
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.9537353153207!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1a8c3fd%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1648089785930!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* nothing */}
      <div className="bg-[#5B3A28] py-16">
        <div className="max-w-[600px] mx-auto flex flex-col md:flex-row justify-around items-center text-center gap-5">
          {/* Shaves */}
          <div className="flex flex-col items-center text-[#FFDFA4]">
            <GiRazor className="text-5xl mb-2" />
            <h2 className="text-4xl text-[#FFDFA4] font-[inter] font-[600]">
              250
            </h2>
            <p className="text-sm uppercase tracking-wide text-[#FFDFA4] font-[poppins]">
              Shaves
            </p>
          </div>

          {/* Haircuts */}
          <div className="flex flex-col items-center text-[#FFDFA4]">
            <FaCut className="text-5xl mb-2" />
            <h2 className="text-4xl text-[#FFDFA4] font-[inter] font-[600]">
              500
            </h2>
            <p className="text-sm uppercase tracking-wide text-[#FFDFA4] font-[poppins]">
              Haircuts
            </p>
          </div>

          {/* Open Shops */}
          <div className="flex flex-col items-center text-[#FFDFA4]">
            <FaStore className="text-5xl mb-2" />
            <h2 className="text-4xl text-[#FFDFA4] font-[inter] font-[600]">
              3
            </h2>
            <p className="text-sm uppercase tracking-wide text-[#FFDFA4] font-[poppins]">
              Open Shops
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="relative w-full py-16 flex justify-center items-center px-4 sm:px-6 md:px-8">
        {/* Background Layers */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#c86d3d]"></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/pricing/bg1.png')" }}
        ></div>

        {/* Appointment Card */}
        <div className="relative w-full max-w-[1000px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 w-full p-6 sm:p-8 flex justify-center items-center bg-white">
            <img
              src="/appointment_img.png"
              alt="Barber Illustration"
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-sm h-auto"
            />
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-1/2 w-full p-6 sm:p-8">
            <h3 className="text-xs sm:text-sm font-medium text-[#6B0606] font-[Poppins]">
              GET SET LOOK
            </h3>
            <h2 className="text-3xl sm:text-[35px] md:text-[40px] font-bold font-[Playfair] mt-2">
              Book <span className="text-[#c86d3d]">Appointment</span>
            </h2>
            <p className="text-gray-700 font-[Poppins] mt-2 text-sm sm:text-base">
              We provide royal services in Kolkata.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#000000] font-[500] font-[Poppins]">
                <div className="flex flex-col">
                  <label className="text-sm sm:text-base">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="First name"
                    className="px-3 py-2 border rounded w-full bg-gray-50 text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm sm:text-base">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Last name"
                    className="px-3 py-2 border rounded w-full bg-gray-50 text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="px-3 py-2 border rounded w-full bg-gray-50 text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Phone Number"
                    pattern="^[1-9][0-9]{9}$" // HTML validation (ensures first digit is not 0 and length is 10)
                    title="Phone number must be 10 digits and should not start with 0"
                    className="px-3 py-2 border rounded w-full bg-gray-50 text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm sm:text-base">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    placeholder="State"
                    className="px-3 py-2 border rounded w-full bg-gray-50 text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm sm:text-base">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="City"
                    className="px-3 py-2 border rounded w-full bg-gray-50 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 text-[#000000] font-[500] font-[Poppins]">
                <label className="text-sm sm:text-base">Comment</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="How can I help you today?"
                  className="px-3 py-2 border rounded w-full min-h-[100px] bg-gray-50 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#633B27] text-white p-3 mt-6 rounded text-lg sm:text-xl font-bold hover:bg-[#3d1e08] transition font-[Playfair]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* discount section */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[400px]">
        {/* Left Section (Text) */}
        <div className="bg-[#B66A3D] text-white flex flex-col justify-center items-start p-8 md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-[playfair] font-[600] text-[#633B27]">
            <span className="text-white font-[inter]">25%</span> DISCOUNT
          </h2>
          <p className="mt-2 text-[#FFFFFF] font-[poppins]">
            Enjoy a 25% discount on all our premium services! Treat yourself to
            expert haircuts, relaxing massages, rejuvenating facials, and
            top-notch grooming at an unbeatable price. Limited-time offer—book
            your appointment today!
          </p>
          <Link to="/book-appointment">
            <button className="mt-4 bg-white text-[#633B27] px-6 py-2 font-[600] font-[poppins] hover:bg-gray-200">
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
