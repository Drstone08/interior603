import React from "react";
import { FaEye } from "react-icons/fa";
import AboutUsImage from "../images/google-oc-rapt-studio-office-design-9-700x467.avif";
import MissionImage from "../images/google-oc-rapt-studio-office-design-9-700x467.avif";
import Card from "../assests/card";
import ChooseUs from "../assests/Chooseus";
import Scrollline from "../assests/Srollline";

const Aboutus = () => {
  return (
    <div className="bg-white text-black">
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-8 gap-6 py-12">
        <div className="relative rounded-lg overflow-hidden w-full lg:w-[40%] h-[300px] lg:h-[400px] flex-shrink-0 sm:w-[400px] flex justify-center items-center group bg-opacity-50 backdrop-blur-md shadow-lg">
          <img
            src={AboutUsImage}
            alt="About Us Image"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="w-full lg:w-[60%] p-6 flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-yellow-400">
            About Us
          </h1>
          <p className="text-base leading-relaxed text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            nulla tenetur beatae totam culpa aperiam deserunt distinctio dicta
            consectetur corporis dolore quos obcaecati dolor. Nostrum enim
            necessitatibus animi atque possimus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem eum quisquam adipisci.
            Voluptatum molestias quo quasi consequatur fugit laboriosam
            doloribus exercitationem earum, laudantium accusamus doloremque,
            ratione ea iure, similique quod? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Libero voluptate ex quas ab voluptatem
            reprehenderit, error ut deleniti sed nobis sapiente laboriosam
            blanditiis, nam quidem modi fugit expedita, molestias ipsam.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div
        className="min-h-screen w-full p-6 lg:p-12 flex flex-col lg:flex-row items-center justify-center bg-cover bg-center bg-opacity-60 backdrop-blur-lg"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1)), url(${AboutUsImage})`,
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Our Vision Block */}
          <div className="p-8 rounded-2xl flex flex-col items-center bg-opacity-60 backdrop-blur-lg group max-w-full lg:max-w-[45%] shadow-lg transition-transform duration-500 hover:scale-105">
            <FaEye className="text-6xl mb-4 text-yellow-400 drop-shadow-md" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-4 drop-shadow-md">
              Our Vision
            </h2>
            <p className="text-center max-w-lg text-lg text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg p-6 shadow-md">
              Our vision is to become a leader in innovation, delivering
              solutions that set new standards in the industry. We aim to create
              value and make a positive impact on society through our commitment
              to excellence and integrity.
            </p>
          </div>

          {/* Our Mission Block */}
          <div className="p-8 rounded-2xl flex flex-col items-center bg-opacity-60 backdrop-blur-lg group max-w-full lg:max-w-[45%] shadow-lg transition-transform duration-500 hover:scale-105">
            <FaEye className="text-6xl mb-4 text-yellow-400 drop-shadow-md" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-4 drop-shadow-md">
              Our Mission
            </h2>
            <p className="text-center max-w-lg text-lg text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg p-6 shadow-md">
              Our mission is to drive impactful change by providing cutting-edge
              solutions and services that address the evolving needs of our
              clients and society. We are committed to fostering innovation and
              excellence in everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <ChooseUs />
      </section>

      {/* Scrollline Section */}
      <Scrollline />
    </div>
  );
};

export default Aboutus;
