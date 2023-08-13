import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {

    const [formData, setFormData] = useState('')

  const handleInputChange = (e, name) => {
    let value = e.target.value;

    setFormData((prevdata) => ({
      ...prevdata,

      [name]: value,
    }));
  };

  const formsubmit = () => {
    setFormData({ name: "", email: "", message: "" });

    console.log(formData);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-8 mx-auto">
          <div className="text-center mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#41cea1] mb-4">
              Stay Connected with Club Twenty
            </h1>

            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Your Bridge to a Thriving Student Community. Reach Out for
              Inquiries, Collaborations, and More! Let's Shape Growth Together.
            </p>

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-inherit inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative z-0">
        <div className="container !px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className=" lg:w-[60%] bg-gray-300 rounded-lg overflow-hidden sm:mr-8 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 opacity-90"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55884667.01345148!2d-2.3400878906249982!3d31.250378149855713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101a5dabbe37e9%3A0xa3e90c2466ff0491!2sCLUB%20TWENTY!5e0!3m2!1sen!2sin!4v1691683754059!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
           

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>

                <p className="mt-1">
                Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411
                </p>
              </div>

              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>

                <Link className="text-indigo-500 leading-relaxed">
                clubtwentylpu@gmail.com
                </Link>

                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>

                <p className="leading-relaxed">+91 7906440791</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-inherit flex flex-col w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Club Twenty
            </h2>

            <p className="leading-relaxed mb-5 text-gray-600">
              Let's Collaborate and Elevate Together!
            </p>

            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>

              <input
                type="text"
                value={formData.name}
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => {
                  handleInputChange(e, "name");
                }}
              />
            </div>

            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>

              <input
                type="email"
                value={formData.email}
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => {
                  handleInputChange(e, "email");
                }}
              />
            </div>

            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>

              <textarea
                id="message"
                value={formData.message}
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => {
                  handleInputChange(e, "message");
                }}
              ></textarea>
            </div>

            <button
              className="text-white bg-[#4556B3] border-0 py-2 px-6 focus:outline-none hover:bg-[#364494] rounded text-lg"
              onClick={formsubmit}
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Your mail will be user for further notifications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
