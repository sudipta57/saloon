import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      image: "/testimoni.png",
      name: "John Doe",
      rating: 5,
      review:
        "An exceptional grooming experience! The attention to detail, premium products, and luxurious ambiance make this salon stand out. My haircut and beard trim were executed to perfection, leaving me feeling confident and refreshed. Highly recommended!",
    },
    {
      image: "/testimoni.png",
      name: "Jane Smith",
      rating: 4,
      review:
        "Great experience! The services were top-notch, and the staff was very professional. I felt well taken care of. Would definitely return!",
    },
    {
      image: "/testimoni.png",
      name: "Michael Lee",
      rating: 5,
      review:
        "Fantastic salon with excellent services! The atmosphere is very relaxing, and the team is highly skilled. Highly recommended!",
    },
    {
      image: "/testimoni.png",
      name: "John Doe",
      rating: 5,
      review:
        "An exceptional grooming experience! The attention to detail, premium products, and luxurious ambiance make this salon stand out. My haircut and beard trim were executed to perfection, leaving me feeling confident and refreshed. Highly recommended!",
    },
    {
      image: "/testimoni.png",
      name: "Jane Smith",
      rating: 4,
      review:
        "Great experience! The services were top-notch, and the staff was very professional. I felt well taken care of. Would definitely return!",
    },
    {
      image: "/testimoni.png",
      name: "Michael Lee",
      rating: 5,
      review:
        "Fantastic salon with excellent services! The atmosphere is very relaxing, and the team is highly skilled. Highly recommended!",
    },
  ];
  return (
    <div>
      {/* Background Image with Opacity */}
      <div
        className="relative py-4  px-4 sm:px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/testi_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-[#633B2794]"></div>

        {/* Content Container */}
        <div className="relative max-w-[1300px] mx-auto text-center">
          {/* Background Title */}
          <div className="relative inline-block font-[playfair] mb-2 items-center">
            <h2 className="absolute text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-[800] text-[#FFDDCC1A] uppercase select-none inset-x-0 top-0 leading-none">
              Testimony
            </h2>

            {/* Foreground Title */}
            <h2 className="relative mt-8 px-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[600] text-[#FFFFFF] z-3">
              Hear from Our Satisfied{" "}
              <span className="text-[#633B27]">Customers</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="relative mt-12 py-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-[#633B27C9] bg-opacity-80 text-white p-6 rounded-lg shadow-lg"
              >
                {/* User Image */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-4 border-white shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="mt-12">
                  {/* Star Ratings */}
                  <div className="flex justify-center mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-white text-lg">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map(
                      (_, i) => (
                        <span key={i} className="text-gray-400 text-lg">
                          ★
                        </span>
                      )
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm md:text-base font-[poppins] font-[400] text-[#FFFFFF] leading-relaxed">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
