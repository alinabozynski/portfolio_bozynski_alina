import { BadgeCheckIcon, ClipboardCheckIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { languages } from "../data";
import { frontEnd } from "../data";
import { backEnd } from "../data";
import { tools } from "../data";

export default function Skills() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [class1, setClass1] = useState(false);
  const [class2, setClass2] = useState(false);
  const [class3, setClass3] = useState(false);
  const [class4, setClass4] = useState(false);
  const [class5, setClass5] = useState(false);
  const [class6, setClass6] = useState(false);
  const [class7, setClass7] = useState(false);
  const [class8, setClass8] = useState(false);
  const [class9, setClass9] = useState(false);
  const [class10, setClass10] = useState(false);
  const [class11, setClass11] = useState(false);
  const [class12, setClass12] = useState(false);

  return (
    <section id="skills" className="pt-20">
      <div className="container px-5 py-10 mx-auto">
        <div className="pb-5">
          <div className="flex flex-wrap mb-10">
            <ClipboardCheckIcon className="w-10 inline-block" />
            <h1 className="text-4xl sm:flex-wrap font-medium title-font text-white lg:pl-5">
              Skills &amp; Technologies
            </h1>
          </div>
          <div>
            <p className="mx-auto mb-2 text-center">
              Many skills &#40;Front-End, Back-End, Frameworks/Tools,
              Languages&#41; were acquired through the following courses within
              the Full Stack Program.
              <br className="mb-5" />
              Click them to see what they were all about!
            </p>
            <div className="flex flex-wrap justify-center">
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass1(!class1)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Web Development 1, 2 &amp; 3
                </button>
                {class1 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 w-80">
                      <li className="font-bold">
                        Web Development 1, 2 &amp; 3
                      </li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>HTML5</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>CSS</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>JavaScript</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>JSON</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Cookies &amp; Sessions</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>PHP</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>MySQL</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>REST-based Python API Frameworks</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Cloud based infrastructure</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass2(!class2)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Programming
                </button>
                {class2 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">Programming</li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Java</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Developing, coding, testing, debugging</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>
                          Data structures such as inheritance, encapsulation,
                          and polymorphism
                        </li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass3(!class3)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Database Management Systems
                </button>
                {class3 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">Database Management Systems</li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>SQL</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>DDL</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>DML</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>ERDs</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Database Table Normalization</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass4(!class4)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Information Systems
                </button>
                {class4 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">Information Systems</li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>OS interactions with device applications</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Computer hardware</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Computer networks</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass5(!class5)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Project Management Fundamentals and Agile Business Analysis
                </button>
                {class5 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">
                        Project Management Fundamentals and Agile Business
                        Analysis
                      </li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Project Lifecycle</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Risk Management</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Cost Management</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Work Breakdown Structures</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Agile Methodologies &amp; Documentation</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass6(!class6)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  OO Systems Analysis & Design
                </button>
                {class6 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">
                        OO Systems Analysis & Design
                      </li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Unified Modeling Language</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Object-Oriented Systems Analysis</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Use Cases</li>
                        <li>Systems Development Life Cycle</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass7(!class7)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Business Requirements Gathering & Design
                </button>
                {class7 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">
                        Business Requirements Gathering & Design
                      </li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Document Development</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Design based on requirements</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Problem Solving</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Meetings</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass8(!class8)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Web Security
                </button>
                {class8 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">Web Security</li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Attacks (how and prevention)</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Cryptography</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Understanding exploits</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Ethical Hacking</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass9(!class9)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Agile Full Stack Web Development
                </button>
                {class9 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">
                        Agile Full Stack Web Development
                      </li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Back End Examination</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>E-Commerce</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Source Control</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass10(!class10)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Business Systems Build and Testing
                </button>
                {class10 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">
                        Business Systems Build and Testing
                      </li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Quality Assurance</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Application Deployment</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Testing against requirements</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>React JS</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Typescript</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass11(!class11)}
                  className="p-3 lg:flex-none sm:flex-wrap mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Communication Strategies (Basics, for Systems and Innovative
                  Thinking, &amp; for the Workplace)
                </button>
                {class11 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">Communication Strategies</li>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Self-Awareness</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Interpersonal Skills</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Intercultural Competence</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Innovative Solutions</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>PACT - Purpose, Audience, Context, Tone</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="group flex relative mx-1.5">
                <button
                  type="button"
                  onClick={() => setClass12(!class12)}
                  className="p-3 flex-none mx-auto my-2 hover:text-white bg-white bg-opacity-5"
                >
                  Industry Project &#40;Co-Op&#41;
                </button>
                {class12 ? (
                  <div className="border-t border-r border-b my-1.5">
                    <ul className="p-5 relative">
                      <li className="font-bold">Industry Project</li>
                      <div className="flex">
                        Real-world, on-the-job experience as a web developer or
                        3Common Inc., joining their development team in the
                        middle of their app building process.
                      </div>
                      <div className="flex underline mb-1">
                        <a
                          href="https://app.3common.com"
                          className="mr-5 hover:text-white"
                        >
                          View the live site
                        </a>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Vue.js</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Quasar</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>Netlify</li>
                      </div>
                      <div className="flex">
                        <BadgeCheckIcon className="text-green-400 w-5 h-5 mr-1" />
                        <li>MongoDB</li>
                      </div>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Tools
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {tools.map((tool) => (
              <div key={tool} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Front-End
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {frontEnd.map((frontEnd) => (
              <div key={frontEnd} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {frontEnd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Back-End
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {backEnd.map((backEnd) => (
              <div key={backEnd} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {backEnd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-5">
          <h1 className="text-4xl font-medium title-font text-white mb-4 text-center">
            Languages
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {languages.map((language) => (
              <div key={language} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-white">
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
