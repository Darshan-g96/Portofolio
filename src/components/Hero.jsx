import React from "react";
import profilePic from "../assets/profilePic.svg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Darshan G</h1>
          <p>Computer Science Engineer | Frontend Developer</p>
          <p className="subtitle">
            React, JavaScript, Java &amp; Full Stack Development
          </p>
          <button className="btn">Get In Touch</button>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Darshan G Profile" />
        </div>
      </div>
    </section>
  );
}
