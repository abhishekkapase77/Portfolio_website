import React from "react";
import webDev from "../../public/webdev.png"; // icon for web development
import aiMl from "../../public/python.webp"; // icon for AI/ML
import project1 from "../../public/images.jpeg"; // icon/project image
import project2 from "../../public/text-summarizer.png";
import project3 from "../../public/download.png";
import project4 from "../../public/algo.png";

function Experience() {
  const experiences = [
    {
      id: 1,
      type: "Internship",
      company: "i2i Specialist Technologies, Pune, Maharashtra",
      duration: "Jun 2022 - Aug 2023",
      domain: "Web Developer",
      logo: webDev,
      description:
        "Worked on full stack web development projects, implemented responsive designs, and developed interactive web applications."
    },
    {
      id: 2,
      type: "Internship",
      company: "Scropy Tech, Pune, Maharashtra",
      duration: "Jul 2025 - Sep 2025",
      domain: "AI/ML",
      logo: aiMl,
      description:
        "Developed AI and ML projects, implemented NLP algorithms and automated solutions for text summarization and analytics."
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Diploma Final Year Project",
      description: "Gas leakage detection and alerting system. Automated regulator off system using Arduino.",
      logo: project1,
      tech: "Arduino, Sensors"
    },
    {
      id: 2,
      title: "AI-based Text Summarization",
      description: "Mini project implementing NLP techniques to automatically generate concise summaries from large text data.",
      logo: project2,
      tech: "Python, NLP"
    },
    {
      id: 3,
      title: "Responsive Bookstore Web App",
      description:
        "Developed a full stack responsive Bookstore Web Application with user authentication, catalog, search & filter, cart, and order management.",
      logo: project3,
      tech: "React, Node.js, Express, MongoDB/MySQL"
    },
    {
      id: 4,
      title: "AI-based Algorithm Visualizer",
      description:
        "Developed an algorithm visualizer that helps users understand algorithms step by step with animations, explanations, and smart recommendations.",
      logo: project4,
      tech: "React, JavaScript, CSS"
    },
  ];

  return (
    <section name='Experience' className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {experiences.map(({ id, type, company, duration, domain, logo, description }) => (
          <div
            key={id}
            className="border-2 rounded-lg shadow-lg p-4 flex gap-4 hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt={domain} className="w-16 h-16 rounded-full border-2" />
            <div>
              <h2 className="font-bold text-lg">{type}</h2>
              <p className="text-indigo-600 font-semibold">{company}</p>
              <p className="text-gray-500 text-sm">{duration}</p>
              <p className="text-gray-700 text-sm">{domain}</p>
              <p className="text-gray-700 mt-2 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ id, title, description, logo, tech }) => (
          <div
            key={id}
            className="border-2 rounded-lg shadow-lg p-4 flex gap-4 hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt={title} className="w-16 h-16 rounded-full border-2" />
            <div>
              <h2 className="font-bold text-lg">{title}</h2>
              <p className="text-gray-700 text-sm mb-1">{description}</p>
              <p className="text-gray-500 text-sm font-semibold">Technologies: {tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
