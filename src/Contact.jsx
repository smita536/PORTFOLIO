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
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-lime-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 relative inline-block">
            Contact Me
            <span className="absolute left-0 -bottom-3 w-full h-1 bg-gradient-to-r from-indigo-500 to-lime-400 rounded"></span>
          </h2>
        </div>

        {/* Contact Card */}
        <div className="bg-white border-l-8 border-indigo-500 rounded-xl shadow-xl p-10
                        hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Social Links */}
            <div className="flex flex-col items-center gap-8 w-full lg:w-1/3">
              <a
                href="https://www.linkedin.com/in/debasmita-biswal-935b56368"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:text-indigo-500 transform hover:scale-125 transition"
              >
                <FaLinkedin size={44} />
              </a>

              <a
                href="https://github.com/smita536"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-indigo-600 transform hover:scale-125 transition"
              >
                <FaGithub size={44} />
              </a>

              <a
                href="mailto:debasmitabiswal187@gmail.com"
                className="text-lime-600 hover:text-lime-500 transform hover:scale-125 transition"
              >
                <FaEnvelope size={44} />
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full lg:w-2/3">
              <div className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border-b-2 border-indigo-400 bg-transparent
                             text-gray-700 placeholder-gray-400
                             focus:outline-none focus:border-indigo-600 transition"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 border-b-2 border-indigo-400 bg-transparent
                             text-gray-700 placeholder-gray-400
                             focus:outline-none focus:border-indigo-600 transition"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full p-4 border-b-2 border-indigo-400 bg-transparent
                             text-gray-700 placeholder-gray-400
                             focus:outline-none focus:border-indigo-600 transition"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-4 font-semibold rounded-lg shadow-md text-white transition-all duration-300 ${
                    status === "loading"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                  }`}
                >
                  {status === "loading" ? "Sending..." : "Send Message 🚀"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center font-medium">
                    ✅ Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-600 text-center font-medium">
                    ❌ Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-gray-800">
            📧 debasmitabiswal187@gmail.com | 📞 +91-9668542134
          </p>
          <p className="text-gray-900 font-semibold mt-2">
            Crafted with ❤️ by Debasmita Biswal
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
