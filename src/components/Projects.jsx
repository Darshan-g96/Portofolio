import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "React-based SPA with functional shopping cart and state management.",
    tech: ["React", "JavaScript", "HTML/CSS"],
    url: "https://github.com/Darshan-g96/VoiceTrigger",
  },
  {
    title: "Quiz Application",
    description:
      "Interactive quiz app with responsive design and real-time scoring.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    url: "https://github.com/Darshan-g96/VoiceTrigger",
  },
  {
    title: "Portfolio Website",
    description: "Fully responsive portfolio website built with React.",
    tech: ["React", "HTML5", "CSS3"],
    url: "https://github.com/Darshan-g96/Portofolio",
  },
  {
    title: "Voice Trigger Website",
    description: "An innovative website that responds to voice commands.",
    tech: ["React", "HTML5", "CSS3", "Speech Recognition Library"],
    url: "https://github.com/Darshan-g96/VoiceTrigger",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <a href={project.url} className="project-link">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
