import React from "react";

const BottomSection = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Our Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            At Gmunu Limited, we specialize in providing innovative solutions.
            With our cutting-edge technology and skilled team, we deliver
            accurate and precise results for various industries. From conceptual
            design to infrastructure development, we ensure excellence in every
            project we undertake.
          </p>
        </div>
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Our Commitment
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            We are committed to building a better future through our innovative
            solutions and unwavering integrity. We strive to exceed client
            expectations by delivering exceptional results that meet the highest
            industry standards. With a focus on sustainability and efficiency,
            we aim to contribute to the growth and development of Nigeria's
            infrastructure.
          </p>
        </div>
      </div>
      <div className="h-1/4  p-4 bg-green-900 flex items-center justify-center">
      <div className="h-1/5 bg-green-900 flex items-center justify-center">
        <div className="w-full px-4 flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/3 text-center p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">MISSION</h3>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
              To develops and use cutting edge technology to deliver engineering solution 
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">VISION</h3>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
              To set enginnering pace in Africa 
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center p-4">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">CORE VALUES</h3>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
              Quality, pricing safety and innovations 
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BottomSection;
