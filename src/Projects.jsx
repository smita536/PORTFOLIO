import React from "react";
import projectImg from "./assets/images/project1.png";
import projectImg1 from "./assets/images/project2.png";
import projectImg2 from "./assets/images/project3.png";
import projectImg3 from "./assets/images/project4.png";

function Projects() {
  const projects = [
    {
      title: "UI Design",
      description: "Beauty Salon",
      image: projectImg,
      caption: "UI Design for a Beauty Salon",
      codeUrl: "https://github.com/smita536/ui-design",
      liveUrl: "https://ui-design.vercel.app",
    },
    {
      title: "AI Website Builder",
      description: "10Web – AI Website Builder",
      image: projectImg1,
      caption: "AI-Powered Website Builder",
      codeUrl: "https://github.com/smita536/10web-clone",
      liveUrl: "https://10web-clone.vercel.app",
    },
    {
      title: "Apple Website Clone",
      description: "Apple Product Showcase & Checkout",
      image: projectImg2,
      caption: "Clone of Apple’s Product Showcase",
      codeUrl: "https://github.com/smita536/apple-clone",
      liveUrl: "https://apple-clone.vercel.app",
    },
    {
      title: "Movisee",
      description: "Movie Search App",
      image: projectImg3,
      caption: "Movie Search & Listing App",
      codeUrl: "https://github.com/smita536/movisee",
      liveUrl: "https://movisee.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-lime-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 relative inline-block">
            Featured Projects
            <span className="absolute left-0 -bottom-3 w-full h-1 bg-gradient-to-r from-indigo-500 to-lime-400 rounded"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-l-8 border-indigo-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 italic mb-2">
                  {project.caption}
                </p>
                <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    See Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
