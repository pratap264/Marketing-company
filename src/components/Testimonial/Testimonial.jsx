import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "C.K. Venkataraman - Director of Titan, Bengaluru",
    text: "Working with Garage Ad. has been an absolute pleasure. Their creativity and attention to detail brought our vision for Titan to life in ways we hadn’t imagined. The team delivered outstanding work, capturing the essence of our brand perfectly. We’re thrilled with the results and look forward to future collaborations.",
  },
  {
    id: 2,
    name: "Dr. Sunil Kumar — Director of Design Operations of RHL, Mumabi",
    text: "Collaborating with Garage Ad. has been a fantastic experience. Their innovative approach and dedication to quality truly elevated our project for RHL. They understood our goals and executed them with precision, resulting in a final product that exceeded expectations. We’re excited to continue working with them on future ventures.",
  },
  {
    id: 3,
    name: "Jeremy Lindley — Director of Johnnie Walker, New York",
    text: "Working with Garage Ad has been a remarkable experience. Their creative vision and commitment to excellence helped bring our Johnnie Walker campaign to life in a way that truly resonated with our audience. The team delivered exceptional results, and we look forward to more successful collaborations in the future.",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: true, // Enables left/right arrows for navigation
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-10 font-lato">
      <div className="container">
        {/* Testimonial section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 max-w-screen-xl mx-auto font-lato"
        >
          <h1 className="text-3xl text-center font-semibold">Testimonials</h1>
          <h5 className="text-center pb-10">What our Happy Clients say about us</h5>
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text }) => {
              return (
                <div key={id} className="my-6">
                  {/* Card */}
                  <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl bg-gray-100 relative">
                    <div className="space-y-4">
                      <p className="text-gray-500 text-black/80 xl:pr-40">
                        “{text}”
                      </p>
                      <h1 className="text-xl font-bold">{name}</h1>
                    </div>
                    <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
