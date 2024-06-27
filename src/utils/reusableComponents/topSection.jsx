import React from 'react';
import topic from '../../assets/images/etienne-girardet-sgYamIzhAhg-unsplash.jpg';

const TopSection = () => {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex-1 bg-gray-200 h-2/3">
        <img src={topic} alt="Descriptive Alt Text" className="w-full h-full object-cover" />
      </div>
      <div className="h-1/4  p-4 bg-green-900 flex items-center justify-center">
        <p className="text-white text-lg sm:text-lg md:text-xl lg:text-2xl font-medium text-center px-4">
          ENGINEERING-PROCUREMENT-CONSTRUCTION-3D LASER SCANNING-TECHNICAL MANPOWER SUPPLY 
        </p>
      </div>
    </div>
  );
};

export default TopSection;
``
