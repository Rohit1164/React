import logo from "../assets/api.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-20 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="text-white text-2xl font-bold flex">
              <img src={logo} alt="logo" className="h-16" />
              <span className="pt-3.5">MockProfileAPI</span>
            </div>
            <p className="text-sm">
              We are a company dedicated to providing the best services and
              products to our customers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="text-sm hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/contect" className="text-sm hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
