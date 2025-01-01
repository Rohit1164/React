import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About</h5>
            <p>
              This is a sample footer created using Bootstrap. You can customize
              this section to include information about your company or website.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123, Main Street, City</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a
                href="https://www.linkedin.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-facebook"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href="https://www.github.com"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-white" />

        {/* Footer Bottom Links */}
        <div className="d-flex justify-content-between">
          <p className="mb-0">© 2024 Your Company. All Rights Reserved.</p>
          <div>
            <a href="/privacy" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
