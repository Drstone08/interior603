import React from "react";
import pic1 from "../images/digital-dubai-offices-dubai-21-768x512-compact.jpg";
import pic2 from "../images/uneebo-office-design-6182SnH84II-unsplash.jpg";
import pic3 from "../images/uneebo-office-design-UgYT5nkXdK4-unsplash.avif";
import pic4 from "../images/Untitled20-202024-05-14T202107.959.jpg";
import pic5 from "../images/direct-line-group-offices-london-768x513-compact.jpg";
import Collage2 from "../assests/Collage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  cssEase: "linear",
};

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white px-4 py-12">
      <h1 className="text-4xl font-serif text-center text-gray-800 mb-8 py-6">
        Our Services
      </h1>

      <div className="flex flex-col items-center lg:flex-row lg:items-center gap-8 mb-8 w-full max-w-6xl">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={pic1}
            alt="Interior Design"
            className="w-full h-auto max-h-60 sm:max-h-80 lg:max-h-96 xl:max-h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 max-h-60 sm:max-h-80 lg:max-h-96 xl:max-h-[500px]">
          <div className="flex items-center mb-4">
            <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              1
            </span>
            <h2 className="text-lg font-semibold text-gray-800">
              Workspace Design & Planning
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Customized office layouts to optimize productivity and
            collaboration. Space planning to maximize efficiency and meet
            specific business requirements. Ergonomic designs that promote
            health and well-being.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8">
          <div className="flex items-center mb-4">
            <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              2
            </span>
            <h2 className="text-lg font-semibold text-gray-800">
              Interior Decoration
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Tailored decor solutions that reflect your brand identity. Selection
            of furniture, fixtures, and finishes that align with your company’s
            vision. Integration of technology and modern design elements for a
            futuristic workspace.
          </p>
        </div>

        <div className="w-full mt-4">
          <Collage2 />
        </div>
      </div>

      <div className="w-full max-w-6xl mt-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8">
            <div className="flex items-center mb-4">
              <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                3
              </span>
              <h2 className="text-lg font-semibold text-gray-800">
                Turnkey Projects
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Complete project management from design to delivery. Coordination
              with contractors, vendors, and suppliers to ensure timely
              execution. Quality control and on-site supervision to maintain the
              highest standards.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <Slider {...carouselSettings}>
              <div className="relative flex items-center justify-center">
                <img
                  src={pic2}
                  alt="Project 1"
                  className="w-full h-auto max-h-60 sm:max-h-80 lg:max-h-96 xl:max-h-[500px] object-cover rounded-lg border border-gray-300 shadow-md"
                />
              </div>
              <div className="relative flex items-center justify-center">
                <img
                  src={pic3}
                  alt="Project 2"
                  className="w-full h-auto max-h-60 sm:max-h-80 lg:max-h-96 xl:max-h-[500px] object-cover rounded-lg border border-gray-300 shadow-md"
                />
              </div>
              <div className="relative flex items-center justify-center">
                <img
                  src={pic4}
                  alt="Project 3"
                  className="w-full h-auto max-h-60 sm:max-h-80 lg:max-h-96 xl:max-h-[500px] object-cover rounded-lg border border-gray-300 shadow-md"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center p-4 space-y-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8">
          <div className="flex items-center mb-4">
            <span className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              4
            </span>
            <h2 className="text-lg font-semibold text-gray-800">
              Renovation & Remodeling
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Transform your existing office into a dynamic, modern workspace.
            Upgrading infrastructure and facilities to meet contemporary
            standards. Sustainable and eco-friendly design options for a greener
            workspace.
          </p>
        </div>
        <div className="relative w-full max-w-[800px] h-[600px] aspect-w-16 aspect-h-9 bg-gray-200 border-8 border-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={pic5}
              alt="TV Screen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center bg-black text-white text-xl font-bold py-2"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black w-32 h-6 rounded-t-md shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
