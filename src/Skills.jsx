import React from "react";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaLeaf,
  FaServer,
  FaCube,
  FaBolt,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaSchool,
  FaGraduationCap,
  FaFlask,
} from "react-icons/fa";
import { SiMongodb, SiRedux, SiVercel, SiNetlify, SiPostman } from "react-icons/si";

function Skills() {
  const techStack = [
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "Express", icon: <FaServer />, color: "text-gray-500" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { name: "Material UI", icon: <FaCube />, color: "text-gray-400" },
    { name: "Chakra UI", icon: <FaBolt />, color: "text-teal-500" },
  ];

  const tools = [
    { name: "JSON Server", icon: <FaServer />, color: "text-blue-400" },
    { name: "NPM", icon: <FaNpm />, color: "text-red-500" },
    { name: "Vercel", icon: <SiVercel />, color: "text-black" },
    { name: "GitHub", icon: <FaGithub />, color: "text-black" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
  ];

  const education = [
    {
      title: "Pursuing MCA",
      institution: "GIFT Autonomous, Bhubaneswar",
      icon: <FaGraduationCap />,
      color: "text-indigo-600",
    },
    {
      title: "B.Sc in Chemistry Honours",
      institution: "Mangala Mahavidalaya, Kakatpur",
      icon: <FaFlask />,
      color: "text-green-600",
    },
    {
      title: "Higher Secondary Education",
      institution: "Binayak Dev High School, Kakatpur",
      icon: <FaSchool />,
      color: "text-orange-500",
    },
  ];

  return (
    <section
      id="skills-education"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-lime-50"
    >
      <div className="max-w-6xl mx-auto bg-white border-l-8 border-indigo-500 p-10 rounded-xl shadow-xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-600 relative inline-block">
            Skills & Education
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-500 to-lime-400 rounded"></span>
          </h2>
        </div>

        {/* Tech Stack */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          Tech Stack
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <span className={`text-4xl ${tech.color}`}>{tech.icon}</span>
              <p className="mt-2 font-semibold text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-2xl font-bold text-indigo-700 my-10 text-center">
          Tools
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-indigo-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <span className={`text-4xl ${tool.color}`}>{tool.icon}</span>
              <p className="mt-2 font-semibold text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <h3 className="text-2xl font-bold text-indigo-700 my-10 text-center">
          Education
        </h3>
        <ul className="space-y-6 max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <li
              key={index}
              className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-md shadow hover:shadow-lg transition"
            >
              <div className="flex gap-4">
                <span className={`text-2xl ${edu.color}`}>{edu.icon}</span>
                <div>
                  <h4 className="font-semibold text-indigo-700">
                    {edu.title}
                  </h4>
                  <p className="text-gray-700">{edu.institution}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default Skills;
