import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <footer className="p-10 bg-gradient-to-r from-blue-50 to-blue-100 mt-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-700">Contact Me</h2>
        <div className="flex space-x-8">
          <div
            className="group flex flex-col items-center relative"
            onMouseEnter={() => handleMouseEnter('linkedin')}
            onMouseLeave={handleMouseLeave}
          >
            <FaLinkedin className="text-4xl text-blue-700 transition-transform duration-300 transform group-hover:scale-125 group-hover:text-blue-500" />
          </div>
          <div
            className="group flex flex-col items-center relative"
            onMouseEnter={() => handleMouseEnter('email')}
            onMouseLeave={handleMouseLeave}
          >
            <FaEnvelope className="text-4xl text-gray-700 transition-transform duration-300 transform group-hover:scale-125 group-hover:text-gray-500" />
          </div>
          <div
            className="group flex flex-col items-center relative"
            onMouseEnter={() => handleMouseEnter('facebook')}
            onMouseLeave={handleMouseLeave}
          >
            <FaFacebook className="text-4xl text-blue-600 transition-transform duration-300 transform group-hover:scale-125 group-hover:text-blue-400" />
          </div>
        </div>
        <div className="mt-4 p-6 bg-white rounded-lg shadow-lg transition-opacity duration-300 opacity-100 h-19">
          {hoveredIcon === 'linkedin' && (
            <p className="text-gray-700 font-mono font-semibold">UserName:Bhavani Maturi</p>
          )}
          {hoveredIcon === 'email' && (
            <p className="text-gray-700 font-mono font-semibold">Email:mpriyadurgabhavani@gmail.com</p>
          )}
          {hoveredIcon === 'facebook' && (
            <p className="text-gray-700 font-mono font-semibold">BhavaniMaturi</p>
          )}
          {!hoveredIcon && (
            <p className="text-gray-700 font-mono font-semibold">Hover over the icons to see my contact details.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
