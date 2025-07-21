import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

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
      className="relative min-h-screen pt-20 px-6 md:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-lime-400 underline underline-offset-8 decoration-4 decoration-lime-500">
          📬 Contact Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Socials & Info */}
          <div className="flex flex-col items-center gap-10 w-full lg:w-1/3">
            <div className="flex gap-10">
              <a
                href="https://www.linkedin.com/in/debasmita-biswal-935b56368"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={48} />
              </a>
              <a
                href="https://github.com/smita536"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110"
              >
                <FaGithub size={48} />
              </a>
              <a
                href="mailto:debasmitabiswal187@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-110"
              >
                <FaEnvelope size={48} />
              </a>
            </div>

            {/* Footer Info */}
            <div className="text-left text-sm mt-8 text-white">
              <p>📧 debasmitabiswal187@gmail.com</p>
              <p className="mt-1">📞 +91-9668542134</p>
              <p className="mt-2">Crafted with ❤️ by Debasmita Biswal 🌻</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 p-10 rounded-xl shadow-xl w-full lg:w-2/3"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-transparent border-b-2 border-lime-400 placeholder-white/80 text-white focus:outline-none focus:border-white transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-transparent border-b-2 border-lime-400 placeholder-white/80 text-white focus:outline-none focus:border-white transition duration-300"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                className="w-full p-4 bg-transparent border-b-2 border-lime-400 placeholder-white/80 text-white focus:outline-none focus:border-white transition duration-300"
                required
              ></textarea>

              <button
                type="submit"
                className={`w-full py-4 font-semibold rounded-lg shadow-md transition-all duration-300 ${
                  status === "loading"
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600"
                }`}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message 🚀"}
              </button>

              {status === "success" && (
                <p className="text-green-300 text-center mt-4">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-300 text-center mt-4">
                  ❌ Failed to send message. Try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
