import React from "react";

function Skills() {
  const techStack = [
    { name: "JavaScript", iconClass: "fab fa-js", color: "text-yellow-400" },
    { name: "HTML", iconClass: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS", iconClass: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "React", iconClass: "fab fa-react", color: "text-cyan-400" },
    { name: "Node.js", iconClass: "fab fa-node", color: "text-green-500" },
    { name: "MongoDB", iconClass: "fas fa-leaf", color: "text-green-600" },
    { name: "Express", iconClass: "fas fa-server", color: "text-gray-400" },
    { name: "Redux", iconClass: "fab fa-react", color: "text-purple-500" },
    { name: "Material UI", iconClass: "fas fa-cube", color: "text-gray-300" },
    { name: "Chakra UI", iconClass: "fas fa-bolt", color: "text-teal-400" },
  ];

  const tools = [
    { name: "JSON Server", iconClass: "fas fa-file-code", color: "text-blue-300" },
    { name: "NPM", iconClass: "fab fa-npm", color: "text-red-500" },
    { name: "Vercel", iconClass: "fas fa-caret-up", color: "text-white" },
    { name: "GitHub", iconClass: "fab fa-github", color: "text-white" },
    { name: "Git", iconClass: "fab fa-git-alt", color: "text-orange-400" },
    { name: "Netlify", iconClass: "fas fa-water", color: "text-teal-400" },
    { name: "Postman", iconClass: "fas fa-meteor", color: "text-orange-300" },
  ];

  const education = [
    {
      title: "Pursuing MCA",
      institution: "GIFT AUTONOMOUS, BBSR",
    },
    {
      title: "B.Sc in Chemistry Honours",
      institution: "Mangala Mahavidalaya, Kakatpur, Puri",
    },
    {
      title: "Higher Secondary Education",
      institution: "Binayak Dev High School, Kakatpur",
    },
  ];

  return (
    <section
      id="skills-education"
      className="relative min-h-screen pt-20 px-6 md:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-lime-400">
          🚀 Skills & 🎓 Education
        </h2>

        {/* Tech Stack */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-cyan-400 underline underline-offset-8 decoration-lime-400">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg shadow-xl p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <i className={`${tech.iconClass} fa-3x ${tech.color}`}></i>
                <p className="mt-2 font-semibold text-white">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400 underline underline-offset-8 decoration-lime-400">
            Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg shadow-xl p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <i className={`${tool.iconClass} fa-3x ${tool.color}`}></i>
                <p className="mt-2 font-semibold text-white">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 text-left">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400 underline underline-offset-8 decoration-lime-400 text-center">
            Education
          </h3>
          <ul className="space-y-6 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <li
                key={index}
                className="flex items-start bg-white/10 border-l-4 border-lime-400 shadow-md rounded-md p-4"
              >
                <div className="flex-shrink-0 text-lime-300 mr-4 mt-1">
                  <i className="fas fa-graduation-cap fa-2x"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-lime-300">
                    {edu.title}
                  </h4>
                  <p className="text-indigo-100 mt-1">{edu.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
