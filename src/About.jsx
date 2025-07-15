import React from "react";
import profileImg from "./assets/images/profile1.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-lime-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white border-l-8 border-indigo-500 p-10 rounded-xl shadow-xl transition-all duration-500">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
          <img
            src={profileImg}
            alt="Debasmita"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-6 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-500 to-lime-400 rounded"></span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-700">Debasmita</span>, a
            passionate MCA student and budding{" "}
            <span className="text-lime-600 font-semibold">
              Java Full Stack Developer
            </span>. I specialize in crafting responsive, user-focused web apps
            using{" "}
            <span className="text-indigo-700 font-medium">
              Java, Spring Boot, React
            </span>{" "}
            and{" "}
            <span className="text-indigo-700 font-medium">Tailwind CSS</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-4">
             I’m dedicated to writing clean, scalable, and efficient code with
            a focus on building elegant user interfaces and seamless backends.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
             Apart from coding, I'm a curious lifelong learner who loves
            exploring new tech trends, tools, and collaborating on meaningful
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
