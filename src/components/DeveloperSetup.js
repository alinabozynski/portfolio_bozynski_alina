import { DatabaseIcon } from "@heroicons/react/solid";
import React from "react";
import vscode from "../assets/images/vscode.jpg";
import ps from "../assets/images/ps.png";
import cmd from "../assets/images/cmd.png";
import ubuntu from "../assets/images/ubuntu.png";
import product_icons from "../assets/images/product_icon_theme.png";
import { extensions, WSLExtensions } from "../data";

export default function DeveloperSetup() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="developer-setup" className="pt-20">
      <div className="container mx-auto px-10 py-10 items-center">
        <div className="flex flex-wrap mb-8">
          <DatabaseIcon className="w-10 inline-block" />
          <h1 className="title-font text-4xl font-medium text-white lg:pl-5">
            Developer Setup
          </h1>
        </div>
        <div className="items-center text-center">
          <div className="items-center text-center mb-10 lg:mb-0">
            <img
              className="lg:max-w-lg sm:max-w-sm rounded float-left pt-2"
              alt="Product Icon Theme"
              src={product_icons}
            />
            <h1 className="title-font text-4xl mb-4 font-medium text-white">
              VS Code Setup
            </h1>
            <p className="mb-3">Fun Details:</p>
            <ul className="mx-5">
              <li>
                <strong>Color Theme:</strong> &quot;Dark+ (default dark)&quot;
              </li>
              <li>
                <strong>File Icon Theme:</strong> &quot;Seti (Visual Studio
                Code)&quot;
              </li>
              <li>
                <strong>Product Icon Theme:</strong> &quot;flippidippi product
                icons&quot;
              </li>
              <li className="mb-3">
                <strong>Preferred Editor Font:</strong> &quot;
                <span className="tracking-widest font-display">
                  Unbounded, monospace
                </span>
                &quot;
              </li>
            </ul>
            <img
              className="mb-8 mx-auto rounded pt-5 lg:max-w-lg float-right lg:float-none"
              alt="VS Code"
              src={vscode}
            />
          </div>
          <p>Locally Installed Extensions:</p>
          <ul className="mb-8 sm:block lg:flex lg:flex-wrap justify-center">
            {extensions.map((extension) => (
              <span key={extension.name}>
                <li className="p-3 flex-none">
                  <a
                    className="inline-flex text-white py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                    href={extension.link}
                  >
                    {extension.name}
                  </a>
                </li>
              </span>
            ))}
          </ul>
          <p>Installed Extensions for WSL: Ubuntu</p>
          <ul className="mb-8 sm:block lg:flex lg:flex-wrap justify-center">
            {WSLExtensions.map((extension) => (
              <span key={extension.name}>
                <li className="p-3 flex-none">
                  <a
                    className="inline-flex text-white py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                    href={extension.link}
                  >
                    {extension.name}
                  </a>
                </li>
              </span>
            ))}
          </ul>
        </div>
        <div className="items-center text-center">
          <h1 className="title-font text-4xl mb-4 font-medium text-white">
            Terminal Setup
          </h1>
          <div className="items-center text-center mb-8 leading-relaxed flex flex-wrap">
            <div className="p-5 w-1/3 mx-auto hover:underline hover:text-white">
              <p>
                <a href="https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3">
                  <img className="rounded" alt="Powershell" src={ps} />
                  Windows Powershell
                </a>
              </p>
            </div>
            <div className="p-5 w-1/3 mx-auto hover:underline hover:text-white">
              <p>
                <a href="https://ubuntu.com/wsl">
                  <img
                    className="rounded"
                    alt="WSL Ubuntu Terminal"
                    src={ubuntu}
                  />
                  Ubuntu
                </a>
              </p>
            </div>
            <div className="p-5 w-1/4 mx-auto hover:underline hover:text-white">
              <p>
                <a href="https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/">
                  <img className="rounded" alt="Windows CMD" src={cmd} />
                  Windows Command Prompt
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-15 text-white">
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
