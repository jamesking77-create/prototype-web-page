import React from "react";
import myImage from "../../assets/images/Cohort 14.png";
import "../../styles/portfolio.css";
import linkedin from "../../assets/images/icons8-linkedin-96.png";
import instagram from "../../assets/images/instagram.png";
import githubs from "../../assets/images/icons8-git-96.png";
import whatsapp from "../../assets/images/whatsapp.png";
import Gallery from "./gallery";
import webdev from "../../assets/images/icons8-web-development-48.png";
import mobdev from "../../assets/images/icons8-mobile-development-47.png";
import crdes from "../../assets/images/icons8-creative-design-64.png";

const Portfolio = () => {
  return (
    <div className="bg-black text-white min-h-screen">
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
            <h2 className="text-lg font-bold mt-4">WHO AM I?</h2>
            <p className="mt-4 p-4 text-lg">
              Hi, I am <span className="text-yellow-400">James Asuelimen</span>,
              professionally recognized as James King or Intellij. With a robust
              expertise in software engineering, I specialize in web
              development, mobile development, and creative design. Renowned for
              my proficiency in programming and artistic endeavors, I bring a
              wealth of experience and skill to every project I undertake.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=08142186524"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out hover:bg-yellow-400 hover:text-white">
              HIRE ME
            </button>
          </a>
        </div>
      </div>

      <div className="bg-gray-800 py-10 md:py-20 text-center p-4">
        <h2 className="text-3xl font-bold mb-8">What I Do?</h2>
        <div class="flex flex-wrap justify-center gap-4 md:gap-8">
          <div class="w-full md:w-1/4 bg-gray-700 p-6 rounded-lg  items-center">
            <div className="flex">
              <img
                src={webdev}
                alt="Web Development Icon"
                class="w-8 h-8 mr-4"
              />
              <h3 class="text-xl font-bold mb-4">Web Development</h3>
            </div>
            <div class="h-2 bg-green-500 rounded-lg"></div>
          </div>
          <div class="w-full md:w-1/4 bg-gray-700 p-6 rounded-lg mt-6 md:mt-0 items-center">
            <div className="flex">
              <img
                src={mobdev}
                alt="Mobile Development Icon"
                class="w-8 h-8 mr-4"
              />
              <h3 class="text-xl font-bold mb-4">Mobile Development</h3>
            </div>
            <div class="h-2 bg-blue-500 rounded-lg"></div>
          </div>
          <div className="w-full md:w-1/4 bg-gray-700 p-6 rounded-lg mt-6 md:mt-0  items-center">
            <div class="flex">
              <img
                src={crdes}
                alt="Creative Designs Icon"
                class="w-8 h-8 mr-4"
              />
              <h3 class="text-xl font-bold mb-4">Creative Designs</h3>
            </div>
            <div class="h-2 bg-red-500 rounded-lg"></div>
          </div>
        </div>

        <div class="button-container flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
          <a
            href="https://github.com/jamesking77-create"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="bg-transparent border-2 border-green-500 text-green-500 font-bold py-2 px-8 rounded-full mb-2 md:mb-0 md:mr-2">
              View Projects
            </button>
          </a>

          <button class="bg-transparent border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded-full">
          <a href="../../assets/docs/JamesOluwalekeAsuelimenCV.pdf" download>Download Resume</a>
          </button>
        </div>

        <h1 className="text-3xl font-bold  mt-12 mb-4">Projects Preview</h1>
        <div className="p-8">
          <Gallery />
        </div>
      </div>

      <footer className="bg-gray-900 text-center py-8  ">
        <p className="text-2xl font-bold  text-green-500   mt-2 mb-4">
          Follow for more
        </p>
        <div className="flex flex-wrap justify-center items-center flex flex-wrap justify-center gap-4 md:gap-8 p-3">
          <div
            className="m-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
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

          <div
            className="m-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a
              href="https://www.instagram.com/_jamess_kingg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="h-6 w-6 mr-1" />
            </a>
            <span className="text-white block md:inline">@_jamess_kingg/</span>
          </div>

          <div
            className="m-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=08142186524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" className="h-6 w-6 mr-1" />
            </a>
            <span className="text-white block md:inline">08142186524</span>
          </div>

          <div
            className="m-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
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
