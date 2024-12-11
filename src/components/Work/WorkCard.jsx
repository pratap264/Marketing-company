import PropTypes from "prop-types";  // Import PropTypes
import { FaArrowRight } from "react-icons/fa6";

const WorkCard = ({ image, title, description }) => {
  return (
    <div className="group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title} // Use the title as the alt text (or a specific description if relevant)
          className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
        />
      </div>
      <div className="space-y-2 p-4 ml-6 bg-white -translate-y-16 group-hover:text-primary">
        <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
        <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Define PropTypes for validation
WorkCard.propTypes = {
  image: PropTypes.string.isRequired,   // Ensures 'image' is a string and required
  title: PropTypes.string.isRequired,   // Ensures 'title' is a string and required
  description: PropTypes.string.isRequired,  // Ensures 'description' is a string and required
};

export default WorkCard;

