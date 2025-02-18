import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Alert from "./Alert";

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleformSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k6uj3sa",
        "template_cvc8jdu",
        e.target,
        "Ds3_1YzhLinbdF0OY"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    e.target.reset();
  };

  return (
    <div className="bg-gray-800 text-white pt-10 min-h-screen">
      <div className=" bg-gray-800 flex items-center justify-center p-5">
        <div className="bg-white shadow-lg  rounded-2xl p-10 max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>

          {showAlert && (
            <Alert type="success" message="Form submitted successfully!" />
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <form
              onSubmit={handleformSubmit}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  name="to_eamil"
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  name="from_eamil"
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <input
                type="submit"
                value="Send Message"
                className="w-full bg-gray-900 text-white font-semibold p-3 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
              />
            </form>

            <div className="flex flex-col gap-6 m-6">
              <div className="flex items-center space-x-4">
                <FaLocationDot className="text-3xl text-gray-900" />
                <div>
                  <h3 className="text-lg text-black font-semibold">
                    Our Address
                  </h3>
                  <p className="text-gray-600">
                    Panchshil Colony, near GVM Mall, Aligarh
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <IoMdMail className="text-3xl text-gray-900" />
                <div>
                  <h3 className="text-lg text-black font-semibold">Email Us</h3>
                  <p className="text-gray-600">mrrohit1164@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <IoCall className="text-3xl text-gray-900" />
                <div>
                  <h3 className="text-lg text-black font-semibold">Call Us</h3>
                  <p className="text-gray-600">+91 902-773-7557</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
