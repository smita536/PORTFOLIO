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
      codeUrl: "https://github.com/your-username/ui-design-beauty-salon",
      liveUrl: "https://your-ui-design-beauty-salon.netlify.app",
    },
    {
      title: "AI Website Builder",
      description: "10Web – AI Website Builder",
      image: projectImg1,
      caption: "AI-Powered Website Builder",
      codeUrl: "https://github.com/your-username/ai-website-builder",
      liveUrl: "https://your-ai-website-builder.vercel.app",
    },
    {
      title: "Apple Website Clone",
      description: "Apple Product Showcase & Checkout",
      image: projectImg2,
      caption: "Clone of Apple’s Product Showcase",
      codeUrl: "https://github.com/your-username/apple-clone",
      liveUrl: "https://your-apple-clone.netlify.app",
    },
    {
      title: "Movisee",
      description: "Search Movisee",
      image: projectImg3,
      caption: "Movie Booking App",
      codeUrl: "https://github.com/your-username/movisee",
      liveUrl: "https://movisee.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen pt-20 px-6 md:px-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-lime-400 text-center mb-12 underline underline-offset-8 decoration-lime-300">
          Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl shadow-2xl hover:shadow-lime-400/30 transition-all duration-500 overflow-hidden transform hover:scale-[1.03] backdrop-blur-md"
            >
              {/* Image Section */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-center">
                <p className="text-sm text-indigo-200 italic mb-1">
                  {project.caption}
                </p>
                <h3 className="text-2xl font-bold text-lime-300 mb-1">
                  {project.title}
                </h3>
                <p className="text-white/90 text-md mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
  <a
    href={project.codeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
  >
    See Code
  </a>
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
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
