import React from "react";
import pic from "../assets/pic.jpg";

function Profile() {
  return (
    <div className="container mt-5">
      <card className="shadow-lg">
        <div className="d-flex align-items-center">
          <img
            src={pic}
            alt="Profile"
            className="rounded mx-auto"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="mx-auto p-2">
            <h2 className="card-title pl-2">Rohit kumar</h2>
            <h4 className="card-subtitle text-muted">Frontend Developer</h4>
          </div>
        </div>
        <div className="mt-3">
          I am a passionate frontend developer with a love for creating dynamic
          and responsive websites. I specialize in React, JavaScript, and modern
          frontend technologies. My goal is to build intuitive, user-friendly
          web applications.
        </div>

        <h5 className="mt-4">Technologies I Work With:</h5>
        <ul>
          <li>React</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>Webpack</li>
          <li>Git & GitHub</li>
        </ul>

        <button
          variant="primary"
          className="mt-4 bg-primary text-white
            rounded border border-primary"
          href="/resume.pdf"
          target="_blank"
        >
          Download Resume
        </button>
      </card>
    </div>
  );
}

export default Profile;
