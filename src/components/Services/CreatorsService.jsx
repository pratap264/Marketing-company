import { FaClipboardList } from "react-icons/fa"; // For Campaign Briefing
import { FaHandsHelping } from "react-icons/fa"; // For Collaboration
import { FaFileAlt } from "react-icons/fa"; // For Content Development
import { FaRegEdit } from "react-icons/fa"; // For Revisions
import { FaPlayCircle } from "react-icons/fa"; // For Implementation
import { FaDollarSign } from "react-icons/fa"; // For Payment
import yellowCar from "../../assets/website/Creators_rr.png"; // You can remove this import if it's not needed.

const campaignSteps = [
  {
    name: "Campaign Briefing",
    icon: <FaClipboardList className="text-4xl text-primary" />,
    description: "We share detailed campaign requirements with you.",
    aosDelay: "0",
  },
  {
    name: "Collaboration",
    icon: <FaHandsHelping className="text-4xl text-primary" />,
    description: "You partner with our brands to create impactful content.",
    aosDelay: "300",
  },
  {
    name: "Content Development",
    icon: <FaFileAlt className="text-4xl text-primary" />,
    description: "Ad campaigns are curated to align with client objectives.",
    aosDelay: "500",
  },
  {
    name: "Revisions",
    icon: <FaRegEdit className="text-4xl text-primary" />,
    description: "Incorporate feedback to ensure client satisfaction.",
    aosDelay: "700",
  },
  {
    name: "Implementation",
    icon: <FaPlayCircle className="text-4xl text-primary" />,
    description: "Utilize your platforms to execute the campaigns.",
    aosDelay: "900",
  },
  {
    name: "Payment",
    icon: <FaDollarSign className="text-4xl text-primary" />,
    description: "Get compensated directly by us on behalf of the client.",
    aosDelay: "1100",
  },
];

const CreatorsService = () => {
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
              How It Works
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
                  <span>Partner with top brands</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Enhance your reach and skills</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Get paid for your work</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Image above skillsData section */}
          <div className="text-center my-8">
            <img
              src={yellowCar} // Replace with the URL of your image
              alt="Career Image"
              className="w-full max-w-3xl mx-auto rounded-lg"
              data-aos="zoom-in" // Add the AOS zoom-in animation
              data-aos-duration="1000" // Duration of the animation
              data-aos-delay="200" // Delay before the animation starts
            />
          </div>

          {/* Campaign Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {campaignSteps.map((step) => (
              <div
                key={step.name}
                data-aos="fade-up"
                data-aos-delay={step.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{step.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary transition-colors duration-300">{step.name}</h1>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div> 

          {/* Button */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              className="primary-btn"
              onClick={() =>
                (window.location.href = "https://forms.gle/qrMgUkXB9g13JRbd8")
              }
            >
              Apply Now
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CreatorsService;
