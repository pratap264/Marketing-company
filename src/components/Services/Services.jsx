import { FaCameraRetro } from "react-icons/fa";
import { GiBowenKnot } from "react-icons/gi";
import { SiAltiumdesigner, SiAffinitydesigner } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const skillsData = [
  {
    name: "Web Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "From simple websites to complex platforms, we build solutions that drive results.",
    aosDelay: "0",
  },
  {
    name: "Digital Product Design",
    icon: <GiBowenKnot className="text-4xl text-primary" />,
    link: "#",
    description:
      "Expert digital product design for seamless, engaging, and user-centered experiences.",
    aosDelay: "300",
  },
  {
    name: "Branding Design",
    icon: <SiAltiumdesigner className="text-4xl text-primary" />,
    link: "#",
    description:
      "Crafting iconic brands that resonate with your audience and drive success.",
    aosDelay: "500",
  },
  {
    name: "UI/UX Web Design",
    icon: <SiAffinitydesigner className="text-4xl text-primary" />,
    link: "#",
    description:
      "Designing intuitive, user-centered interfaces for exceptional web experiences.",
    aosDelay: "700",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services"); // Replace with your desired route
    setTimeout(() => {
      const middleContent = document.getElementById("middle-content"); // Your target element's ID
      if (middleContent) {
        middleContent.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
      }
    }, 100); // Timeout to allow navigation before scrolling
  };

  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-black-950 mb-8"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-md pb-6px"
            >
              From the inception of a project to its completion, we employ a comprehensive and holistic approach that ensures all aspects and stages are thoughtfully and thoroughly addressed.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 text-md">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-16 sm:mt-8 mb-8"
          >
            <button className="primary-btn" onClick={handleButtonClick}>
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

