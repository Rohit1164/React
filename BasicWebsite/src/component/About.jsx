import React from "react";
import pic from "../assets/pic.jpg";

const About = () => {
  return (
    <div className="container mt-5">
      {/* About Me Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="mb-3">About Me</h1>
          <p className="text-muted">
            Hi, I'm a passionate Frontend Developer with a knack for creating
            responsive, visually appealing, and user-friendly interfaces. I love
            coding, solving problems, and bringing designs to life through clean
            and efficient code.
          </p>
          <a href="#contact" className="btn btn-primary mt-3">
            Contact Me
          </a>
        </div>
        <div className="col-md-6">
          <img
            src={pic}
            height={800}
            width={800}
            alt="Frontend Developer"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                HTML
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>CSS
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                JavaScript
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                React
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Bootstrap
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>Git
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Responsive Design
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                REST APIs
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Version Control
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Tools I Use</h2>
        <div className="d-flex justify-content-center">
          <img
            src="https://via.placeholder.com/100"
            alt="VSCode"
            className="img-fluid mx-3"
            title="VSCode"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="GitHub"
            className="img-fluid mx-3"
            title="GitHub"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Figma"
            className="img-fluid mx-3"
            title="Figma"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Chrome DevTools"
            className="img-fluid mx-3"
            title="Chrome DevTools"
          />
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="mb-5">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  A responsive e-commerce website built with React and
                  Bootstrap.
                </p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  A personal portfolio website showcasing skills and projects.
                </p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Project 3"
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  A task management app with drag-and-drop functionality.
                </p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center mb-5">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <a
          href="mailto:frontenddev@example.com"
          className="btn btn-outline-primary"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default About;
