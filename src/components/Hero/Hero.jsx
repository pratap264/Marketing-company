import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import yellowCar from "../../assets/website/il-2-ed.png"; // Ensure this is a PNG with a transparent background
import yellowCar2 from "../../assets/website/bg-3.jpg"; // Background image

const Hero = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLearnMoreClick = () => {
    navigate("/services"); // Navigate to the services page
  };

  return (
    <div
      className="duration-300"
      style={{
        backgroundImage: `url(${yellowCar2})`, // Use yellowCar2 as the background image
        backgroundSize: "cover", // Make sure the image covers the entire space
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Make the background image fixed during scroll
        minHeight: "100vh", // Ensure the hero section takes up full viewport height
      }}
    >
      <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt="Yellow Car"
              className="w-full sm:max-w-[580px] md:max-w-[630px] rounded-xl object-cover object-center"
              style={{
                height: "auto", // Ensures that the aspect ratio is maintained
                width: "100%",
                objectPosition: "center", // Centers the car image within the box
              }}
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-5xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              {["Building", "Brands", "in", "the"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-reveal font-ubuntu"
                  style={{ animationDelay: `${index * 0.2}s` }} // Faster delay
                >
                  {word}
                  {index < 3 && "\u00A0"}{" "}
                  {/* Non-breaking space between words */}
                </span>
              ))}
              <h1
              data-aos="fade-up"
              className="text-6xl sm:text-6xl font-semibold font-ubuntu"
            >
               <span className="text-primary">
                {["Digital", "World"].map((word, index) => (
                  <span
                    key={index + 4} // Ensure unique key for the second set of words
                    className="inline-block opacity-0 animate-reveal"
                    style={{ animationDelay: `${(index + 4) * 0.2}s` }} // Faster delay
                  >
                    {word}
                    {index < 7 && "\u00A0"}{" "}
                    {/* Non-breaking space between words */}
                  </span>
                ))}
              </span>
            </h1>
             
            </h1>

            {/* Subheadline with AOS fade-up animation */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="subheadline font-lato font-base text-xl"
            >
              Innovative strategies, measurable results, and tailored solutions
              to grow your business.
            </p>

            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn font-lato"
              onClick={handleLearnMoreClick} // Added onClick handler
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
