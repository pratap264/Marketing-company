import React, { useState, useEffect, useLayoutEffect } from "react";
import WorkCard from "./WorkCard";
import Img1 from "../../assets/work_imgs/main/FASHION04.png";
import Img2 from "../../assets/work_imgs/main/FOOD03.png";
import Img3 from "../../assets/work_imgs/main/HOTEL02.png";
import Img4 from "../../assets/work_imgs/main/FASHION05.png";
import Img5 from "../../assets/work_imgs/main/FOOD04.png";
import Img6 from "../../assets/work_imgs/main/HOTEL05.png";
import Img7 from "../../assets/work_imgs/main/FASHION06.png";
import Img8 from "../../assets/work_imgs/main/HOTEL09.png";
import Img9 from "../../assets/work_imgs/main/FASHION07.png";

const WorkData = [
  {
    id: 1,
    image: Img1,
    title: "Luxury Perfume Collection",
    description:
      "A premium perfume collection that captures the essence of elegance and sophistication. Each fragrance is carefully crafted to evoke timeless beauty, perfect for those who appreciate high-end luxury and exclusive scents.",
  },
  {
    id: 2,
    image: Img2,
    title: "Exquisite Wine Collection",
    description:
      "A refined wine collection that embodies elegance and craftsmanship. Each bottle represents a perfect blend of tradition and innovation, offering rich flavors and aromas that delight the senses, ideal for connoisseurs and collectors.",
  },
  {
    id: 3,
    image: Img3,
    title: "Luxury Bedroom Retreat",
    description:
      "A serene and opulent bedroom design that combines comfort with sophistication. Featuring rich textures, elegant furniture, and ambient lighting, this space creates a perfect sanctuary for relaxation and indulgence, ideal for high-end interior design.",
  },
];

const WorkData2 = [
  {
    id: 4,
    image: Img4,
    title: "Elegance in a Bottle",
    description:
      "A captivating visual representation of luxury and refinement, capturing the essence of a premium perfume. With delicate details and soft hues, this design evokes a sense of sophistication and allure, perfect for high-end fragrance branding.",
  },
  {
    id: 5,
    image: Img5,
    title: "Sophisticated Leisure",
    description:
      "A sleek and elegant design capturing the essence of relaxation and refinement. The visual combines rich textures and a sense of calm, perfect for showcasing luxury and sophistication in any setting.",
  },
  {
    id: 6,
    image: Img6,
    title: "Exquisite Hospitality Design",
    description:
      "A stunning visual capturing the elegance and sophistication of luxury hotel dining. The design emphasizes refined aesthetics, ambient lighting, and a welcoming atmosphere, perfect for showcasing high-end hospitality experiences.",
  },
];

const WorkData3 = [
  {
    id: 7,
    image: Img7,
    title: "Elegant Traditional Wear",
    description:
      "A sophisticated portrayal of traditional elegance, highlighting intricate craftsmanship and timeless beauty through a black saree adorned with delicate ornaments.",
  },
  {
    id: 8,
    image: Img8,
    title: "Contemporary Living Space Design",
    description:
      "A modern sitting area that blends comfort and functionality, featuring a sleek sofa, ambient lighting, & a state-of-the-art TV for a sophisticated living experience.",
  },
  {
    id: 9,
    image: Img9,
    title: "Elegant Saree Design Showcase",
    description:
      "A captivating display of intricate saree designs, blending traditional elegance with modern flair, perfect for showcasing craftsmanship and cultural heritage.",
  },
];

const WorkComp = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle between "View All" and "View Less"
  const [cardCount, setCardCount] = useState(3); // Default to showing 3 cards (for desktop)
  const [isTablet, setIsTablet] = useState(false); // State to track if the screen is tablet size

  // Combine all datasets
  const combinedWorkData = [
    ...WorkData,
    ...WorkData2,
    ...WorkData3,
  ];

  // Check screen size and update state
  const checkScreenSize = () => {
    const width = window.innerWidth;
    if (width >= 640 && width <= 1023) {
      setCardCount(2); // Show 2 cards on tablets
      setIsTablet(true);
    } else if (width < 768) {
      setCardCount(1); // Show 1 card on mobile
      setIsTablet(false);
    } else {
      setCardCount(3); // Show 3 cards on desktop
      setIsTablet(false);
    }
  };

  // Use useEffect or useLayoutEffect to check screen size on mount and resize
  useLayoutEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize); // Clean up event listener
  }, []);

  // Filter data based on screen size and whether "View All" is clicked
  const filteredWorkData =
    showAll ? combinedWorkData : combinedWorkData.slice(0, cardCount);

  return (
    <div className="bg-gray-100 py-10 pb-14 font-lato">
      <section data-aos="fade-up" className="container">
        {/* Headline */}
        <h1 className="my-8 text-center border-l-8 border-primary/50 py-2 pl-2 text-4xl font-semibold font-custom text-primary">
          SELECTED WORKS THAT INSPIRE
        </h1>

        {/* Short description */}
        <p className="text-xl text-center text-gray-600 mb-10">
          A collection of our best creative projects across multiple industries. Explore how we blend design, technology, and innovation to craft impactful solutions.
        </p>

        {/* Grid Layout for Works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredWorkData.map((item) => (
            <WorkCard key={item.id} {...item} />
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-8">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="primary-btn bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded"
            >
              View Less
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="primary-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
            >
              View All Works
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkComp;



