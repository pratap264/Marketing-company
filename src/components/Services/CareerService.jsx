import { FaDigitalOcean } from "react-icons/fa";
import { TbDeviceImacSearch } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";
import yellowCar from "../../assets/website/5.png"; // You can remove this import if it's not needed.

const skillsData = [
  {
    name: "Digital Marketing Specialist",
    icon: <FaDigitalOcean className="text-4xl text-primary" />,
    link: "#",
    description:
      "Responsible for planning and executing multi-channel marketing campaigns.",
    aosDelay: "0",
  },
  {
    name: "SEO Analyst",
    icon: <TbDeviceImacSearch className="text-4xl text-primary" />,
    link: "#",
    description:
      "Optimize websites to improve visibility and search engine rankings.",
    aosDelay: "300",
  },
  {
    name: "Social Media Manager",
    icon: <RiAdminFill className="text-4xl text-primary" />,
    link: "#",
    description:
      "Create and manage content to drive engagement across social platforms.",
    aosDelay: "500",
  },
  {
    name: "CTA Section",
    icon: <VscCallOutgoing className="text-4xl text-primary" />,
    link: "#",
    description:
      "Don’t see a position that fits? Send us your resume at careers@garageadvertisements.com.",
    aosDelay: "700",
  },
];

const CareerService = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8">
            <h1
              data-aos="fade-up"
              className="text-4xl font-semibold sm:text-4xl text-violet-950 uppercase"
            >
              Why Work with Us
            </h1>
            <br />
            {/* Space between Heading and Points */}
            <div className="mt-6">
              {/* Point Circle Icons */}
              <ul className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm sm:text-base">
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Collaborative and innovative environment</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Opportunities for growth and learning</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Competitive compensation and benefits</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image above skillsData section */}
          <div className="text-center my-8">
            <img
              src={yellowCar} // Replace with the URL of your image
              alt="Career Image"
              className="w-full max-w-xl mx-auto rounded-lg" // Adjust max-w-xl to a smaller value
            />
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              className="primary-btn"
              onClick={() => (window.location.href = "https://forms.gle/qrMgUkXB9g13JRbd8")}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerService;






