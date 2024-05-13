import React from "react";
import myImage from "../../assets/images/Cohort 14.png";
import "../../styles/portfolio.css";
import linkedin from "../../assets/images/icons8-linkedin-96.png";
import instagram from "../../assets/images/instagram.png";
import githubs from "../../assets/images/icons8-git-96.png";
import whatsapp from "../../assets/images/whatsapp.png";
import Gallery from "./gallery";

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Section */}
      <div className="py-20 text-center">
        <div className="mb-8 mx-auto w-56 h-56">
          <img
            src={myImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover "
            style={{ objectPosition: "center -1%" }}
          />
        </div>
        <div class="title">
          <h1 className="myname">James King</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="max-w-lg lg:max-w-xl">
            {" "}
            {/* Adjust the max-width as needed */}
            <h2 className="text-lg font-bold mt-4">WHO AM I?</h2>
            <p className="mt-4 p-4 text-lg">
              Hi, my name is{" "}
              <span style={{ color: "#f7a307" }}>James Asuelimen</span> ,
              popularly known as James King or Intellij. I am a professional
              software engineer with a solid background in web developement,
              mobile development and creative designs. Programming and art are
              all I'm known for.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-10 md:py-20 text-center p-4">
        <h2 className="text-3xl font-bold mb-8">What I Do?</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="w-full md:w-1/4 bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold  mb-4">Web development</h3>
            <div className="h-4 bg-red-200 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/4 bg-gray-700 p-6 rounded-lg mt-6 md:mt-0">
            <h3 className="text-xl font-bold mb-4">mobile Devlopment</h3>
            <div className="h-4 bg-blue-500 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/4 bg-gray-700 p-6 rounded-lg mt-6 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Creative Designs</h3>
            <div className="h-4 bg-green-500 rounded-lg"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold  mt-8 mb-8">Sample Projects</h1>
        <div className="p-8">
          <Gallery />
        </div>
      </div>

      <footer className="bg-gray-800 text-center py-8 border bg-gray-200">
        <div className="flex flex-wrap justify-center items-center">
          <div className="m-1" style={{display: 'flex', justifyContent:'space-between'}}>
            <a
              href="https://www.linkedin.com/in/jamesasuelimen77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="h-6 w-6 mr-1" />
            </a>
            <span className="text-white block md:inline">
              @jamesasuelimen77
            </span>
          </div>

          <div className="m-1" style={{display: 'flex', justifyContent:'space-between'}}>
            <a
              href="https://www.instagram.com/_jamess_kingg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-6 w-6 mr-1" />
            </a>
            <span className="text-white block md:inline">@_jamess_kingg/</span>
          </div>

          <div className="m-1" style={{display: 'flex', justifyContent:'space-between'}}>
            <a
              href="https://api.whatsapp.com/send?phone=08142186524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 mr-1" />
            </a>
            <span className="text-white block md:inline">08142186524</span>
          </div>

          <div className="m-1" style={{display: 'flex', justifyContent:'space-between'}}>
            <a
              href="https://github.com/jamesking77-create"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubs} alt="GitHub" className="h-6 w-6 mr-1" />
            </a>
            <span className="text-white block md:inline">
              @jamesking77-create
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
