import React from "react";
import { assets } from "../assets/assets";
function Contact() {
  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        CONTACT <samp className="font-semibold text-gray-700 ">US</samp>
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28 ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contactInage}
          alt="Contact Image"
        />
        <div className="flex flex-col items-start justify-center gap-5">
          <h3 className="text-lg font-semibold text-gray-600 ">OUR OFFICE</h3>
          <p className="text-gray-500">
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>

          <p className="text-gray-500">Tel: (000) 000-0000</p>
          <p className="text-gray-500">Email: greatstackdev@gmail.com</p>

          <h3 className="text-lg font-semibold text-gray-600 ">
            CAREERS AT PRESCRIPTO
          </h3>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="px-8 py-4 text-sm duration-500 border border-green-800 hover:bg-green-400 hover:text-white hover:border-none">
            Expore Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
