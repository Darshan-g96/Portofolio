import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              Hi! I'm <strong>Darshan G</strong>, a passionate Computer Science
              Engineering graduate with a keen interest in building scalable web
              applications and solving complex problems through code.
            </p>

            <p>
              I'm currently interning at <strong>JSpiders</strong> as a Software
              Development Engineer, where I'm deepening my expertise in{" "}
              <strong>JavaScript, React, and modern web technologies</strong>.
              My journey in tech has been driven by curiosity and a commitment
              to continuous learning.
            </p>

            <p>
              With a strong foundation in{" "}
              <strong>Core Java, SQL, DBMS, and OOP concepts</strong>, combined
              with hands-on experience in{" "}
            </p>
          </div>
          <h2>Education</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🎓</div>
              <h3>Graduation</h3>
              <p className="card-title">B.E in Computer Science Engineering</p>
              <p className="card-subtitle">
                Rao Bahadur Y Mahabaleshwarappa Engineering College, Bellary
                (VTU)
              </p>
              <p className="card-detail">
                CGPA: <strong>7.6</strong> | 2021-2025
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">💼</div>
              <h3>Current Role</h3>
              <p className="card-title">Software Development Intern</p>
              <p className="card-subtitle">JSpiders</p>
              <p className="card-detail">April 2025 - Present</p>
            </div>

            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Experience</h3>
              <p className="card-title">Full Stack Developer Intern</p>
              <p className="card-subtitle">Shadow Mind Solutions</p>
              <p className="card-detail">September 2024 - January 2025</p>
            </div>
          </div>

          <div className="about-footer">
            <p>
              <strong>What drives me:</strong> I'm fascinated by elegant code
              architecture, user-centric design, and the opportunity to
              transform ideas into reality. When I'm not coding, I enjoy
              learning new technologies and contributing to open-source
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
