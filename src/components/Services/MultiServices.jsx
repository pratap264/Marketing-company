import { FaCameraRetro } from "react-icons/fa";
import { GiBowenKnot } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { SiAltiumdesigner } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { SiGooglesearchconsole } from "react-icons/si";
import { GiClick } from "react-icons/gi";
import { SiMediamarkt } from "react-icons/si";
import { SiContentful } from "react-icons/si";
import { SiHandshake } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { FaRegCommentDots } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const skillsData3 = [
  {
    name: "Search Engine Optimization (SEO)",
    icon: <SiGooglesearchconsole className="text-4xl text-primary" />,
    link: "#",
    description:
      "Rank higher on search engines and drive organic traffic to your website with our expert SEO services.",
    aosDelay: "0",
  },
  {
    name: "Pay-Per-Click Advertising (PPC)",
    icon: <GiClick className="text-4xl text-primary" />,
    link: "#",
    description:
      "Maximize your ROI with precision-targeted ad campaigns on platforms like Google, Facebook, and more.",
    aosDelay: "300",
  },
  {
    name: "Social Media Marketing",
    icon: <SiMediamarkt className="text-4xl text-primary" />,
    link: "#",
    description:
      "Boost engagement, build community, and increase brand awareness on all major social platforms.",
    aosDelay: "500",
  },
  {
    name: "Influencer Marketing",
    icon: <SiContentful className="text-4xl text-primary" />,
    link: "#",
    description:
      "Tap into the reach of influencers to amplify your brand message. Build trust and drive engagement with authentic partnerships.",
    aosDelay: "700",
  },
];

const skillsData2 = [
  {
    name: "Web Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Create user-friendly, responsive websites designed to convert visitors into customers.",
    aosDelay: "0",
  },
  {
    name: "Email Marketing",
    icon: <GiBowenKnot className="text-4xl text-primary" />,
    link: "#",
    description:
      "Nurture leads and drive sales with personalized email campaigns.",
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

const skillsData = [
  {
    name: "Product Sampling",
    icon: <SiHandshake className="text-4xl text-primary" />,
    link: "#",
    description:
      "Showcase your products to target audiences through strategic sampling initiatives.",
    aosDelay: "0",
  },
  {
    name: "E-Commerce Reviews",
    icon: <SiShopify className="text-4xl text-primary" />,
    link: "#",
    description:
      "Enhance your product’s credibility with authentic and impactful e-commerce reviews.",
    aosDelay: "300",
  },
  {
    name: "Online Reputation Management",
    icon: <FaRegCommentDots className="text-4xl text-primary" />,
    link: "#",
    description:
      "Protect and improve your brand’s online presence with proactive reputation management strategies.",
    aosDelay: "500",
  },
  {
    name: "Public Relations Building",
    icon: <FaBuilding className="text-4xl text-primary" />,
    link: "#",
    description:
      "Establish strong relationships with media and stakeholders to build a positive public image.",
    aosDelay: "700",
  },
];

const MultiServices = () => {
  return (
    <div id="middle-content">
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8 mb-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-4xl text-violet-950 mb-8"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-md pb-6px mt-10px"
            >
              From the inception of a project to its completion, we employ a
              comprehensive and holistic approach that ensures all aspects and
              stages are thoughtfully and thoroughly addressed.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 hover-text-primary">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {skill.name}
                </h1> {/* Added hover effect */}
                <p className="text-gray-600 text-md">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData2.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {skill.name}
                </h1> {/* Added hover effect */}
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData3.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {skill.name}
                </h1> {/* Added hover effect */}
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiServices;

