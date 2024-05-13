import React from "react";
import cop from "../../assets/images/cop1.png"
import mrs1 from "../../assets/images/mrsc1.png"
import ditco from "../../assets/images/sparr.png"
import bime from "../../assets/images/Untitled design (2).png"
const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Box 1 */}
      <div className="bg-gray-500 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">COOPERA</h2>
          <div className="h-1 w-20 bg-blue-500 mb-4"></div>
          <img
            src={cop}
            alt="Gallery Image 1"
            className="w-full"
          />
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-gray-500 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">MRS 1.0</h2>
          <div className="h-1 w-20 bg-green-500 mb-4"></div>
          <img
            src={mrs1}
            alt="Gallery Image 2"
            className="w-full"
          />
        </div>
      </div>

      {/* Box 3 */}
      <div className="bg-gray-500 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">SPARR</h2>
          <div className="h-1 w-20 bg-red-500 mb-4"></div>
          <img
            src={ditco}
            alt="Gallery Image 3"
            className="w-full"
          />
        </div>
      </div>

      {/* Box 4 */}
      <div className="bg-gray-500 rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">BIME.</h2>
          <div className="h-1 w-20 bg-yellow-500 mb-4"></div>
          <img
            src={bime}
            alt="Gallery Image 4"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
