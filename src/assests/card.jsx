import React from 'react';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa'; 

const Card = ({ icon: Icon, reason1, explanation }) => {
  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-80 p-4 bg-white shadow-lg rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
      <div className="text-4xl mb-3 text-yellow-400">
        <Icon />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{reason1}</h2>
      <p className="text-gray-600">{explanation}</p>
    </div>
  );
};

export default Card;
