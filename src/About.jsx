import React from "react";
import profileImg from "./assets/images/profile1.jpg";

function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center text-center min-h-screen bg-cover bg-center px-4 md:px-0 pt-20"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay like Home */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 text-white max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="group relative flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg transition-transform duration-300 group-hover:scale-105">
            <img
              src={profileImg}
              alt="Debasmita"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-4xl font-extrabold text-lime-400 mb-6 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-500 to-lime-400 rounded"></span>
          </h2>

          <p className="text-lg leading-relaxed text-white/90 mb-4">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-300">Debasmita</span>, a
            passionate MCA student and aspiring{" "}
            <span className="text-lime-300 font-semibold">
              Java Full Stack Developer
            </span>. I love building responsive, clean web apps using{" "}
            <span className="text-indigo-200 font-medium">
              Java, Spring Boot, React
            </span>{" "}
            and{" "}
            <span className="text-indigo-200 font-medium">Tailwind CSS</span>.
          </p>

          <p className="text-lg leading-relaxed text-white/90 mb-4">
            I'm focused on writing scalable, clean code and building seamless
            UI/UX experiences with robust backends.
          </p>

          <p className="text-lg leading-relaxed text-white/90">
            Beyond coding, I’m always exploring new tech, tools, and love
            working on real-world collaborative projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
