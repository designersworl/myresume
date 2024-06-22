import React from 'react';
import priya from '../assets/priya.jpg';

export default function Header() {
  return (
    <header className="flex justify-center py-6">
      <div className="flex items-center justify-between w-full max-w-6xl mx-4 bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-full shadow-lg">
        {/* Left side with name and occupation */}
        <div className="flex items-center space-x-6">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 transition-colors duration-300">
              Priya Bommisetty
            </h1>
            <p className="text-xl pl-14 pt-2 text-gray-700"> - Web Design Student</p>
          </div>
        </div>

        {/* Right side with image */}
        <div className="flex-shrink-0">
          <img
            src={priya}
            alt="Your Photo"
            className="h-32 w-32 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
}

  
  
  
  
  
  