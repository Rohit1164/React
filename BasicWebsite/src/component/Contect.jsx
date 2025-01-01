import React from "react";

function Contect() {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1>Contact Me</h1>
        <p className="text-muted">
          I'd love to hear from you. Whether you have a question, a project
          idea, or just want to connect, feel free to reach out.
        </p>
      </header>

      {/* Main Content */}
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <h3>Send a Message</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* Developer Info */}
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <ul className="list-unstyled">
            <li>
              <strong>Email:</strong> developer@example.com
            </li>
            <li>
              <strong>Phone:</strong> +123 456 7890
            </li>
            <li>
              <strong>Location:</strong> New York, USA
            </li>
          </ul>
          <h4 className="mt-4">Follow Me</h4>
          <div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="bi bi-linkedin fs-3 text-primary"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="bi bi-facebook fs-3 text-primary"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="bi bi-github fs-3 text-dark"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="bi bi-instagram fs-3 text-danger"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
