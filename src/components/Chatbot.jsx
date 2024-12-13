import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Garage Advertisements! How can we assist you today?",
      sender: "bot",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control visibility

  const handleUserInput = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: "user" },
      ]);

      // AI or Bot response logic
      const userText = userMessage.toLowerCase();
      let botResponse = "";

      if (
        userText.includes("what is garage advertisements") ||
        userText.includes("about garage advertisements") ||
        userText.includes("your company") ||
        userText.includes("what do you do")
      ) {
        botResponse = (
          <>
            <p>
              Garage Advertisements is a dynamic marketing and advertising
              agency. We specialize in:
            </p>
            <ul>
              <li>Brand Promotions</li>
              <li>Digital Advertising</li>
              <li>Social Media Campaigns</li>
              <li>Reputation Management</li>
              <li>Public Relations</li>
              <li>Creative Design and Content</li>
            </ul>
            <p>
              Our goal is to empower brands and elevate their market presence.
              Let us know how we can help you!
            </p>
          </>
        );
      } else if (
        userText.includes("hi") ||
        userText.includes("hello") ||
        userText.includes("good morning") ||
        userText.includes("good evening")
      ) {
        botResponse = "Hello! How can I assist you today?";
      } else if (userText.includes("bye") || userText.includes("good night")) {
        botResponse = "Goodbye! Have a great day!";
      } else if (
        userText.includes("service") ||
        userText.includes("services") ||
        userText.includes("what you offer")
      ) {
        botResponse = (
          <>
            <p>We offer a variety of services. Here are some:</p>
            <ul>
              <li>- Product Sampling</li>
              <li>- E-Commerce Reviews</li>
              <li>- Online Reputation Management</li>
              <li>- Public Relations Building</li>
              <li>- Web Development</li>
              <li>- Email Marketing</li>
              <li>- Branding Design</li>
              <li>- UI/UX Web Design</li>
              <li>- Search Engine Optimization (SEO)</li>
              <li>- Pay-Per-Click Advertising (PPC)</li>
              <li>- Social Media Marketing</li>
              <li>- Influencer Marketing</li>
            </ul>
            <p>Would you like to know more about any of these services?</p>
            <button
              onClick={() => handleServiceMoreInfo()}
              style={{ backgroundColor: "#00a8cb", color: "white" }}
            >
              Learn More
            </button>
          </>
        );
      } else if (
        userText.includes("brand") ||
        userText.includes("worked with") ||
        userText.includes("collaborated with")
      ) {
        botResponse = (
          <>
            <p>We’ve worked with various renowned brands such as:</p>
            <ul>
              <li>- Titan</li>
              <li>- UP Government</li>
              <li>- Versace</li>
              <li>- The Landmark Towers</li>
              <li>- RHL</li>
              <li>- Johnnie Walker</li>
              <li>- UP Tourism</li>
            </ul>
            <p>
              Would you like to explore more details about our collaborations?
            </p>
            <button
              onClick={() => handleBrandMoreInfo()}
              style={{ backgroundColor: "#00a8cb", color: "white" }}
            >
              Explore More
            </button>
          </>
        );
      } else if (userText.includes("work") || userText.includes("projects")) {
        botResponse = (
          <>
            <p>Here are some of our notable works:</p>
            <ul>
              <li>
                <strong>- Luxury Perfume Collection:</strong> A premium perfume
                collection that captures the essence of elegance and
                sophistication.
              </li>
              <li>
                <strong>- Exquisite Wine Collection:</strong> A refined wine
                collection that embodies elegance and craftsmanship.
              </li>
              <li>
                <strong>- Luxury Bedroom Retreat:</strong> A serene and opulent
                bedroom design that combines comfort with sophistication.
              </li>
            </ul>
            <button
              onClick={() => handleWorkMoreInfo()}
              style={{ backgroundColor: "#00a8cb", color: "white" }}
            >
              See More Works
            </button>
          </>
        );
      } else if (userText.includes("career") || userText.includes("job")) {
        botResponse = (
          <>
            <p>We have several open positions in our company:</p>
            <ul>
              <li>- Digital Marketing Specialist</li>
              <li>- SEO Analyst</li>
              <li>- Social Media Manager</li>
            </ul>
            <p>Want to learn more about these roles?</p>
            <button
              onClick={() => handleCareerMoreInfo()}
              style={{ backgroundColor: "#00a8cb", color: "white" }}
            >
              Apply Now
            </button>
          </>
        );
      } else if (
        userText.includes("creator") ||
        userText.includes("influencer") ||
        userText.includes("monitize")
      ) {
        botResponse = (
          <>
            <p>
              If you want to know about working with us as a creator, here’s how
              it works:
            </p>
            <ul>
              <li>
                <strong>- Campaign Briefing:</strong> We share detailed campaign
                requirements with you.
              </li>
              <li>
                <strong>- Collaboration:</strong> You partner with our brands to
                create impactful content.
              </li>
              <li>
                <strong>- Content Development:</strong> Ad campaigns are curated
                to align with client objectives.
              </li>
              <li>
                <strong>- Revisions:</strong> Incorporate feedback to ensure
                client satisfaction.
              </li>
              <li>
                <strong>- Implementation:</strong> Utilize your platforms to
                execute the campaigns.
              </li>
              <li>
                <strong>- Payment:</strong> Get compensated directly by us on
                behalf of the client.
              </li>
            </ul>
            <p>Are you interested in collaborating with us?</p>
            <button
              onClick={() => handleCreatorCollaboration()}
              style={{ backgroundColor: "#00a8cb", color: "white" }}
            >
              Get Started
            </button>
          </>
        );
      } else if (
        userText.includes("contact") ||
        userText.includes("get in touch") ||
        userText.includes("form")
      ) {
        botResponse = (
          <>
            <p>
              If you would like to get in touch with us, please fill out the
              form below: - 
            </p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <textarea
                placeholder="Your Requirements"
                required
                style={{ margin: "10px 0", padding: "8px", width: "100%" }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#00a8cb",
                  color: "white",
                  padding: "10px",
                  width: "100%",
                }}
              >
                Submit
              </button>
            </form>
          </>
        );
      } else if (
        userText.includes("call") ||
        userText.includes("location") ||
        userText.includes("address")
      ) {
        botResponse = (
          <>
            <p>Call - +91 76519 78884</p>
            <br />
            <p>Location - Delhi, Bengaluru</p>
            <br />
            <p>Email - info@garageadvertisements.com</p>
          </>
        );
      } else {
        botResponse = (
          <p>
            I'm sorry, I didn't quite understand that. Can you please clarify?
          </p>
        );
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    }
    setUserMessage("");
  };

  const handleServiceMoreInfo = () => {
    // Navigate to the services page or show additional info
    window.location.href = "/services";
  };

  const handleBrandMoreInfo = () => {
    // Show additional brand info or navigate
    window.location.href = "/brands";
  };

  const handleWorkMoreInfo = () => {
    // Show more works or navigate to a work portfolio page
    window.location.href = "/work";
  };

  const handleCareerMoreInfo = () => {
    // Navigate to careers page or show application instructions
    window.location.href = "/careers";
  };

  const handleCreatorCollaboration = () => {
    // Handle creator collaboration inquiry (redirect to creator page or more info)
    window.location.href = "/creator";
  };

  const toggleChat = () => {
    setIsOpen(!isOpen); // Toggle visibility of chat
  };

  return (
    <div
      className="chatbot-container"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      {isOpen && (
        <div
          className="chatbot"
          style={{
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          <div className="messages" style={{ maxHeight: "400px", overflowY: "auto" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender}`}
                style={{ padding: "5px 10px", marginBottom: "10px" }}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="user-input">
            <input
              type="text"
              value={userMessage}
              onChange={handleUserInput}
              placeholder="Type your message..."
              style={{
                width: "80%",
                padding: "8px",
                borderRadius: "4px",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: "8px 16px",
                backgroundColor: "#00a8cb",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#00a8cb",
          color: "white",
          borderRadius: "50%",
          padding: "15px",
          fontSize: "20px",
        }}
        onClick={toggleChat}
      >
        💬
      </button>
    </div>
  );
};

export default Chatbot;
