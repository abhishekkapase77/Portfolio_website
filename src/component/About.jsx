import React from "react";

function About() {
  return (
    <section name='About' className="w-full min-h-screen bg-gradient-to-r  flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/self.jpg" // Make sure image is in public folder
            alt="Abhishek"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-indigo-500 shadow-lg mx-auto"
          />
        </div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">About Me</h1>
          <p className="text-sm md:text-md text-justify mb-4">
            👋 Hi, I'm <span className="font-semibold">Abhishek Kapase</span>, a
            passionate <span className="font-semibold">Web Developer</span> with
            a strong focus on the <span className="font-semibold">MERN Stack</span>.  
            I love building impactful, user-friendly, and visually stunning web
            applications that solve real-world problems.
          </p>

          {/* Education */}
          <h2 className="text-md md:text-xl font-semibold text-green-600 mb-2">
            🎓 Education & Training
          </h2>
          <ul className="text-sm md:text-md list-disc list-inside mb-4 text-justify">
            <li>Diploma in Computer Engineering at AISSMS Poly Pune</li>
            <li>B.Tech in AI & DS at AISSMS IOIT Pune</li>
            <li>Certified in Web Development & Database Management</li>
            <li>Exploring AI, Full Stack Development, and Cloud</li>
            <li>Internship at India Tech Soft Technologies, Pune, Maharashtra 
                (Jun 2022 - Aug 2023) 
                Domain: Web Developer </li>
          </ul>

          {/* Skills */}
          <h2 className="text-md md:text-xl font-semibold text-green-600 mb-2">
            🛠 Skills & Expertise
          </h2>
          <ul className="text-sm md:text-md grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside mb-4 text-justify">
            <li>Java, JavaScript, Python, C, C++</li>
            <li>React.js, Tailwind CSS, HTML5, CSS3</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, MySQL</li>
            <li>Problem-Solving</li>
            <li>Team Collaboration</li>
          </ul>

          {/* Achievements */}
         {/* <h2 className="text-md md:text-xl font-semibold text-green-600 mb-2">
            🏆 Achievements & Awards
          </h2>
          <ul className="text-sm md:text-md mb-4 text-justify">
            <li>
              🥇 Achieved <span className="font-semibold">1st Prize</span> in
              Diploma Final Year Project Competition for the project{" "}
              <span className="italic">
                "Gas Leakage Detection and Auto Regulator Off System"
              </span>.
            </li>
          </ul>*/}

          {/* Mission */}
          <h2 className="text-md md:text-xl font-semibold text-green-600 mb-2">
            🎯 Mission
          </h2>
          <p className="text-sm md:text-md text-justify leading-relaxed">
            My mission is to leverage my skills and creativity to deliver
            innovative, efficient, and impactful web solutions.  
            I am committed to continuous learning and contributing to the
            evolving digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
