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
    },
    {
      title: "AI Website Builder",
      description: "10Web – AI Website Builder",
      image: projectImg1,
      caption: "AI-Powered Website Builder",
    },
    {
      title: "Apple Website Clone",
      description: "Apple Product Showcase & Checkout",
      image: projectImg2,
      caption: "Clone of Apple’s Product Showcase",
    },
    {
      title: "Movisee",
      description: "Search Movisee",
      image: projectImg3,
      caption: "Movie Booking App",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-indigo-50 via-white to-lime-100 text-gray-800 py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-12 underline underline-offset-8 decoration-indigo-400">
           Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-indigo-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden hover:scale-[1.03] transform transition-transform"
            >
              {/* Project Image with Zoom Hover */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-5 text-center">
                {/* Caption */}
                <p className="text-sm text-gray-500 italic mb-2">
                  {project.caption}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-md">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
