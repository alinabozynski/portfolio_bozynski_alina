import React from "react";
import BasicInformation from "./components/BasicInformation";
import DeveloperSetup from "./components/DeveloperSetup";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Resources from "./components/Resources";

export default function App() {
  return (
    <main id="app" className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <BasicInformation />
      <Skills />
      <DeveloperSetup />
      <Work />
      <Resources />
    </main>
  );
}
