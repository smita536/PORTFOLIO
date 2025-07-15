import React from "react";

function Skills() {
  const techStack = [
    { name: "JavaScript", iconClass: "fab fa-js", color: "text-yellow-400" },
    { name: "HTML", iconClass: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS", iconClass: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "React", iconClass: "fab fa-react", color: "text-cyan-400" },
    { name: "Node.js", iconClass: "fab fa-node", color: "text-green-500" },
    { name: "MongoDB", iconClass: "fas fa-leaf", color: "text-green-600" },
    { name: "Express", iconClass: "fas fa-server", color: "text-gray-600" },
    { name: "Redux", iconClass: "fab fa-react", color: "text-purple-600" },
    { name: "Material UI", iconClass: "fas fa-cube", color: "text-gray-800" },
    { name: "Chakra UI", iconClass: "fas fa-bolt", color: "text-teal-400" },
  ];

  const tools = [
    { name: "JSON Server", iconClass: "fas fa-file-code", color: "text-blue-500" },
    { name: "NPM", iconClass: "fab fa-npm", color: "text-red-600" },
    { name: "Vercel", iconClass: "fas fa-caret-up", color: "text-black" },
    { name: "GitHub", iconClass: "fab fa-github", color: "text-black" },
    { name: "Git", iconClass: "fab fa-git-alt", color: "text-orange-600" },
    { name: "Netlify", iconClass: "fas fa-water", color: "text-teal-600" },
    { name: "Postman", iconClass: "fas fa-meteor", color: "text-orange-500" },
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
      className="bg-gradient-to-br from-indigo-50 via-white to-lime-100 text-gray-800 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-indigo-700">
          🚀 Skills & 🎓 Education
        </h2>

        {/* Tech Stack */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-cyan-500 underline underline-offset-8 decoration-indigo-300">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <i className={`${tech.iconClass} fa-3x ${tech.color}`}></i>
                <p className="mt-2 font-semibold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-6 text-cyan-500 underline underline-offset-8 decoration-indigo-300">
            Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                <i className={`${tool.iconClass} fa-3x ${tool.color}`}></i>
                <p className="mt-2 font-semibold text-gray-700">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 text-left">
          <h3 className="text-3xl font-bold mb-6 text-cyan-500 underline underline-offset-8 decoration-indigo-300 text-center">
            Education
          </h3>
          <ul className="space-y-6 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <li
                key={index}
                className="bg-white border-l-4 border-indigo-500 shadow-md rounded-md p-4"
              >
                <h4 className="text-xl font-semibold text-indigo-700">
                  🎓 {edu.title}
                </h4>
                <p className="text-green-700 mt-1">{edu.institution}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
