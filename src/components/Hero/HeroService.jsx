import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import yellowCar from "../../assets/website/il-7.png";
import yellowCar2 from "../../assets/website/bg-2.jpg"; // New background image

const HeroService = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLearnMoreClick = () => {
    navigate("/services"); // Navigate to the services page
    setTimeout(() => {
      const middleContent = document.getElementById("middle-content"); // Your target element's ID
      if (middleContent) {
        middleContent.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
      }
    }, 100); // Timeout to allow navigation before scrolling
  };

  return (
    <div
      className="duration-300"
      style={{
        backgroundImage: `url(${yellowCar2})`, // Change the background image to yellowCar2
        backgroundSize: "cover", // Make sure the image covers the entire space
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Make the background image fixed during scroll (optional)
        minHeight: "100vh", // Ensure the hero section takes up full viewport height
      }}
    >
      <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0 font-lato">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt="Service Image"
              className="w-full sm:max-w-[580px] md:max-w-[630px] rounded-2xl"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold font-ubuntu"
              style={{ lineHeight: 1.3 }}
            >
              {["Comprehensive", "Digital"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-reveal"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {word}
                  {index < 3 && "\u00A0"}{" "}
                  {/* Non-breaking space between words */}
                </span>
              ))}
              <h1
                data-aos="fade-up"
                className="text-5xl sm:text-5xl font-semibold font-ubuntu"
                style={{ lineHeight: 1.3 }}
              >
                <span className="text-primary">
                  {["Marketing", "Solutions"].map((word, index) => (
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
              className="subheadline font-bold text-xl"
            >
              We offer a full range of digital marketing services, from strategy
              development to execution, ensuring your campaign is optimized for
              success.
            </p>

            {/* Learn More Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
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

export default HeroService;
