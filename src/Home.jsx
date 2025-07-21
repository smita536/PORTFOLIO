import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const titles = [
    "Java Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Enthusiast",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center h-screen bg-cover bg-center px-4 md:px-0 pt-20" // Added pt-20
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 text-white animate-fade-in-up transition-all duration-700">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Hi, I'm <span className="text-lime-400">Debasmita Biswal</span>
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-medium text-indigo-300 animate-pulse">
          {titles[index]}
        </h2>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1UXpYH8HrQfy-5xtd_ew2YZLnJlGlVOtR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-3 bg-gradient-to-r from-lime-400 to-indigo-500 text-black font-bold rounded-md shadow-lg hover:scale-105 transform transition duration-300"
        >
          View Resume
        </a>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/smita536"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-[#0077B5] p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform           hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={36} className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/debasmita-biswal-935b56368"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0077B5] p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 transform           hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={36} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
