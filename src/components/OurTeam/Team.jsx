import { useNavigate } from 'react-router-dom';
import john_doe from '../../assets/our_team/john_doe.png';
import jane_smith from '../../assets/our_team/jane_smith.png';
import michel_lee from '../../assets/our_team/michel_lee.png';
import sarah_kim from '../../assets/our_team/sarah_kim.png';

const teamMembersData = [
  {
    name: "John Doe",
    role: "Web Developer",
    photo: john_doe,
    aosDelay: "0",
  },
  {
    name: "Jane Smith",
    role: "Product Designer",
    photo: jane_smith,
    aosDelay: "300",
  },
  {
    name: "Michael Lee",
    role: "Branding Specialist",
    photo: michel_lee,
    aosDelay: "500",
  },
  {
    name: "Sarah Kim",
    role: "UI/UX Designer",
    photo: sarah_kim,
    aosDelay: "700",
  },
];

const Team = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/services'); // Replace with your desired route
    setTimeout(() => {
      const middleContent = document.getElementById('middle-content'); // Your target element's ID
      if (middleContent) {
        middleContent.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element
      }
    }, 100); // Timeout to allow navigation before scrolling
  };

  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mb-8">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-3xl text-black-950 mb-6  font-black"
            >
              Our Team
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-sm pb-6px"
            >
              From concept to delivery, our team ensures every step is carefully crafted for exceptional results.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5 mb-10">
            {teamMembersData.map((member) => (
              <div
                key={member.name}
                data-aos="fade-up"
                data-aos-delay={member.aosDelay}
                className="team-member-card space-y-3 sm:space-y-4 p-4 text-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto"
                />
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
