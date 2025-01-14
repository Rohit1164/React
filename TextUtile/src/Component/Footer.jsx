import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-14 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#press" className="hover:text-gray-400">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul>
            <li>
              <a href="#faq" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
