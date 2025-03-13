import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 lg:px-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold">Blogify</div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Blog
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} Blogify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
