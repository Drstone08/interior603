import React from 'react';
import image1 from '../images/cowbell-offices-pune-1-768x511-compact.jpg';
import image2 from '../images/cowbell-offices-pune-5-768x511-compact.jpg';
import image3 from '../images/cowbell-offices-pune-768x511-compact.jpg';

const Collage2 = () => {
  return (
    <div className="flex justify-center p-5 bg-gray-50">
      <div className="relative flex flex-col items-center">
        {/* Upper Image */}
        <div className="z-10 mb-4 absolute p-2 bg-yellow-200 rounded-lg pb-3 shadow-lg border-2 border-yellow-300">
          <img
            src={image1}
            alt="Collage Image 1"
            className="h-72 w-[300px] object-cover rounded-lg shadow-2xl hover:shadow-[0px_0px_20px_rgba(0,0,0,0.5)] transition-shadow duration-300"
          />
        </div>

        {/* Lower Images */}
        <div className="flex flex-row gap-8 mt-[200px] md:gap-4 sm:gap-0">
          <div className="z-0 p-2 bg-white rounded-lg pb-3 shadow-lg border-2 border-gray-200">
            <img
              src={image2}
              alt="Collage Image 2"
              className="h-72 w-[300px] object-cover rounded-lg shadow-xl hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300"
            />
          </div>
          <div className="z-0 p-2 bg-white rounded-lg pb-3 shadow-lg border-2 border-gray-200">
            <img
              src={image3}
              alt="Collage Image 3"
              className="h-72 w-[300px] object-cover rounded-lg shadow-xl hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage2;
