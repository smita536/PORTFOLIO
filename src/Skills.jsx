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
      institution: "GIFT Autonomous, Bhubaneswar",
      iconClass: "fas fa-graduation-cap",
      color: "text-indigo-600",
    },
    {
      title: "B.Sc in Chemistry Honours",
      institution: "Mangala Mahavidalaya, Kakatpur",
      iconClass: "fas fa-flask",
      color: "text-green-600",
    },
    {
      title: "Higher Secondary Education",
      institution: "Binayak Dev High School, Kakatpur",
      iconClass: "fas fa-school",
      color: "text-orange-500",
    },
  ];

  return (
    <section
      id="skills-education"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-lime-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center bg-white border-l-8 border-indigo-500 p-10 rounded-xl shadow-xl transition-all duration-500">

        {/* Section Heading */}
        <div className="w-full flex justify-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-600 relative inline-block text-center">
            Skills & Education
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-500 to-lime-400 rounded"></span>
          </h2>
        </div>

        {/* Tech Stack */}
        <div className="w-full">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <i className={`${tech.iconClass} fa-3x ${tech.color}`}></i>
                <p className="mt-2 font-semibold text-gray-700">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="w-full mt-16">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
            Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <i className={`${tool.iconClass} fa-3x ${tool.color}`}></i>
                <p className="mt-2 font-semibold text-gray-700">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="w-full mt-16">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
            Education
          </h3>
          <ul className="space-y-6 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <li
                key={index}
                className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-md shadow hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <i className={`${edu.iconClass} fa-2x ${edu.color} mt-1`}></i>
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-700">
                      {edu.title}
                    </h4>
                    <p className="text-gray-700 mt-1">
                      {edu.institution}
                    </p>
                  </div>
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
