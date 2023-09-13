import React from "react";
import { CollectionIcon } from "@heroicons/react/solid";

export default function Resources() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="resources" className="pt-20">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-wrap mb-10">
          <CollectionIcon className="w-10 inline-block mb-4" />
          <h1 className="text-4xl sm:flex-wrap font-medium title-font text-white lg:pl-5">
            Resources
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          <div className="p-4 md:w-1/2 w-full">
            <a href="https://catalogue.rrc.ca/Programs/WPG/Parttime/FUSTP-CT/CoursesandDescriptions">
              <div className="group h-full bg-gray-800 bg-opacity-40 p-8 hover:border-white border-transparent border">
                <img
                  alt="RRC Catalogue Logo"
                  src="https://catalogue.rrc.ca/Images/rrc-catalogue.svg"
                  className="max-h-8 w-auto rounded flex-shrink-0 group p-1 bg-white bg-opacity-25 mb-5 group-hover:border-white border-transparent border"
                />
                <p className="leading-relaxed mb-3 group-hover:underline text-white">
                  Red River College Course Info
                </p>
                <div>
                  <span className="group">
                    <p className="title-font font-medium group">
                      Used to get the info that appears on hover over the
                      classes I have taken.
                    </p>
                  </span>
                  <span className="group">
                    <p className="title-font font-medium group-hover:underline group-hover:text-white mt-3">
                      https://catalogue.rrc.ca/Programs/WPG/Parttime/FUSTP-CT/CoursesandDescriptions
                    </p>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <a href="https://www.freecodecamp.org/news/build-portfolio-website-react/">
              <div className="group h-full bg-gray-800 bg-opacity-40 p-8 hover:border-white border-transparent border">
                <img
                  alt="logo"
                  src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg"
                  className="max-h-8 w-auto rounded flex-shrink-0 group p-1 bg-white bg-opacity-25 mb-5 group-hover:border-white border-transparent border"
                />
                <p className="leading-relaxed mb-3 group-hover:underline text-white">
                  How to Build a Portfolio Website with React
                </p>
                <div>
                  <span className="group">
                    <p className="title-font font-medium group">
                      Used to help me create this portfolio.
                    </p>
                  </span>
                  <span className="group">
                    <p className="title-font font-medium group-hover:underline group-hover:text-white mt-3">
                      https://www.freecodecamp.org/news/build-portfolio-website-react/
                    </p>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <p className="tracking-widest font-display p-2">
            <button
              onClick={scrollToTop}
              className="hover:text-white hover:bg-green-600 p-1"
            >
              Alina Bozynski
            </button>{" "}
            | Red River College | 2023
          </p>
        </div>
      </div>
    </section>
  );
}
