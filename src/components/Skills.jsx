import React from "react";

const skills = [
  { icon: "📱", name: "HTML5" },
  { icon: "🎨", name: "CSS3" },
  { icon: "⚡", name: "JavaScript" },
  { icon: "⚛️", name: "React.js" },
  { icon: "☕", name: "Core Java" },
  { icon: "🗄️", name: "SQL" },
  { icon: "🧠", name: "OOP" },
  { icon: "📊", name: "DBMS" },
  { icon: "🔄", name: "Git & GitHub" },
  { icon: "💻", name: "VS Code" },
  { icon: "🎯", name: "React Hooks" },
  { icon: "🔧", name: "Debugging" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
