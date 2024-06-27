import React from "react";
import imageSrc from "../../assets/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg";

const MiddleSection = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 w-full md:order-1 order-2 bg-white p-6 flex items-center justify-center">
          <p className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg font-small">
            <span className="text-green-600 font-bold text-sm sm:text-base md:text-lg lg:text-xl">WELCOME</span> to GMUNU Limited GMUNU Limited was established in the year
            2013 as a full-service Engineering, Procurement and Construction
            Company to serve the oil and gas industry with specialized expertise
            for both onshore and offshore developments. Since 2013, Gmunu
            Limited continues to strive for providing reliable, quality and
            cost-effective solutions to local and multinational firms. We are
            committed to following standard engineering codes of
            practice/standards with HSE and client ultimate satisfaction at the
            top. Gmunu Limited incorporates the use of 3D laser scanning
            technology to significantly support her engineering and construction
            <br /> <br/>
            projects to reduce project cost for project owners, reduce
            offshore/onshore installation cost, reduce hot work during
            construction, and significantly reduce barge time during
            construction while optimizing client resources. In Nigeria, we
            proudly acclaim to provide the best quality and cost-effective
            <br /> <br/>
            engineering and construction solutions. We have assembled a quality
            team of professional to serve the oil and gas industry. Our team of
            professionals has had the opportunity to face many engineering
            challenges through the years. This technical expertise knowledge
            will ensure that the optimum design approaches are selected to meet
            your project requirements. With a team of highly skilled
            professionals and state-of-the-art equipment, we deliver top-notch
            solutions to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="md:w-1/3 h-1/2 mt-20 w-full md:order-2 order-1 bg-gray-200">
          <img
            src={imageSrc}
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
