import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success | error | loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    const serviceID = "service_7e70jut";
    const templateID = "template_xwgf8wg";
    const publicKey = "4WSUxWT5U3iYUFZ5D";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email failed:", err);
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-purple-50 via-indigo-100 to-lime-100 text-gray-800 py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700 underline underline-offset-8 decoration-4 decoration-indigo-500">
          📬 Contact Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
          {/* Social Links */}
          <div className="flex justify-center gap-10 mb-12 lg:mb-0 w-full lg:w-1/3">
            <a
              href="https://www.linkedin.com/in/debasmita-biswal-935b56368"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:text-indigo-500 transition-transform transform hover:scale-125"
            >
              <FaLinkedin size={48} />
            </a>
            <a
              href="https://github.com/smita536"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-purple-600 transition-transform transform hover:scale-125"
            >
              <FaGithub size={48} />
            </a>
            <a
              href="mailto:debasmitabiswal187@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-600 hover:text-lime-500 transition-transform transform hover:scale-125"
            >
              <FaEnvelope size={48} />
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-xl shadow-xl border border-indigo-200 w-full lg:w-2/3"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border-b-2 border-indigo-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-600 transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 border-b-2 border-indigo-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-600 transition duration-300"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                className="w-full p-4 border-b-2 border-indigo-400 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none focus:border-indigo-600 transition duration-300"
                required
              ></textarea>

              <button
                type="submit"
                className={`w-full py-4 font-semibold rounded-lg shadow-md transition-all duration-300 text-white ${
                  status === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                }`}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message 🚀"}
              </button>

              {/* Status Message */}
              {status === "success" && (
                <p className="text-green-600 text-center font-medium mt-4">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium mt-4">
                  ❌ Failed to send message. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-10">
          <p className="text-gray-900">
            📧 debasmitabiswal187@gmail.com | 📞 +91-9668542134
          </p>
          <p className="text-gray-800 font-semibold mt-2">
            Crafted with ❤️ by Debasmita Biswal 🌻
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
