import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import yellowCar from "../../assets/website/rb_2132.png"; // You can remove this import if it's not needed.
import yellowCar2 from "../../assets/website/bg-2.jpg"; // New background image

const HeroCreators = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetInTouchClick = () => {
    navigate("/contact"); // Redirect to the contact page
  };

  return (
    <div
      className="dark:bg-gray-950 dark:text-white duration-300"
      style={{
        backgroundImage: `url(${yellowCar2})`, // Use the same background image as in HeroService
        backgroundSize: "cover", // Make sure the image covers the entire space
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Make the background image fixed during scroll (optional)
        minHeight: "100vh", // Ensure the hero section takes up full viewport height
      }}
    >
      <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0 font-ubuntu">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar} // Use the car image you have or remove if unnecessary
              alt="Career Image"
              className="w-full sm:max-w-[680px] md:max-w-[730px] rounded-2xl"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold font-ubantu"
              style={{
                lineHeight: 1.5,
                marginBottom: "20px", // Adjust margin to shift the headline upwards
              }}
            >
              {["Inviting ", "Creators ", "to "].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-reveal"
                  style={{ animationDelay: `${index * 0.2}s` }} // Faster delay
                >
                  {word}
                  {index < 3 && "\u00A0"}{" "}
                  {/* Non-breaking space between words */}
                </span>
              ))}
              <h1
                data-aos="fade-up"
                className="text-5xl sm:text-5xl font-semibold font-ubantu"
                style={{
                  lineHeight: 1.2,
                  marginBottom: "20px", // Adjust margin to shift the headline upwards
                }}
              >
                <span className="text-primary">
                  {["Monetize ", "Their ", "Content"].map((word, index) => (
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
              style={{
                marginBottom: "30px", // Adjust margin to shift the subheadline upwards
              }}
            >
              {
                "At Garage Advertisements, we bridge the gap between top brands and influencers, enabling content creators from various domains to collaborate with leading companies. By monetizing your reach, you can enhance brand visibility and contribute to innovative marketing strategies."
              }
            </p>

            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
              onClick={handleGetInTouchClick} // Attach the click handler
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCreators;
