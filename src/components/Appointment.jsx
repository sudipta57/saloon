import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Import icons

const servicesData = [
  {
    category: "HairCut",
    icon: "/AppointmentIcon/cut.png",
    subServices: [
      { name: "Haircuts (20 min)", price: 399 },
      { name: "Kids Haircut", price: 299 },
    ],
  },
  {
    category: "Beard Grooming",
    icon: "/AppointmentIcon/groming.png",
    subServices: [
      { name: "Beard Trim", price: 199 },
      { name: "Shaving", price: 149 },
    ],
  },
  {
    category: "Hair Coloring",
    icon: "/AppointmentIcon/hair.png",
    subServices: [
      { name: "Full Color", price: 999 },
      { name: "Highlights", price: 699 },
    ],
  },
  {
    category: "Facials & Skin Care",
    icon: "/AppointmentIcon/facial.png",
    subServices: [
      { name: "Deep Cleansing", price: 499 },
      { name: "Hydration Treatment", price: 599 },
    ],
  },
  {
    category: "Massages",
    icon: "/AppointmentIcon/massage.png",
    subServices: [
      { name: "Head Massage", price: 399 },
      { name: "Full Body Massage", price: 1299 },
    ],
  },
  {
    category: "Manicure & Pedicure",
    icon: "/AppointmentIcon/meni.png",
    subServices: [
      { name: "Manicure", price: 499 },
      { name: "Pedicure", price: 599 },
    ],
  },
];

export default function Appointment() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    address: "",
  });

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleService = (serviceName, price) => {
    setSelectedServices((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (service) => service.name === serviceName
      );

      return isAlreadySelected
        ? prevSelected.filter((service) => service.name !== serviceName)
        : [...prevSelected, { name: serviceName, price }];
    });
  };

  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => /^[1-9][0-9]{9}$/.test(phone);

  const formatTime = (time) => {
    let [hours, minutes] = time.split(":");
    let period = +hours >= 12 ? "PM" : "AM";
    hours = +hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  };

  const sendWhatsAppMessage = () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.address
    ) {
      alert("All fields are required.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert("Phone number must be 10 digits and cannot start with 0.");
      return;
    }

    const serviceList = selectedServices
      .map((s) => `- ${s.name} (₹${s.price})`)
      .join("\n");

    const message = `*New Booking Appointment*
      
  *Name:* ${formData.fullName}
  *Phone:* ${formData.phone}
  *Email:* ${formData.email}
  *Preferred Date:* ${formData.date}
  *Preferred Time:* ${formatTime(formData.time)}
  *Address:* ${formData.address}
  
  *Selected Services:* 
  ${serviceList || "No services selected"}
  
  *Total Price:* ₹${totalPrice}
  
  Thank you! 😊`;

    const phoneNumber = "916291170712"; // Replace with your WhatsApp number (without '+' sign)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

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
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[80px]">
      {/* Left Section */}
      <div className="col-span-1">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-[600] font-[playfair] text-[#633B27] mb-4">
          Happy Hour <span className="text-[#CB6F42]">Services</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 bg-[#FDF7F0] p-4 sm:p-6 border-[#CB6F42] border rounded-xl">
          {[
            { name: "Haircuts & Styling", image: "/service/img1.png" },
            { name: "Beard Grooming", image: "/service/img2.png" },
            { name: "Hair Coloring", image: "/service/img3.png" },
            { name: "Facials & Skin Care", image: "/service/img4.png" },
            { name: "Massages", image: "/service/img5.png" },
            { name: "Manicure & Pedicure", image: "/service/img6.png" },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 sm:p-3"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg mb-2 border-4 border-[#CB6F42]"
              />
              <p className="font-[500] text-[#633B27] font-[poppins] text-[14px] sm:text-[16px]">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 p-4 sm:p-6 bg-white">
        {/* Video Section */}
        <div className="w-full h-56 sm:h-72 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
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
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center z-3 transition-all"
          >
            {isPlaying ? (
              <FaPause className="text-white text-4xl md:text-5xl" />
            ) : (
              <FaPlay className="text-white text-4xl md:text-5xl" />
            )}
          </button>
        </div>

        {/* Service Categories & Booking Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          {/* Service Categories */}
          <div className="p-4 border border-[#CB6F42] rounded-lg bg-[#FFF9EF]">
            <h2 className="text-[20px] sm:text-[24px] text-[#CB6F42] font-[700] font-[playfair] mb-4">
              Service Categories
            </h2>

            {servicesData.map((service, index) => (
              <div key={index} className="mb-2 last:border-0">
                <button
                  onClick={() => toggleCategory(service.category)}
                  className="w-full flex items-center justify-between bg-[#FFEED1] px-4 py-3 text-left font-[500] font-[poppins] text-[#633B27] rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={service.icon}
                      alt={service.category}
                      className="w-5 h-5"
                    />
                    <span>{service.category}</span>
                  </div>
                  <span>
                    {expandedCategory === service.category ? "▼" : "▶"}
                  </span>
                </button>

                {expandedCategory === service.category && (
                  <div className="p-2 bg-[#FFEED1]">
                    {service.subServices.map((subService, subIndex) => (
                      <label
                        key={subIndex}
                        className="block py-1 text-[#000000] font-[275] font-[poppins] flex justify-between"
                      >
                        <div>
                          <input
                            type="checkbox"
                            checked={selectedServices.some(
                              (s) => s.name === subService.name
                            )}
                            onChange={() =>
                              toggleService(subService.name, subService.price)
                            }
                            className="mr-2"
                          />
                          {subService.name}
                        </div>
                        <span className="font-[300] font-[inter]">
                          ₹{subService.price}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="p-4 border border-[#CB6F42] rounded-lg bg-[#FFF9EF]">
            <h2 className="text-[20px] sm:text-[24px] font-[700] mb-4 font-[playfair] text-[#CB6F42]">
              Complete Your Booking
            </h2>

            {/* Selected Services */}
            <div className="bg-[#FFEED1] px-3 py-2 mb-3 rounded-lg">
              <p className="mb-2 font-[500] text-[#633B27] font-[poppins]">
                Selected Services:
              </p>
              <ul className="mb-2">
                {selectedServices.map((service, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex justify-between"
                  >
                    <span>{service.name}</span>
                    <span className="font-semibold">₹{service.price}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right font-[600] text-[#633B27]">
                Total: ₹{totalPrice}
              </div>
            </div>
            {/* Booking Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block font-[500] text-[#633B27] font-[poppins]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#00000066] rounded mb-2"
              />

              <label className="block font-[500] text-[#633B27] font-[poppins]">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                required
                pattern="[1-9][0-9]{9}"
                className="w-full p-2 border border-[#00000066] rounded mb-2"
              />

              <label className="block font-[500] text-[#633B27] font-[poppins]">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#00000066] rounded mb-2"
              />

              <label className="block font-[500] text-[#633B27] font-[poppins]">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#00000066] rounded mb-2"
              />

              <label className="block font-[500] text-[#633B27] font-[poppins]">
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#00000066] rounded mb-2"
              />

              <label className="block font-[500] text-[#633B27] font-[poppins]">
                Address
              </label>
              <textarea
                name="address"
                onChange={handleChange}
                required
                className="w-full p-2 border border-[#00000066] rounded mb-2"
              />

              <button
                type="button"
                onClick={sendWhatsAppMessage}
                className="w-full bg-[#CB6F42] text-white p-3 rounded-lg font-[600] font-[poppins]"
              >
                BOOK APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
