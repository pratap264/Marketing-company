import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos"; // AOS library
import yellowCar2 from "../../assets/website/bg-3.jpg"; // Background image

const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "", // Changed message to requirements
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      offset: 50,
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.phone) errors.phone = "Phone number is required."; // Phone number validation
    if (!formData.requirements) errors.requirements = "Your requirements are required."; // Updated validation for requirements
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Construct mailto link with updated email
      const mailtoLink = `mailto:info@garageadvertisements.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ARequirements: ${formData.requirements}`;

      // Open the default email client with the pre-filled email
      window.location.href = mailtoLink;

      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirements: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (

    <div
  className="duration-300"
  style={{
    backgroundImage: `url(${yellowCar2})`, // Use yellowCar2 as the background image
    backgroundSize: "cover", // Make sure the image covers the entire space
    backgroundPosition: "center", // Center the image
    backgroundAttachment: "fixed", // Make the background image fixed during scroll
    minHeight: "100vh", // Ensure the hero section takes up full viewport height
  }}
>
  <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0 font-lato">
    <div
      data-aos="fade-up"
      className={`max-w-lg w-full p-8 rounded-lg shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)", // Custom deep shadow for floating effect
        transform: "translateY(-10px)", // Slightly lift the form
        marginTop: "32px", // Add 32px space at the top of the form
        marginBottom: "32px", // Add 32px space at the bottom of the form
      }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Get in Touch <br />
        We are here to help you
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg shadow-sm ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#00a8cb]"
            } focus:outline-none`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg shadow-sm ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#00a8cb]"
            } focus:outline-none`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg shadow-sm ${
              errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#00a8cb]"
            } focus:outline-none`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Requirements Field */}
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium mb-2">
            Your Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg shadow-sm ${
              errors.requirements
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#00a8cb]"
            } focus:outline-none`}
            placeholder="Enter your requirements"
            rows="5"
          ></textarea>
          {errors.requirements && (
            <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-150 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
    
  );
};

export default ContactForm;

