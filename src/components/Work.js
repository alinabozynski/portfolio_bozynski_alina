import { ArchiveIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Work() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="text-gray-400 bg-gray-900 pt-20">
      <div className="container mx-auto px-10 py-10 items-center w-100">
        <div className="flex flex-wrap mb-10">
          <ArchiveIcon className="w-10 inline-block" />
          <h1 className="title-font text-4xl font-medium text-white lg:pl-5">
            My Projects
          </h1>
        </div>
        <p className="lg:w-2/3leading-relaxed text-base mb-5 text-center">
          Here is the fun part!
          <br />
          Hover a project image to see what it was about, then click to view it
          in action.
        </p>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={process.env.PUBLIC_URL + project.link}
              key={project.image}
              className="sm:w-1/2 w-full h-full p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-72 object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full h-72 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-green-400 mb-3">
                    <InformationCircleIcon className="w-10 inline-block pr-3" />
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">
                    {project.description}
                  </h2>
                  <p className="leading-relaxed">
                    Made with {project.techList}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-20 text-white">
          <p className="tracking-widest font-display p-2">
            <button
              onClick={scrollToTop}
              className="hover:text-white hover:underline p-1"
            >
              Back to Top
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
